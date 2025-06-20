
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, FolderOpen } from "lucide-react";
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
        <div className="flex justify-end items-center py-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                <EllipsisVertical className="w-5 h-5" />
              </MenubarTrigger>
              <MenubarContent>
                {navItems.map((item) => (
                  <MenubarItem key={item.path} asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
