import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Desenvolvedor Full Stack Senior",
      period: "2022 - Presente",
      description: "Liderando equipe de desenvolvimento na criação de aplicações web escaláveis. Implementação de arquitetura microserviços e CI/CD.",
      achievements: [
        "Reduziu tempo de carregamento em 40%",
        "Implementou sistema de testes automatizados",
        "Mentoria de 5 desenvolvedores júnior"
      ]
    },
    {
      company: "Digital Innovations",
      position: "Desenvolvedor Frontend",
      period: "2020 - 2022",
      description: "Desenvolvimento de interfaces modernas e responsivas usando React e TypeScript. Colaboração com designers para melhor UX.",
      achievements: [
        "Desenvolveu 15+ projetos web",
        "Melhorou acessibilidade em 60%",
        "Criou biblioteca de componentes reutilizáveis"
      ]
    },
    {
      company: "StartUp XYZ",
      position: "Desenvolvedor Web Júnior",
      period: "2019 - 2020",
      description: "Início da carreira desenvolvendo landing pages e aplicações simples. Aprendizado de boas práticas e metodologias ágeis.",
      achievements: [
        "Contribuiu em 10+ projetos",
        "Implementou designs pixel-perfect",
        "Participou de hackathons internos"
      ]
    }
  ];

  return (
    <section className="py-20 px-4" id="experiencia">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Experiência</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Minha trajetória profissional no desenvolvimento de software
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-blue-500/50" />
              )}
              
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/20">
                      <Briefcase className="w-6 h-6 text-purple-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-white">{exp.position}</h3>
                        <p className="text-purple-300">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm backdrop-blur-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-3">
                      {exp.description}
                    </p>
                    
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-white/60 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
