import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Network, Shield, Database } from "lucide-react";

const highlights = [
  { icon: Server, label: "Virtualização & Redes" },
  { icon: Network, label: "Monitoramento" },
  { icon: Shield, label: "Segurança" },
  { icon: Database, label: "Banco de Dados" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Sobre <span className="gradient-text">mim</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou Engenheiro de DevOps e Infraestrutura com sólida experiência em 
                  ambientes on-premises e híbridos, atuando no desenho, implementação 
                  e operação de sistemas críticos. Tenho como foco construir 
                  infraestruturas robustas, seguras e altamente disponíveis, garantindo 
                  confiabilidade e performance para o negócio.
                </p>
                <p>
                  Atuo com virtualização e redes, projetando e administrando clusters 
                  e ambientes virtualizados, além de redes corporativas seguras. Possuo 
                  forte experiência em monitoramento, automação e integração de sistemas, 
                  permitindo tomadas de decisão rápidas e operações mais eficientes.
                </p>
                <p>
                  No contexto de plataforma e back-end, trabalho com stacks web, bancos 
                  de dados, estratégias de backup, recuperação de desastres e integração 
                  com ferramentas corporativas.
                </p>
                <p className="text-foreground font-medium">
                  Minha prioridade é traduzir a infraestrutura em valor real para a 
                  empresa, com foco em automação, hardening de segurança, backup 
                  eficiente e métricas claras para otimizar operações e impulsionar 
                  o crescimento.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="card-glass flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
