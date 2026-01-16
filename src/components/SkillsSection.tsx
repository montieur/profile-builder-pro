import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Plataforma ESRI",
    skills: ["ArcGIS Pro", "ArcGIS Online", "ArcMap", "ArcGIS Survey123", "ArcGIS Urban", "Drone2Map", "ArcGIS Enterprise"],
  },
  {
    title: "SIG & Análise Espacial",
    skills: ["QGIS", "Análise Espacial", "Modelagem Geográfica", "Cartografia Digital", "Mapas Temáticos", "SIG Web"],
  },
  {
    title: "Drones & Aerofotogrametria",
    skills: ["Pilotagem de RPAS", "Metashape (Agisoft)", "Planejamento de Voos", "Processamento de Imagens Aéreas", "MDT/MDS", "Ortofotos"],
  },
  {
    title: "Sensoriamento Remoto",
    skills: ["Processamento Digital de Imagens", "Análise de Cobertura Vegetal", "Monitoramento Territorial"],
  },
  {
    title: "Topografia",
    skills: ["Levantamentos Topográficos", "Geração de Modelos 3D", "Cabeamento Estruturado"],
  },
  {
    title: "Formação Acadêmica",
    skills: ["Tecnologia em Geoprocessamento (IFPB)", "Esp. Geomarketing", "Esp. VANTs e Drones", "MBA Gestão de Projetos"],
  },
  {
    title: "Certificações",
    skills: ["CORPAS – ENAP", "Spatial Data Science (Esri)", "ArcGIS Drone2Map", "Survey123", "Mapeamento com Drones"],
  },
  {
    title: "Idiomas",
    skills: ["Português (Nativo)", "Inglês (Básico)"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Habilidades</span> Técnicas
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="card-glass"
              >
                <h3 className="text-lg font-semibold font-display mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
