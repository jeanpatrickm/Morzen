import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Pronto para transformar sua ideia em realidade?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a crescer com tecnologia de ponta
          </p>
          <div className="flex items-center justify-center">
            <Link href={"/new_project"}>
              <Button size="lg">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
