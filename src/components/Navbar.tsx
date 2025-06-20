
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, FolderOpen, Mail, Github, Linkedin, Phone } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { EllipsisVertical } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/experiencias", label: "Experiências", icon: Briefcase },
    { path: "/projetos", label: "Projetos", icon: FolderOpen },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
          
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <EllipsisVertical className="w-5 h-5" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <a href="mailto:ajpb2504@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="tel:85997509578" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Telefone
                  </a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="https://github.com/alanjhones2504" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="https://linkedin.com/in/alan-barros" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
