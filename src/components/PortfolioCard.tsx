import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';

export function PortfolioCard() {
  const [activeTab, setActiveTab] = useState('sobre');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
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

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Content Area */}
          <div className="p-6 md:p-8 min-h-[500px]">
            <TabsContent value="sobre" className="m-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <AboutSection />
              </motion.div>
            </TabsContent>

            <TabsContent value="habilidades" className="m-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <SkillsSection />
              </motion.div>
            </TabsContent>

            <TabsContent value="projetos" className="m-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectsSection />
              </motion.div>
            </TabsContent>

            <TabsContent value="experiencia" className="m-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ExperienceSection />
              </motion.div>
            </TabsContent>

            <TabsContent value="contato" className="m-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ContactSection />
              </motion.div>
            </TabsContent>
          </div>

          {/* Tabs Navigation at Bottom */}
          <TabsList className="w-full grid grid-cols-5 h-auto p-2 rounded-none backdrop-blur-sm bg-white/5 border-t border-white/20">
            <TabsTrigger 
              value="sobre"
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-all py-3"
            >
              Sobre
            </TabsTrigger>
            <TabsTrigger 
              value="habilidades"
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-all py-3"
            >
              Habilidades
            </TabsTrigger>
            <TabsTrigger 
              value="projetos"
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-all py-3"
            >
              Projetos
            </TabsTrigger>
            <TabsTrigger 
              value="experiencia"
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-all py-3"
            >
              Experiência
            </TabsTrigger>
            <TabsTrigger 
              value="contato"
              className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/60 hover:text-white/80 transition-all py-3"
            >
              Contato
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>
    </div>
  );
}
