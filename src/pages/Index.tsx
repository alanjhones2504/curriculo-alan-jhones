
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Smartphone, Server } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const technologies = [
    { name: "JavaScript", icon: Code, color: "bg-yellow-400", level: "Avançado" },
    { name: "TypeScript", icon: Code, color: "bg-blue-600", level: "Intermediário" },
    { name: "React", icon: Code, color: "bg-cyan-500", level: "Avançado" },
    { name: "Node.js", icon: Server, color: "bg-green-600", level: "Intermediário" },
    { name: "HTML/CSS", icon: Globe, color: "bg-orange-500", level: "Avançado" },
    { name: "MySQL", icon: Database, color: "bg-blue-700", level: "Intermediário" },
    { name: "React Native", icon: Smartphone, color: "bg-purple-600", level: "Básico" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Header */}
        <section className="text-center animate-fade-in">
          <div className="relative mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/lovable-uploads/e5b62c96-6188-40e6-a68d-4feace627455.png"
                alt="Alan Jhones"
                className="w-full h-full object-cover object-center transform scale-125"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Alan Jhones
          </h1>
          <p className="text-2xl text-gray-600 mb-6">Desenvolvedor Full Stack</p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor apaixonado por tecnologia, especializado em criar soluções web modernas e eficientes. 
            Sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
          </p>
        </section>

        {/* Contact */}
        <section className="animate-fade-in">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="mailto:ajpb2504@gmail.com"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-red-500 text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">ajpb2504@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:85997509578"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <p className="text-sm text-gray-600">85 99750-9578</p>
                  </div>
                </a>

                <a
                  href="https://github.com/alanjhones2504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-gray-800 text-white">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">alanjhones2504</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/alan-barros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">alan barros</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Fortaleza - CE</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technologies */}
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
                    key={index}
                    className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${tech.color} text-white transform transition-transform group-hover:scale-110`}>
                        <tech.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                        <Badge 
                          variant="outline" 
                          className={
                            tech.level === "Avançado" 
                              ? "bg-green-50 text-green-700 border-green-200" 
                              : tech.level === "Intermediário"
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                          }
                        >
                          {tech.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
