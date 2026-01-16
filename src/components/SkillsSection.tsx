import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Virtualização e Infraestrutura",
    skills: ["Proxmox", "VMware ESXi", "XCP-ng", "Xen Project", "VirtualBox"],
  },
  {
    title: "Redes e Segurança",
    skills: [
      "pfSense",
      "Mikrotik",
      "OpenVPN",
      "iptables",
      "Check Point",
      "Kaspersky",
      "Radmin VPN",
      "Redes Corporativas",
    ],
  },
  {
    title: "Monitoramento e Observabilidade",
    skills: ["Zabbix", "Grafana", "OCS Inventory", "Monitoramento Proativo"],
  },
  {
    title: "Web, Plataforma e Back-end",
    skills: ["Nginx", "Apache", "Administração de Servidores"],
  },
  {
    title: "Bancos de Dados",
    skills: ["PostgreSQL", "Supabase", "MongoDB", "SQLite"],
  },
  {
    title: "Backup, Storage e DR",
    skills: ["Proxmox Backup Server", "QNAP System", "TrueNAS", "Disaster Recovery"],
  },
  {
    title: "Automação e Integrações",
    skills: ["n8n", "WhatsApp API", "Power Automate", "ArcGIS Enterprise", "SharePoint"],
  },
  {
    title: "CFTV e Redes IP",
    skills: ["Câmeras IP", "Cabeamento Estruturado", "Sistemas CFTV"],
  },
  {
    title: "Low-Code / No-Code",
    skills: ["Lovable", "Bolt", "Cursor", "Stitch", "Figma", "Builder.io"],
  },
  {
    title: "Idiomas",
    skills: ["Português (Nativo)", "Inglês (Intermediário)"],
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
