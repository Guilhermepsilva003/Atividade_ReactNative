📱 App Consumindo API Pública — React Native + Expo

Este é um projeto simples desenvolvido em React Native com Expo, cujo objetivo é consumir uma API pública e exibir seus dados em telas navegáveis.

O app utiliza:

React Native

Expo

React Navigation

API pública JSONPlaceholder

Estrutura mínima (sem Expo Router)

🚀 Funcionalidades

✔ Tela inicial com botão estilizado

✔ Navegação entre telas

✔ Consumo de API pública (JSONPlaceholder)

✔ Listagem de usuários

✔ Tela de detalhes de cada usuário

✔ Explicação do que o app está fazendo

✔ Layout simples e agradável

📂 Estrutura do Projeto
MeuAppApi/
  App.js
  package.json
  screens/
    HomeScreen.js
    UsersScreen.js
    DetailsScreen.js

🔧 Tecnologias Utilizadas

Expo — para rodar o projeto facilmente

React Native — interface mobile

React Navigation (Stack) — navegação entre telas

Fetch API — requisição HTTP para buscar usuários

🌐 API Utilizada

Usamos a API gratuita:

👉 https://jsonplaceholder.typicode.com/users

Ela retorna uma lista de usuários fictícios — perfeita para estudos.

▶️ Como Rodar o Projeto
1. Instale o Expo CLI (caso não tenha)
npm install -g expo-cli

2. Instale as dependências do projeto

Dentro da pasta do projeto:

npm install

3. Instale o React Navigation Stack
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

4. Execute o projeto
npx expo start


Ou com cache limpo (recomendado no início):

npx expo start -c

5. Abra no celular usando o Expo Go

Escaneie o QR Code que aparece no terminal ou navegador.

📸 Telas do App
🏠 Tela Inicial

Botão estilizado "Ver usuários" para ir à lista.

👥 Tela de Usuários

Lista de usuários vinda da API, com layout limpo e botão "Detalhes".

📄 Tela de Detalhes

Mostra informações específicas do usuário e explica o funcionamento do app.

📝 Código das Telas Principais

Todos os arquivos já estão prontos dentro da pasta screens/.
