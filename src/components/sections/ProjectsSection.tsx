import { motion } from 'motion/react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ScrollArea } from '../ui/scroll-area';

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTUwMzAzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados em tempo real",
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE1NzE1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "Recharts", "Tailwind"],
    },
    {
      title: "Mobile App Design",
      description: "Aplicativo mobile moderno com design responsivo",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxNTMwMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Expo", "Firebase"],
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-white mb-2">Meus Projetos</h2>
        <p className="text-white/70">
          Trabalhos recentes que demonstram minhas habilidades
        </p>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="md:w-48 flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-white">{project.title}</h3>
                    <p className="text-white/70 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="outline" 
                        className="backdrop-blur-sm bg-white/5 border-white/30 text-white/90 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Ver Projeto
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="backdrop-blur-sm bg-white/5 border-white/30 hover:bg-white/10 text-white"
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
