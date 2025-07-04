import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
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
                src="/images/sdjfhsjf.png?height=400&width=400"
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
  )
}
