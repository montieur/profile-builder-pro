import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, BookOpen, Mic } from "lucide-react";

const publications = [
  {
    type: "Artigo Científico",
    title: "Geotecnologias aplicadas à análise do conforto térmico nos bairros do Castelo Branco e Estados no município de João Pessoa – PB",
    venue: "Revista UD y la Geomática, Núm. 13",
    year: "2019",
  },
  {
    type: "TCC",
    title: "Aplicação de SIG na Gestão Territorial: Estudo de Caso no Município de João Pessoa",
    venue: "IFPB - Instituto Federal da Paraíba",
    year: "2016",
  },
];

const technicalWorks = [
  {
    role: "Autor",
    title: "Sistema de Informações Geográficas – SIG Aplicado à Modelagem de Redes de Transporte Escolar Rural",
    event: "1º GEOTEC - Encontro de Geotecnologias",
    location: "João Pessoa/PB",
    year: "2024",
  },
  {
    role: "Coautor",
    title: "O uso de geotecnologias como suporte no processo de regularização fundiária de interesse social na área urbana do município de João Pessoa – PB",
    event: "XVIII Simpósio Brasileiro de Sensoriamento Remoto",
    location: "Santos/SP",
    year: "2017",
  },
  {
    role: "Coautor",
    title: "Utilização de SIG para análise de roteirização aplicada a aplicativos lúdicos de realidade aumentada: rotas para Pokémon GO no bairro de Jaguaribe, município de João Pessoa – PB",
    event: "XVIII Simpósio Brasileiro de Sensoriamento Remoto",
    location: "Santos/SP",
    year: "2017",
  },
  {
    role: "Coautor",
    title: "Aplicação SIGWEB como ferramenta de suporte à população em áreas sujeitas a desastres, aplicado ao bairro de Mãe Luiza, Natal – RN",
    event: "XVII Simpósio Internacional SELPER",
    location: "Natal/RN",
    year: "2016",
  },
  {
    role: "Coautor",
    title: "Quantificação da Redução da Cobertura Vegetal em Função da Expansão Urbana, no Município de João Pessoa/PB",
    event: "X Jornada de Educação em Sensoriamento Remoto no Âmbito do Mercosul",
    location: "João Pessoa/PB",
    year: "2015",
  },
];

const events = [
  { name: "DroneShow Robotics, SpaceBR Show, MundoGEO Connect", location: "São Paulo/SP", year: "2025" },
  { name: "EU Esri Brasil 2025 (Encontro de Usuários Esri Brasil)", location: "Online", year: "2025" },
  { name: "Seminário Nacional de Cadastro Territorial Multifinalitário", location: "Brasília/DF", year: "2024" },
  { name: "1º GEOTEC – Encontro de Geotecnologias", location: "João Pessoa/PB", year: "2024" },
  { name: "Esri User Conference", location: "San Diego/EUA (Online)", year: "2024" },
  { name: "MundoGEO Connect 2024", location: "São Paulo/SP", year: "2024" },
  { name: "Water Summit 2023 – Location Intelligence para a Universalização do Saneamento", location: "João Pessoa/PB", year: "2023" },
  { name: "DroneShow 2023", location: "São Paulo/SP", year: "2023" },
  { name: "I GEOSAB – Geotecnologias no Estudo da Cobertura Vegetal e Recursos Hídricos", location: "Campina Grande/PB", year: "2022" },
  { name: "Workshop de Drones e VANTs aplicados ao Mapeamento", location: "João Pessoa/PB", year: "2022" },
  { name: "Feira DroneShow e MundoGEO Connect", location: "São Paulo/SP", year: "2019" },
  { name: "XIX Simpósio Brasileiro de Sensoriamento Remoto", location: "Santos/SP", year: "2019" },
  { name: "XVIII Simpósio Brasileiro de Sensoriamento Remoto", location: "Santos/SP", year: "2017" },
  { name: "XVII Simpósio Internacional SELPER", location: "Natal/RN", year: "2016" },
  { name: "XXVI Congresso Brasileiro de Cartografia", location: "Gramado/RS", year: "2015" },
  { name: "V Congresso Brasileiro de Geoprocessamento", location: "Gramado/RS", year: "2015" },
  { name: "X Jornada de Educação em Sensoriamento Remoto", location: "João Pessoa/PB", year: "2015" },
  { name: "I Seminário de Geotecnologias da Paraíba", location: "João Pessoa/PB", year: "2014" },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publicacoes" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Produções <span className="gradient-text">Acadêmicas</span>
          </h2>

          <div className="space-y-10">
            {/* Publicações */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
                <BookOpen className="text-primary" size={24} />
                Publicações em Revistas
              </h3>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="card-glass border-l-4 border-l-primary"
                  >
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mb-2 inline-block">
                      {pub.type}
                    </span>
                    <h4 className="font-semibold text-foreground mb-2">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {pub.venue} • {pub.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trabalhos Técnicos */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
                <FileText className="text-primary" size={24} />
                Trabalhos Técnicos em Eventos
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {technicalWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="card-glass"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-1 rounded ${
                        work.role === "Autor" 
                          ? "text-primary bg-primary/10" 
                          : "text-muted-foreground bg-muted"
                      }`}>
                        {work.role}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {work.year}
                      </span>
                    </div>
                    <h4 className="font-medium text-foreground text-sm mb-2 leading-snug">
                      {work.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {work.event} • {work.location}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Eventos */}
            <div>
              <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
                <Mic className="text-primary" size={24} />
                Participação em Eventos
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="card-glass py-3"
                  >
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {event.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {event.location} • {event.year}
                    </p>
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

export default PublicationsSection;
