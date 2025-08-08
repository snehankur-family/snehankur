import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/snehankur" },
    { name: "About", href: "/snehankur/about" },
    { name: "Gallery", href: "/snehankur/gallery" },
    { name: "Donate", href: "/snehankur/donate" },
    { name: "Contact", href: "/snehankur/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/snehankur">
              <img
                src="https://github.com/snehankur-family/website-photos/blob/main/snehakurLogo_50.jpg?raw=true"
                alt="Snehankur Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={location === item.href ? "default" : "ghost"}
                  className={`text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    location === item.href
                      ? "bg-primary"
                      : "hover:bg-orange-100 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="flex items-center md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-orange-50"
                >
                  <Menu className="h-6 w-6 text-orange-600" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white shadow-lg border-l border-orange-100"
              >
                <div className="flex flex-col items-center mt-4 mb-6">
                  <img
                    src="https://github.com/snehankur-family/website-photos/blob/main/snehakurLogo_50.jpg?raw=true"
                    alt="Snehankur Logo"
                    className="h-12 w-auto mb-4"
                  />
                </div>
                <div className="flow-root">
                  <div className="space-y-2 py-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpen(false)}
                      >
                        <Button
                          variant={location === item.href ? "default" : "ghost"}
                          className={`w-full justify-start text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                            location === item.href
                              ? "bg-orange-100 text-orange-600"
                              : "hover:bg-orange-50 hover:text-orange-500"
                          }`}
                        >
                          {item.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
