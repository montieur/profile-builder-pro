import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Map, Plane, Database, Globe } from "lucide-react";

const highlights = [
  { icon: Map, label: "Geoprocessamento" },
  { icon: Plane, label: "Drones & RPAS" },
  { icon: Database, label: "SIG & SIG Web" },
  { icon: Globe, label: "Sensoriamento Remoto" },
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
                  Sou Analista em Geoprocessamento com mais de 10 anos de experiência 
                  na área de geociências, atuando em projetos de mapeamento, análise 
                  espacial e soluções territoriais. Possuo formação em Tecnologia em 
                  Geoprocessamento pelo IFPB e especializações em Geomarketing, 
                  Drones/VANTs e Gestão de Projetos.
                </p>
                <p>
                  Tenho forte experiência em processamento digital de imagens aéreas 
                  utilizando softwares como Metashape e Drone2Map, além de proficiência 
                  na plataforma ESRI (ArcGIS, ArcGIS Pro, ArcGIS Online) e QGIS para 
                  análise e manipulação de dados geoespaciais.
                </p>
                <p>
                  Atuo com planejamento e pilotagem de drones para captura de imagens 
                  aéreas, aerofotogrametria, cartografia digital, produção de mapas 
                  temáticos e modelagem geográfica.
                </p>
                <p className="text-foreground font-medium">
                  Minha missão é transformar dados geoespaciais em inteligência 
                  territorial, apoiando a tomada de decisão com precisão e inovação 
                  tecnológica.
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
