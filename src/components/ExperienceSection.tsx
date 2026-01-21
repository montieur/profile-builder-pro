import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Analista em Geoprocessamento I",
    company: "Tecgeo",
    location: "João Pessoa, Paraíba",
    period: "Abril de 2025 – Atual",
    type: "Tempo integral",
    current: true,
    description: "Atividades em SIG, SIG Web, aerofotogrametria, topografia e Plataforma ESRI. Planejamento e pilotagem de drones para captura de imagens aéreas. Processamento de imagens utilizando Metashape e Drone2Map. Cartografia digital, produção de mapas temáticos e modelagem geográfica.",
  },
  {
    title: "Auxiliar de Processamento de Dados",
    company: "Tecgeo",
    location: "João Pessoa, Paraíba",
    period: "Junho de 2021 – Março de 2025",
    type: "Tempo integral",
    current: false,
    description: "Geotecnologia com foco em SIG, SIG Web, aerofotogrametria, topografia e Plataforma ESRI. Planejamento, pilotagem de drones e execução de voos. Processamento de imagens aéreas utilizando Metashape (Agisoft) e Drone2Map (ESRI).",
  },
  {
    title: "Auxiliar de Processamento de Dados (Estágio)",
    company: "Tecgeo",
    location: "João Pessoa, Paraíba",
    period: "Agosto de 2018 – Agosto de 2020",
    type: "Estágio",
    current: false,
    description: "Atividades de geotecnologia: SIG, aerofotogrametria, topografia e Plataforma ESRI.",
  },
  {
    title: "Analista em Geoprocessamento",
    company: "Premier Consultoria",
    location: "João Pessoa, Paraíba",
    period: "Abril de 2018 – Agosto de 2018",
    type: "Tempo integral",
    current: false,
    description: "Planejamento e confecção de mapas de rotas escolares rurais do estado de Pernambuco e composição de custos dos respectivos municípios.",
  },
  {
    title: "Analista em Geoprocessamento",
    company: "AeroRobot",
    location: "João Pessoa, Paraíba",
    period: "Outubro de 2014 – Agosto de 2018",
    type: "Tempo integral",
    current: false,
    description: "Instrução do software PhotoScan/Metashape para processamento de imagens aéreas (VANT/drone). Processamento de imagens aerofotogramétricas digitais.",
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

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold font-display mb-1">
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

                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
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
