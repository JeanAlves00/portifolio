import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

export function Skills() {
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
      skills: ["Trabalho em Equipe", "Comunicação", "Resolução de Problemas", "Criatividade", "Adaptabilidade", "Liderança"]
    }
  ];

  return (
    <section className="py-20 px-4" id="habilidades">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Habilidades</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar projetos incríveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
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
    </section>
  );
}
