import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Re-enable GA tracking if it was blocked
    const win = window as Window & { gtag?: (...args: unknown[]) => void };
    if (win.gtag) {
      win.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    // Disable GA tracking
    const win = window as Window & { gtag?: (...args: unknown[]) => void };
    if (win.gtag) {
      win.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Cookie className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                    Política de Cookies
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Este site utiliza cookies para análise de tráfego e melhorar sua experiência. 
                    Em conformidade com a LGPD (Lei Geral de Proteção de Dados), solicitamos seu 
                    consentimento para coletar dados de navegação.{" "}
                    <a
                      href="#"
                      className="text-primary hover:underline"
                      onClick={(e) => e.preventDefault()}
                    >
                      Saiba mais
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Aceitar
                </button>
              </div>

              <button
                onClick={handleDecline}
                className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
