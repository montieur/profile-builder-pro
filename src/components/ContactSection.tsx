import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            Entre em <span className="gradient-text">Contato</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Quer saber mais sobre minha trajetória ou trocar ideias sobre geotecnologias? 
            Fique à vontade para entrar em contato.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="mailto:jordymrj@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="card-glass flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <span className="font-medium">E-mail</span>
              <span className="text-sm text-muted-foreground break-all">
                jordymrj@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="tel:+5583996555296"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="card-glass flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="text-primary" size={24} />
              </div>
              <span className="font-medium">Telefone</span>
              <span className="text-sm text-muted-foreground">
                +55 83 99655-5296
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/5583996555296"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="card-glass flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <span className="font-medium">WhatsApp</span>
              <span className="text-sm text-muted-foreground">
                Mensagem direta
              </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jordy-monteiro"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="card-glass flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Linkedin className="text-primary" size={24} />
              </div>
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-muted-foreground">
                Perfil profissional
              </span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin size={18} />
            <span>João Pessoa, Paraíba, Brasil</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
