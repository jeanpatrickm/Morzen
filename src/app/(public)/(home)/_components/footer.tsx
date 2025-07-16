import { Code2, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 border-t border-gray-200 dark:border-white/10 py-12 px-4 bg-gray-50 dark:bg-slate-900/50"
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="grid md:grid-cols-2 gap-8 justify-items-center w-full max-w-md">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
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
          <div className="text-center md:text-left">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>contato.morzen@gmail.com</li>
              <li>São Paulo, SP</li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/morzen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/morzen.zenmor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300 w-full">
          <p>
            &copy; {new Date().getFullYear()} Morzen. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
