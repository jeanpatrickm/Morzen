import { type FormEvent, useState } from "react";
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
}

export function FormDescriptionStep({
  selectedProject,
  handleBack,
  handleSubmit,
}: FormDescriptionProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit({ email, name, description });
    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-lg mx-auto p-4 border rounded-lg shadow-md mt-35 mb-35">
      <h2 className="text-2xl font-semibold text-center">
        Detalhes do Projeto e Contato
      </h2>
      {selectedProject && (
        <p className="text-lg text-muted-foreground">
          Você selecionou:{" "}
          <span className="font-bold text-purple-400">
            {selectedProject.title}
          </span>
        </p>
      )}

      <form className="w-full space-y-4" onSubmit={handleFormSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            placeholder="Seu nome..."
            value={name}
            minLength={1}
            maxLength={128}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Seu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={512}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="desc">Descrição</Label>
          <Textarea
            id="desc"
            rows={4}
            cols={4}
            placeholder="Descreva a sua ideia..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            minLength={4}
            maxLength={1024}
            required
          />

          <p className="text-sm text-muted-foreground">
            Nos conte um pouco mais sobre a sua ideia! Queremos entender o que
            você tem em mente.
          </p>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <Button variant="outline" onClick={handleBack} type="button">
              Voltar
            </Button>
          </div>
          <div>
            <Button type="submit">Enviar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
