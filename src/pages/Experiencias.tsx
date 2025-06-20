
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const Experiencias = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Experiência Profissional
          </h1>
          <p className="text-xl text-gray-600">
            Empresas e funções onde desenvolvi minha carreira
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="group relative rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg p-6">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiencias;
