import { type FormEvent, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Project } from "../projects";

interface FormDescriptionProps {
  selectedProject?: Project;
  handleBack: VoidFunction;
  handleSubmit: (data: {
    email: string;
    name: string;
    description: string;
  }) => void;
  isLoading?: boolean;
}

export function FormDescriptionStep({
  selectedProject,
  handleBack,
  handleSubmit,
  isLoading = false,
}: FormDescriptionProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [honeyPot, setHoneyPot] = useState<string | undefined>(undefined);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (honeyPot) return;
    handleSubmit({ email, name, description });
    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <div className="morzen-project-form mx-auto flex w-full max-w-2xl flex-col items-center gap-7 p-6 sm:p-10">
      <div className="w-full">
        <p className="morzen-eyebrow">Etapa 02</p>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
          Vamos entender o seu desafio.
        </h2>
        <p className="mt-3 leading-7 text-black/58">
          Compartilhe o contexto, os objetivos e o que precisa melhorar. A
          gente responde para conversar sobre os próximos passos.
        </p>
      </div>

      {selectedProject && (
        <div className="morzen-project-selected w-full px-4 py-3 text-sm text-black/58">
          Você quer começar por: <span className="font-semibold text-black">
            {selectedProject.title}
          </span>
        </div>
      )}
      <form className="w-full space-y-5" onSubmit={handleFormSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-black/72" htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            className="morzen-form-control"
            placeholder="Seu nome"
            value={name}
            minLength={1}
            maxLength={128}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-black/72" htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="morzen-form-control"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={512}
            required
          />
        </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-black/72" htmlFor="desc">Qual desafio você quer resolver?</Label>
          <Textarea
            id="desc"
            rows={4}
            cols={4}
            className="morzen-form-control min-h-36 resize-y"
            placeholder="Conte o que está acontecendo e o que você gostaria de melhorar"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            minLength={4}
            maxLength={1024}
            required
          />
          <p className="text-sm leading-6 text-black/48">
            Quanto mais contexto você compartilhar, melhor conseguimos pensar
            junto com você.
          </p>
        </div>
        <div className="hidden">
          <label htmlFor="honey">Deixe este campo em branco</label>
          <input
            type="text"
            id="honey"
            name="honey"
            value={honeyPot}
            onChange={(e) => setHoneyPot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>
        <div className="flex w-full flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-between">
            <Button
              variant="ghost"
              className="morzen-project-back rounded-full px-5 text-black"
              onClick={handleBack}
              type="button"
              disabled={isLoading}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Voltar
            </Button>
            <Button
              type="submit"
              variant="ghost"
              className="morzen-project-submit rounded-full px-6 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Enviando sua mensagem..." : "Quero conversar sobre isso"}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
        </div>
      </form>
    </div>
  );
}
