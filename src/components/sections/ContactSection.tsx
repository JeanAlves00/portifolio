import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@exemplo.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 99999-9999"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, Brasil"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-white mb-2">Entre em Contato</h2>
        <p className="text-white/70">
          Tem algum projeto em mente? Vamos conversar!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all"
          >
            <div className="w-8 h-8 mx-auto rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-2">
              <info.icon className="w-4 h-4 text-purple-300" />
            </div>
            <h4 className="text-white text-sm mb-1">{info.label}</h4>
            <p className="text-white/70 text-xs">{info.value}</p>
          </motion.div>
        ))}
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        onSubmit={handleSubmit} 
        className="space-y-4"
      >
        <div>
          <Input
            type="text"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="backdrop-blur-sm bg-white/5 border-white/30 text-white placeholder:text-white/50 focus:bg-white/10"
            required
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="backdrop-blur-sm bg-white/5 border-white/30 text-white placeholder:text-white/50 focus:bg-white/10"
            required
          />
        </div>
        
        <div>
          <Textarea
            placeholder="Sua Mensagem"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="backdrop-blur-sm bg-white/5 border-white/30 text-white placeholder:text-white/50 focus:bg-white/10 resize-none"
            rows={4}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
        >
          <Send className="mr-2 h-4 w-4" />
          Enviar Mensagem
        </Button>
      </motion.form>
    </div>
  );
}
