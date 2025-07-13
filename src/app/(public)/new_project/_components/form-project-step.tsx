import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Project, projects } from "../projects";

interface ProjectSelectionStepProps {
  onProjectSelect: (project: Project) => void;
  selectedProject?: Project;
  handleNext: VoidFunction;
}

export function FormProjectStep({
  onProjectSelect,
  selectedProject = projects[0],
  handleNext,
}: ProjectSelectionStepProps) {
  return (
    <div className="max-w-5xl mx-auto min-h-screen flex flex-col gap-4 items-center py-16">
      <h1 className="text-2xl font-medium">O que podemos fazer por você?</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project, index) => (
          <Card
            // biome-ignore lint/suspicious/noArrayIndexKey: <idk>
            key={index}
            className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out "
          >
            <CardHeader className="flex-grow flex flex-col justify-between">
              <CardTitle className="text-xl font-semibold mb-4 text-center">
                {project.title}
              </CardTitle>
              <div className="relative w-full aspect-video mb-4 rounded-md overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                {project.description.map((item, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <idk>
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-primary">✔</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4 flex justify-center">
              <Button
                variant={
                  selectedProject.id === project.id ? "default" : "outline"
                }
                className="w-full"
                onClick={() => onProjectSelect(project)}
              >
                {selectedProject.id === project.id
                  ? "Selecionado"
                  : "Selecionar"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      <div className="flex justify-end w-full">
        <Button variant="default" size="lg" onClick={handleNext}>
          Seguir
        </Button>
      </div>
    </div>
  );
}
