export interface Project {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Uma Landing Page",
    imageSrc: "/landing_page_example.png",
    imageAlt: "Exemplo de Landing Page",
    description: [
      "Otimizada para alta conversão",
      "Design moderno e responsivo",
      "Integração com formulários e ferramentas de marketing",
    ],
  },
  {
    id: "1",
    title: "Uma Dashboard",
    imageSrc: "/dashboard_example.jpeg",
    imageAlt: "Exemplo de Dashboard",
    description: [
      "Visualização e gestão de dados intuitiva",
      "Métricas e relatórios em tempo real",
      "Otimização de fluxos de trabalho e produtividade",
    ],
  },
  {
    id: "2",
    title: "Outros Projetos",
    imageSrc: "/other_projects_example.png",
    imageAlt: "Exemplo de Outros Projetos",
    description: [
      "Soluções personalizadas para sua necessidade",
      "Adaptação a diversas plataformas e tecnologias",
    ],
  },
];
