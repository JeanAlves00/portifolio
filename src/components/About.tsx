import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código mantível e escalável seguindo as melhores práticas"
    },
    {
      icon: Palette,
      title: "Design Criativo",
      description: "Transformo ideias em interfaces bonitas e funcionais"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização e velocidade são prioridades em todos os projetos"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe e comunico ideias claramente"
    }
  ];

  return (
    <section className="py-20 px-4" id="sobre">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Sobre Mim</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
