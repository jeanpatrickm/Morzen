import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
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
  )
}
