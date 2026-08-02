# Morzen

Landing page da Morzen, uma startup de software que compartilha sua jornada de construção em público e desenvolve soluções digitais sob medida.

## Rodando localmente

Requisitos: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

Para validar a versão de produção:

```bash
npm run build
npm run start
```

## Direção do projeto

A landing foi redesenhada com uma composição inspirada na página do Codex: hero em tela cheia, atmosfera suave em azul e roxo, navegação transparente, conteúdo centralizado e CTAs minimalistas.

O foco da comunicação é apresentar quem somos, mostrar a construção da Morzen e convidar as pessoas a acompanhar a jornada. A contratação de software continua disponível pelo fluxo `/new_project`, mas como convite secundário.

O projeto preserva os links sociais, as fotos de Jean e Diego, os exemplos visuais de projetos e a identidade da Morzen. Não usamos clientes, depoimentos ou métricas inventadas.

## Stack

- Next.js 15 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Lucide React para ícones
- Next Themes para tema claro/escuro

## Contexto de design e agents

O redesign foi estruturado com a skill **Impeccable**, usada para organizar a direção visual, criticar decisões de interface e orientar refinamentos de layout, cor, tipografia, responsividade e acessibilidade.

- `PRODUCT.md`: público, posicionamento, objetivos e restrições do produto.
- `DESIGN.md`: linguagem visual, cores, tipografia, layout, componentes e motion.
- `.agents/`, `.codex/`, `.cursor/` e `.gemini/`: arquivos locais de suporte a agents e ferramentas de desenvolvimento. Eles não são necessários para executar a aplicação em produção.

Depois do clone, basta instalar as dependências e rodar os scripts acima. Os arquivos de contexto ajudam qualquer pessoa que continuar o trabalho a entender as decisões sem precisar reconstruir o histórico do redesign.

## Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) para manter o histórico legível e facilitar automações:

```text
tipo(escopo): descrição curta
```

Exemplos: `feat(home): add project showcase`, `fix(navbar): adjust mobile menu` e `docs(readme): update setup guide`.
