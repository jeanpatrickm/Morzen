import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
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
  )
}
