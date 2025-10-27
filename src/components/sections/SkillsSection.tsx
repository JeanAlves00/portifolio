import { motion } from 'motion/react';
import { Badge } from '../ui/badge';

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Vue.js", "Redux"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "REST API", "GraphQL"]
    },
    {
      category: "Ferramentas",
      skills: ["Git", "Docker", "Webpack", "Vite", "Figma", "VS Code", "Postman", "AWS"]
    },
    {
      category: "Soft Skills",
      skills: ["Trabalho em Equipe", "Comunicação", "Resolução de Problemas", "Criatividade"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-white mb-2">Minhas Habilidades</h2>
        <p className="text-white/70">
          Tecnologias e ferramentas que domino
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5"
          >
            <h3 className="text-white mb-3">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="backdrop-blur-sm bg-white/5 border-white/30 text-white/90 hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
