"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function MorzenLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 dark:border-white/10 backdrop-blur-sm bg-white/80 dark:bg-slate-950/80">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Morzen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contato
            </Link>
            <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600">
              Começar Projeto
            </Button>
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
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-gray-600 dark:text-gray-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button
              className="text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 md:hidden">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="#services"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contato
              </Link>
              <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 w-full">
                Começar Projeto
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30">
            Desenvolvimento de Software
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transformamos suas
            <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              ideias{" "}
            </span>
            em soluções digitais
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Na Morzen, desenvolvemos software personalizado que impulsiona o
            crescimento do seu negócio. Da concepção ao lançamento, criamos
            soluções tecnológicas inovadoras e escaláveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-lg px-8 py-3"
            >
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
            >
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative z-10 py-20 px-4 bg-gray-50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Oferecemos soluções completas de desenvolvimento de software para
              empresas de todos os tamanhos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Desenvolvimento Web
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sites e aplicações web modernas, responsivas e otimizadas para
                  performance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Apps Mobile
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Aplicativos nativos e híbridos para iOS e Android com
                  experiência excepcional
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Sistemas Corporativos
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Soluções empresariais robustas para otimizar processos e
                  aumentar produtividade
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-sm hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Consultoria Tech
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Orientação estratégica em tecnologia para acelerar a
                  transformação digital
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30">
                Sobre a Morzen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Inovação e excelência em cada linha de código
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                Somos uma startup focada em desenvolvimento de software de alta
                qualidade. Nossa missão é transformar ideias em soluções
                digitais que geram valor real para nossos clientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Equipe especializada e experiente
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Metodologias ágeis e modernas
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Suporte contínuo e manutenção
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Foco em performance e escalabilidade
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-violet-500/10 dark:from-purple-500/20 dark:to-violet-500/20 rounded-3xl backdrop-blur-sm border border-gray-200 dark:border-white/10 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Equipe Morzen desenvolvendo software"
                  width={400}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                25+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                99%
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Taxa de Sucesso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua
              empresa a crescer com tecnologia de ponta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-lg px-8 py-3"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 text-lg px-8 py-3 bg-transparent"
              >
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-white/10 py-12 px-4 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Morzen
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transformando ideias em soluções digitais inovadoras
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                Serviços
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Apps Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Sistemas Corporativos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Consultoria Tech
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                Empresa
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
                Contato
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>contato@morzen.com</li>
                <li>+55 (11) 99999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
            <p>
              &copy; {new Date().getFullYear()} Morzen. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
