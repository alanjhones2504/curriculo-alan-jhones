import { useState } from "react";
import { ExternalLink, Code, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projetos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "Sistema de Gestão",
      description: "Sistema completo para gerenciamento de recursos empresariais com dashboard interativo e relatórios em tempo real.",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      image: "/placeholder.svg",
      demoUrl: "#",
      codeUrl: "#",
      status: "Concluído"
    },
    {
      title: "E-commerce Mobile",
      description: "Aplicativo de comércio eletrônico com carrinho de compras, pagamentos online e sistema de avaliações.",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Stripe"],
      image: "/placeholder.svg",
      demoUrl: "#",
      codeUrl: "#",
      status: "Em Desenvolvimento"
    },
    {
      title: "API REST",
      description: "API robusta para gerenciamento de dados com autenticação JWT, rate limiting e documentação completa.",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/placeholder.svg",
      demoUrl: "#",
      codeUrl: "#",
      status: "Concluído"
    }
  ];

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "backend", label: "Backend" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Meus Projetos
          </h1>
          <p className="text-xl text-gray-600">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 bg-white/50 backdrop-blur-sm p-2 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-blue-500 hover:bg-blue-600" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Concluído" ? "default" : "secondary"}
                    className={project.status === "Concluído" ? "bg-green-500" : "bg-orange-500"}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button asChild className="flex-1" variant="outline">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button asChild className="flex-1">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projetos;
