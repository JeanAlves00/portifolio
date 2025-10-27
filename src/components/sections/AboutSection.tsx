import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '../ui/button';

export function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Escrevo código mantível e escalável"
    },
    {
      icon: Palette,
      title: "Design Criativo",
      description: "Interfaces bonitas e funcionais"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização em todos os projetos"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho bem em equipe"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1"
        >
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </motion.div>

        <div>
          <h1 className="text-white mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">Desenvolvedor Full Stack</span>
          </h1>
          <p className="text-white/80">
            Criando experiências digitais incríveis através de código limpo e design inovador.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 justify-center">
          <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 text-white">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 text-white">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 text-white">
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
          <Download className="mr-2 h-4 w-4" />
          Baixar CV
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all"
          >
            <div className="w-10 h-10 mx-auto rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-3">
              <feature.icon className="w-5 h-5 text-purple-300" />
            </div>
            <h3 className="text-white mb-1">{feature.title}</h3>
            <p className="text-white/60 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
