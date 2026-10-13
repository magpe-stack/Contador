# Contador 📊

O **Contador** é um Progressive Web App (PWA) minimalista em preto e branco desenvolvido para contar palavras, caracteres, linhas e frases de qualquer texto em tempo real. O aplicativo funciona **100% offline**.

---

## 🚀 Funcionalidades

- **Contagem em Tempo Real:** Atualiza instantaneamente o número de palavras, caracteres, linhas e frases conforme você digita ou cola o texto.
- **🖐️ Copiar:** Botão com ícone de mãozinha aberta para copiar todo o texto inserido para a área de transferência.
- **✊ Limpar:** Botão com ícone de mãozinha fechada para apagar o conteúdo da área de texto rapidamente.
- **🌓 Modo Claro / Escuro:** Alternância de tema integrada no topo à direita.
- **📱 PWA & Offline:** Funciona sem conexão com a internet e pode ser instalado no celular ou desktop.

---

## 🌐 Como Usar no Site (Sem Instalar)

1. Acesse o endereço do aplicativo no seu navegador web.
2. Digite ou cole o texto desejado na área de texto principal.
3. Acompanhe as estatísticas de contagem atualizadas instantaneamente no topo.
4. Utilize o botão **Copiar** (`🖐️`) para levar o texto para a área de transferência ou o botão **Limpar** (`✊`) para apagar.
5. Alterne entre os modos claro e escuro a qualquer momento clicando no ícone `🌓` no topo à direita.

---

## 📱 Como Instalar como Aplicativo (PWA)

O **Contador** pode ser instalado em seu dispositivo móvel ou computador para acesso rápido na tela inicial:

### 🤖 No Android (Google Chrome / Edge)
1. Acesse o app pelo navegador Chrome ou Edge.
2. Toque no **menu de três pontos** (`⋮`) no canto superior direito.
3. Selecione a opção **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**.
4. Confirme. O ícone aparecerá na sua gaveta de aplicativos.

### 🍎 No iPhone e iPad (Safari)
1. Abra o site no navegador **Safari**.
2. Toque no botão **Compartilhar** (ícone do quadrado com a seta para cima na barra inferior).
3. Role para baixo e selecione **"Adicionar à Tela de Início"**.
4. Confirme tocando em **Adicionar**.

### 💻 No Computador (Chrome, Edge, Brave)
1. Acesse o site no navegador.
2. Clique no ícone de instalação (uma tela com uma seta para baixo) na barra de endereços ou abra o menu `⋮` > **Instalar Contador...**.
3. Confirme. O app abrirá em uma janela própria dedicada.

---

## 💻 Como Instalar e Rodar Localmente

1. Baixe todos os arquivos do projeto para uma pasta local (`index.html`, `style.css`, `app.js`, `sw.js`, `manifest.json`, `logo.svg`).
2. Inicie um servidor HTTP simples na pasta do projeto:
   - **Com Python 3:** `python -m http.server 8000`
   - **Com Node.js / npx:** `npx serve`
   - **Com VS Code:** Use a extensão *Live Server* e clique em "Go Live".
3. Acesse `http://localhost:8000` no seu navegador.

---

├── index.html
├── style.css
├── app.js
├── sw.js
├── manifest.json
├── logo.svg
└── README.md
