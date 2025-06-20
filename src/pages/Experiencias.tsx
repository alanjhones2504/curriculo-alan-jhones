import React, { useState } from "react";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Experiencias = () => {
  const [experiences, setExperiences] = useState([
    {
      company: "",
      position: "",
      period: "",
      description: "",
      technologies: ""
    }
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const newExperiences = [...experiences];
    (newExperiences[index] as any)[field] = value;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { company: "", position: "", period: "", description: "", technologies: "" }
    ]);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

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
                        <input
                          className="text-xl font-bold text-gray-900 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-2 sm:mb-0"
                          placeholder="Nome da Empresa"
                          value={experience.company}
                          onChange={e => handleChange(index, "company", e.target.value)}
                        />
                        <input
                          className="bg-blue-50 text-blue-700 border-blue-200 w-fit rounded px-2 py-1 border focus:outline-none focus:border-blue-500"
                          placeholder="Mês/Ano - Mês/Ano"
                          value={experience.period}
                          onChange={e => handleChange(index, "period", e.target.value)}
                        />
                      </div>
                      <input
                        className="text-lg font-semibold text-blue-600 mb-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full"
                        placeholder="Cargo/Função"
                        value={experience.position}
                        onChange={e => handleChange(index, "position", e.target.value)}
                      />
                      <textarea
                        className="text-gray-600 mb-4 leading-relaxed bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full resize-none"
                        placeholder="Descrição das principais atividades e responsabilidades desenvolvidas no cargo."
                        value={experience.description}
                        onChange={e => handleChange(index, "description", e.target.value)}
                      />
                      <input
                        className="bg-gray-100 text-gray-700 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:border-blue-500 w-full mb-2"
                        placeholder="Tecnologias (opcional, separadas por vírgula)"
                        value={experience.technologies}
                        onChange={e => handleChange(index, "technologies", e.target.value)}
                      />
                      <div className="flex flex-wrap gap-2 mb-2">
                        {experience.technologies && experience.technologies.split(',').map((tech, i) => (
                          tech.trim() && (
                            <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700">
                              {tech.trim()}
                            </Badge>
                          )
                        ))}
                      </div>
                      <button
                        type="button"
                        className="text-red-500 hover:underline text-sm mt-2"
                        onClick={() => removeExperience(index)}
                        disabled={experiences.length === 1}
                      >
                        Remover experiência
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            onClick={addExperience}
          >
            Adicionar experiência
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Experiencias;
