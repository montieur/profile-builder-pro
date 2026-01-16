import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Administrador de Redes, Sistemas e Banco de Dados",
    company: "Tecgeo – Tecnologia em Geoprocessamento",
    location: "João Pessoa, Paraíba, Brasil",
    period: "Novembro de 2024 – Atual",
    type: "Tempo integral",
    current: true,
  },
  {
    title: "Técnico de Helpdesk de TI",
    company: "Triade",
    location: "João Pessoa, Paraíba, Brasil",
    period: "Março de 2021 – Novembro de 2024",
    type: "Meio período / Híbrido",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-8 top-6 w-3 h-3 rounded-full -translate-x-1/2 ${
                      exp.current
                        ? "bg-primary glow-effect"
                        : "bg-muted-foreground"
                    }`}
                  />

                  <div className="card-glass hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold font-display mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Atual
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <Briefcase size={16} />
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
