import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export function ExperienceSection() {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Desenvolvedor Full Stack Senior",
      period: "2022 - Presente",
      description: "Liderando equipe de desenvolvimento na criação de aplicações web escaláveis.",
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
      description: "Desenvolvimento de interfaces modernas e responsivas usando React e TypeScript.",
      achievements: [
        "Desenvolveu 15+ projetos web",
        "Melhorou acessibilidade em 60%",
        "Criou biblioteca de componentes"
      ]
    },
    {
      company: "StartUp XYZ",
      position: "Desenvolvedor Web Júnior",
      period: "2019 - 2020",
      description: "Início da carreira desenvolvendo landing pages e aplicações simples.",
      achievements: [
        "Contribuiu em 10+ projetos",
        "Implementou designs pixel-perfect",
        "Participou de hackathons internos"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-white mb-2">Experiência Profissional</h2>
        <p className="text-white/70">
          Minha trajetória no desenvolvimento de software
        </p>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center border border-white/20">
                    <Briefcase className="w-5 h-5 text-purple-300" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-white">{exp.position}</h3>
                      <p className="text-purple-300 text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-xs backdrop-blur-sm bg-white/5 px-2 py-1 rounded-full border border-white/10">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-sm">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-white/60 text-xs flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
