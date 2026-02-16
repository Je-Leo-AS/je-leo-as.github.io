# Portfólio (site estático)

Este repositório contém os arquivos-fonte e as configurações necessárias para gerar e publicar um site de portfólio pessoal. O conteúdo do site apresenta informações institucionais e materiais de apresentação profissional organizados em seções como resumo, experiência, projetos e contato.

## Sumário

- Descrição
- Funcionalidades
- Tecnologias
- Estrutura do projeto
- Como executar
- Build e deploy
- Contribuição

## Funcionalidades principais

- Suporte a múltiplos idiomas (i18n).
- Navegação por seções: Sobre, Experiência, Projetos, Habilidades e Contato.
- Layout responsivo para diferentes tamanhos de tela.
- Opção de download de currículo e links para perfis profissionais.

## Tecnologias

- Vue.js (aplicação SPA)
- Vue Router (navegação)
- Sistema de internacionalização (i18n)
- CSS moderno para layout responsivo
- Ferramentas de build do ecossistema Node.js (npm, Vue CLI)

## Estrutura do projeto (resumo)

- `public/` — Arquivos estáticos e template HTML.
- `src/` — Código-fonte da aplicação (componentes, vistas, assets, roteamento e internacionalização).
- `package.json` — Scripts e dependências do projeto.
- `dist/` — Saída gerada pelo processo de build (versão pronta para deploy).

## Como executar (desenvolvimento)

Pré-requisitos: Node.js e npm instalados.

Instalar dependências:

```bash
npm install
```

Iniciar ambiente de desenvolvimento (hot-reload):

```bash
npm run serve
```

O comando anterior inicia um servidor local para desenvolvimento e atualiza o conteúdo automaticamente durante edição.

## Build para produção

Gerar artefato de produção:

```bash
npm run build
```

O resultado fica na pasta `dist/`, contendo os arquivos estáticos prontos para publicação.

## Publicação

Uma estratégia comum de publicação é enviar o conteúdo de `dist/` para um serviço de hospedagem estática (por exemplo, GitHub Pages, Netlify, Vercel):

Exemplo com `gh-pages`:

```bash
npm run deploy
# ou
gh-pages -d dist
```

O fluxo básico de atualização é:

```bash
git add .
git commit -m "Atualização"
git push origin main
npm run build
npm run deploy
```

## Contribuição

Contribuições são bem-vindas por meio de pull requests. Para propor alterações, recomenda-se:

- Criar uma branch específica para a mudança.
- Manter commits pequenos e descritivos.
- Incluir instruções de teste quando aplicável.

## Licença

Consultar o arquivo `LICENSE` no repositório para detalhes sobre licença. Caso não exista, considerar contato com o mantenedor para esclarecimentos.

## Contato

Informações de contato e links profissionais estão disponíveis no próprio site de portfólio publicado.
