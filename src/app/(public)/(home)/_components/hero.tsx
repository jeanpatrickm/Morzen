import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 pt-20 pb-32 px-4 h-screen flex justify-center items-center">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border-purple-500/20 dark:border-purple-500/30">
          Desenvolvimento de Software
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Transformamos suas{" "}
          <span className="bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
            ideias
          </span>{" "}
          em soluções digitais
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Na Morzen, desenvolvemos software personalizado que impulsiona o
          crescimento do seu negócio. Da concepção ao lançamento, criamos
          soluções tecnológicas inovadoras e escaláveis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/new_project">
            <Button size="lg">
              Iniciar Projeto
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          {/* <Button size="lg" variant="outline"> */}
          {/*   Ver Portfolio */}
          {/* </Button> */}
        </div>
      </div>
    </section>
  );
}
