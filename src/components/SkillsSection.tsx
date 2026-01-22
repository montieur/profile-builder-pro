import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Plataforma ESRI",
    skills: ["ArcGIS Pro", "ArcGIS Online", "ArcMap", "ArcGIS Survey123", "ArcGIS Urban", "Drone2Map", "ArcGIS Enterprise", "Workflow Manager"],
  },
  {
    title: "SIG & Análise Espacial",
    skills: ["QGIS", "Análise Espacial", "Modelagem Geográfica", "Cartografia Digital", "Mapas Temáticos", "SIG Web", "Ciência de Dados Espaciais"],
  },
  {
    title: "Drones & Aerofotogrametria",
    skills: ["Pilotagem de RPAS", "Metashape (Agisoft)", "Drone2Map (ESRI)", "Planejamento de Voos", "Processamento de Imagens Aéreas", "MDT/MDS", "Ortofotos", "Fotogrametria Digital"],
  },
  {
    title: "Imageamento Terrestre 360°",
    skills: ["Captura de Imagens 360°", "Câmeras Panorâmicas", "Street View", "Mapeamento Mobile", "Georreferenciamento de Imagens", "Inspeção Visual Remota", "Documentação de Campo"],
  },
  {
    title: "Sensoriamento Remoto",
    skills: ["Processamento Digital de Imagens", "Análise de Cobertura Vegetal", "Monitoramento Territorial", "Análise Multitemporal"],
  },
  {
    title: "Topografia & Modelos 3D",
    skills: ["Levantamentos Topográficos", "Geração de Modelos 3D", "Aerotriangulação", "Modelagem de Terreno"],
  },
  {
    title: "Coleta de Dados",
    skills: ["ArcGIS Survey123", "Coleta Georreferenciada", "Formulários de Campo", "GPS/GNSS"],
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
