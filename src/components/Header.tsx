
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Menu, MessageCircle, Settings, User } from "lucide-react";
import { Badge } from "./ui/badge";

const Header = () => {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="py-6">
                <h2 className="text-lg font-semibold mb-6">Menu</h2>
                <nav className="space-y-4">
                  <Link to="/" className="block py-2 text-blue-600 hover:underline">
                    Home
                  </Link>
                  <Link to="/dashboard" className="block py-2 text-blue-600 hover:underline">
                    Dashboard
                  </Link>
                  <Link to="/services" className="block py-2 text-blue-600 hover:underline">
                    Services
                  </Link>
                  <Link to="/profile" className="block py-2 text-blue-600 hover:underline">
                    Profile
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="text-xl font-bold text-blue-600 ml-2">
            ElderlyCare
          </Link>

          <nav className="hidden md:flex items-center space-x-4 ml-10">
            <Link to="/" className="px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/dashboard" className="px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link to="/services" className="px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">
              Services
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                {notifications}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Settings className="h-5 w-5" />
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
