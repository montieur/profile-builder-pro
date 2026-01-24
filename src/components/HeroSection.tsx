import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
              <img
                src={profileImage}
                alt="Jordy Jonathan Monteiro de Azevêdo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse" />
          </motion.div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
            >
              Analista em Geoprocessamento I
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6"
            >
              Jordy <span className="gradient-text">Monteiro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Especialista em Geotecnologias, Drones e SIG, transformando dados 
              geoespaciais em soluções inteligentes para o território.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/jordy-monteiro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:jordymrj@gmail.com"
                className="btn-outline"
              >
                <Mail size={20} />
                Entrar em contato
              </a>
              <a
                href="https://wa.me/5583996555296"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
