# 🌟 Oral Couture - Landing Page Premium (Modo Homologação)

Este é um projeto de alta conversão estruturado para o segmento odontológico de alto padrão (Público A/B), desenvolvido com foco em performance pura, acessibilidade WCAG e design minimalista/editorial.

## 🔒 Sistema de Proteção Comercial (Trava de Lead)
O código fonte contém uma **trava de demonstração comercial ativa**. Todos os botões de ação e conversão disparam um modal elegante bloqueando o fluxo real. 
- **Objetivo:** Permitir que você publique no Vercel do cliente para aprovação visual sem risco de inadimplência.
- **Como desativar pós-pagamento:** No arquivo `index.html`, remova a classe `trigger-lock` dos botões e substitua as tags `<button>` por links reais de WhatsApp ou Doctoralia. Remova a div `#lockModal` do rodapé.

## 🚀 Como Fazer o Deploy no Vercel / GitHub Pages

1. **Crie um repositório privado ou público no GitHub** do seu cliente.
2. Faça o upload destes 4 arquivos diretamente na raiz do repositório (`index.html`, `styles.css`, `animations.css`, `script.js`).
3. Acesse a sua conta na **Vercel** (vercel.com).
4. Clique em **"Add New" -> "Project"** e selecione o repositório criado.
5. Deixe as configurações padrões (Directory: Root) e clique em **Deploy**.
6. A Vercel gerará um link seguro HTTPS em menos de 30 segundos.

## 🔧 O que e onde customizar pós-venda
- **Telefone/WhatsApp:** Altere no arquivo `index.html` injetando o link `https://wa.me/seu-numero` assim que o cliente efetuar o pagamento.
- **CRO-RJ e Dados Clínicos:** Altere no `<footer>` do `index.html` as informações reais do cirurgião-dentista responsável.
- **Logos dos Planos:** Caso ele não use Invisalign ou Doctoralia, altere os textos dentro da seção `.trust-logos` no HTML.

## 📈 Checklist de SEO Básico Implementado
- [x] Tag meta description única configurada.
- [x] Hierarquia semântica correta (`<h1>` único na página, `<main>`, `<header>`, `<footer>`).
- [x] Imagens estruturadas via vetores inline para evitar perdas de CLS (Cumulative Layout Shift).
- [x] Fontes carregadas estrategicamente via Google Fonts com `display=swap`.
