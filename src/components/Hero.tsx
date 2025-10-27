import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 max-w-4xl w-full shadow-2xl"
      >
        <div className="text-center space-y-6">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-white mb-2">
              Olá, eu sou <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">Desenvolvedor Full Stack</span>
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Criando experiências digitais incríveis através de código limpo e design inovador. 
              Especializado em React, TypeScript e desenvolvimento web moderno.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 text-white">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="backdrop-blur-sm bg-white/5 border-white/20 hover:bg-white/10 text-white">
              <Mail className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
              <Download className="mr-2 h-4 w-4" />
              Baixar CV
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
