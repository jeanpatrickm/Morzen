"use client";
import { MenuIcon, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const LINKS = [
  {
    href: "/#services",
    title: "Serviços",
  },
  {
    title: "Sobre",
    href: "/#about",
  },
  {
    title: "Contato",
    href: "/#footer",
  },
];

export function Navbar() {
  return (
    <div className="fixed w-full top-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 dark:border-white/10 backdrop-blur-sm bg-white/80 dark:bg-slate-950/80">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/morzen_logo_with_name.png"
            height={110}
            width={110}
            alt="Morzen"
          />
        </Link>
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {LINKS.map((l, i) => (
        <Link key={i} href={l.href} className="w-full">
          <Button variant={"ghost"}>{l.title}</Button>
        </Link>
      ))}
      <Link href="/new_project">
        <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600">
          Começar Projeto
        </Button>
      </Link>
      <ThemeChanger />
    </nav>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="md:hidden space-x-4">
      <ThemeChanger />
      <Sheet open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent aria-description="Mobile navigation">
          <SheetHeader>
            <SheetTitle>Navegação</SheetTitle>
          </SheetHeader>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4 items-center">
            {LINKS.map((l, i) => (
              <Button
                key={i}
                variant={"outline"}
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    router.push(l.href, { scroll: true });
                  }, 200);
                }}
              >
                {l.title}
              </Button>
            ))}
            <Link
              href="/new_project"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Começar Projeto</Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
