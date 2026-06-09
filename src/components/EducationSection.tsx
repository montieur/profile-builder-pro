import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Tecnologia em Geoprocessamento",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba (IFPB)",
    type: "Nível Superior Completo",
    period: "Concluído em 2023",
    current: false,
  },
  {
    degree: "Pós-Graduação Lato Sensu em Docência em Ciência e Tecnologia da Informação",
    institution: "FACUMINAS",
    type: "Pós-graduação Lato Sensu",
    period: "Out 2024 – Abr 2026",
    current: true,
    disciplines: [
      "Programação Web",
      "Engenharia e Qualidade de Software",
      "Segurança em Sistemas Web",
      "Gestão de Processos de Software",
    ],
  },
  {
    degree: "Pós-Graduação Lato Sensu em Inteligência Artificial",
    institution: "FACUMINAS",
    type: "Pós-graduação Lato Sensu",
    period: "Out 2024 – Abr 2026",
    current: true,
    disciplines: [
      "Deep Learning",
      "Reinforcement Learning",
      "Engenharia de Software para IA",
      "Classificação e Predição",
    ],
  },
  {
    degree: "MBA em Gestão de Projetos",
    institution: "FACUMINAS",
    type: "MBA",
    period: "Out 2024 – Abr 2026",
    current: true,
    disciplines: [
      "Gerenciamento de Riscos",
      "Gestão da Qualidade",
      "Gestão Financeira",
      "Gestão de Processos e Negócios",
    ],
  },
  {
    degree: "Pós-Graduação Lato Sensu em VANTs e Drones: Legislação, Planejamento e Aplicações",
    institution: "FACUMINAS",
    type: "Pós-graduação Lato Sensu",
    period: "Out 2024 – Mar 2026",
    current: true,
    disciplines: [
      "Sensoriamento Remoto e VANTs",
      "Fotogrametria e Processamento Digital de Imagens",
      "Sistemas Embarcados para VANTs e Drones",
    ],
  },
  {
    degree: "Pós-Graduação Lato Sensu em Geomarketing e Inteligência de Mercado",
    institution: "FACUMINAS",
    type: "Pós-graduação Lato Sensu",
    period: "Jul 2024 – Jan 2026",
    current: true,
    disciplines: [
      "Big Data e Gestão de Dados",
      "Estatística Espacial e Geoestatística",
      "Geoprocessamento Aplicado",
      "Inteligência de Mercado",
    ],
  },
];

const certifications = [
  {
    name: "CORPAS – Operações com Drones (30h)",
    institution: "ENAP (Escola Nacional de Administração Pública)",
    year: "2025",
    highlight: "Nota final: 100",
  },
  {
    name: "Spatial Data Science: The New Frontier in Analytics (MOOC)",
    institution: "Esri",
    year: "2023",
  },
  {
    name: "ArcGIS Drone2Map Basics",
    institution: "Esri Academy",
    year: "2023",
  },
  {
    name: "ArcGIS Survey123 (Creating and Publishing Surveys / Connect)",
    institution: "Esri Academy",
    year: "2023",
  },
  {
    name: "Going Places with Spatial Analysis (MOOC)",
    institution: "Esri",
    year: "2023",
  },
  {
    name: "ArcGIS Urban / Map Layer Basics / ArcGIS Online Basics",
    institution: "Esri Academy",
    year: "2022",
  },
  {
    name: "ArcGIS Enterprise: Architecting Your Deployment / Workflow Manager",
    institution: "Esri Academy",
    year: "2022",
  },
  {
    name: "Mapeamento Aéreo e Topografia com Drones",
    institution: "Udemy",
    year: "2021",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formacao" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Formação <span className="gradient-text">Acadêmica</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Formação
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-glass"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {item.degree}
                      </h4>
                      {item.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full whitespace-nowrap">
                          Em curso
                        </span>
                      )}
                    </div>
                    <p className="text-primary text-sm font-medium mb-1">
                      {item.institution}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Award size={12} />
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {item.period}
                      </span>
                    </div>
                    {item.disciplines && item.disciplines.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-border/50">
                        <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1.5">
                          <BookOpen size={12} className="text-primary" />
                          Principais Disciplinas
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.disciplines.map((disc, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-[10px] bg-muted/80 text-muted-foreground rounded-md"
                            >
                              {disc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
                <Award className="text-primary" size={24} />
                Certificações
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-glass py-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {cert.institution}
                        </p>
                        {cert.highlight && (
                          <span className="text-xs text-primary font-medium">
                            {cert.highlight}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
