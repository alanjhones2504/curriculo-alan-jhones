import { useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, Smartphone, Server, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    { name: "React", icon: Code, color: "bg-blue-500", level: "Avançado" },
    { name: "TypeScript", icon: Code, color: "bg-blue-600", level: "Intermediário" },
    { name: "JavaScript", icon: Code, color: "bg-yellow-500", level: "Avançado" },
    { name: "Node.js", icon: Server, color: "bg-green-600", level: "Intermediário" },
    { name: "HTML/CSS", icon: Globe, color: "bg-orange-500", level: "Avançado" },
    { name: "MySQL", icon: Database, color: "bg-blue-700", level: "Intermediário" },
    { name: "React Native", icon: Smartphone, color: "bg-purple-600", level: "Básico" },
  ];

  const experiences = [
    {
      company: "Nome da Empresa",
      position: "Cargo/Função",
      period: "Mês/Ano - Mês/Ano",
      description: "Descrição das principais atividades e responsabilidades desenvolvidas no cargo.",
      technologies: ["React", "Node.js", "JavaScript"]
    },
    {
      company: "Outra Empresa",
      position: "Cargo Anterior",
      period: "Mês/Ano - Mês/Ano",
      description: "Principais conquistas e projetos realizados nesta posição.",
      technologies: ["TypeScript", "MySQL"]
    }
  ];

  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
      technologies: ["React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios.",
      technologies: ["React", "TypeScript", "Recharts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "App Mobile Fitness",
      description: "Aplicativo de fitness com tracking de exercícios e planos personalizados.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    },
    {
      title: "Sistema de Blog",
      description: "CMS completo para blog com editor rich text e sistema de comentários.",
      technologies: ["React", "Node.js", "MySQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/lovable-uploads/e5b62c96-6188-40e6-a68d-4feace627455.png"
                alt="Alan Jhones"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Alan Jhones
              </h1>
              <p className="text-xl text-gray-600 mb-4">Desenvolvedor Full Stack</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>ajpb2504@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(85) 99750-9578</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Fortaleza, CE</span>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                  <a href="https://github.com/alanjhones2504" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                  <a href="https://linkedin.com/in/alan-barros" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-16">
        {/* Sobre Mim */}
        <section className="animate-fade-in">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sobre Mim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Com experiência em desenvolvimento web moderno, 
                sempre busco criar soluções eficientes e user-friendly. Constantemente aprendendo novas tecnologias e 
                metodologias para entregar os melhores resultados aos meus projetos.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Tecnologias */}
        <section className="animate-fade-in">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tecnologias
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Principais tecnologias que domino e utilizo em meus projetos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group relative p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${tech.color} text-white transform transition-transform group-hover:scale-110`}>
                        <tech.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{tech.name}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {tech.level}
                        </Badge>
                      </div>
                    </div>
                    {hoveredTech === tech.name && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl animate-fade-in" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experiência Profissional */}
        <section className="animate-fade-in">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experiência Profissional
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Empresas e funções onde desenvolvi minha carreira
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-blue-500 text-white flex-shrink-0 transform transition-transform group-hover:scale-110">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 w-fit">
                            {experience.period}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">{experience.position}</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-700">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Portfolio */}
        <section className="animate-fade-in">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meus Projetos
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Alguns dos sites e aplicações que desenvolvi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={project.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Código
                        </Button>
                        <Button size="sm" className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contato */}
        <section className="animate-fade-in">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Vamos Trabalhar Juntos?
              </CardTitle>
              <CardDescription className="text-center text-blue-100 text-lg">
                Entre em contato para discutir seu próximo projeto
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="secondary" size="lg" className="flex items-center gap-2" asChild>
                  <a href="mailto:ajpb2504@gmail.com">
                    <Mail className="w-5 h-5" />
                    Enviar Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <a href="tel:+5585997509578">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Alan Jhones. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
