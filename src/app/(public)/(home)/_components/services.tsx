import { Code2, Database, Globe, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
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
  );
}
