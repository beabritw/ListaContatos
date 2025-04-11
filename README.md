# 📱 App de Cadastro de Contatos utilizando React Native + Expo

Este é um app simples desenvolvido com React Native utilizando o Expo, com o objetivo de cadastrar e listar contatos com nome e telefone. Esta é uma atividade avaliativa da matéria Programação para Dispositivos Móveis.

---

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
   npx expo start
   ```

Você pode abrir o app em:

- Um emulador Android
- No seu celular com o app Expo Go
- No navegador

---

- O código principal está no arquivo:  
  📄 `app/index.js` → contém a lógica do cadastro, armazenamento em memória e exibição da lista de contatos.

- Os textos da interface (rótulos, botões, títulos) estão organizados separadamente em:  
  📄 `utils/messages.js`

---

## Funcionalidades

- ✅ Cadastro de nome e telefone  
- ✅ Validação de campos vazios  
- ✅ Evita contatos duplicados  
- ✅ Lista de contatos com scroll  
- ✅ Interface simples e responsiva

---

## Estrutura do Projeto

```bash
.
├── app              
│   └── index.js        # Código principal do app 
├── utils
│   └── messages.js     # Arquivo com os textos/rótulos usados na interface
├── package.json
└── ...
```

---

## Recursos

- [📘 Documentação do Expo](https://docs.expo.dev/)
- [📘 Documentação do React Native](https://reactnative.dev/)
- [📱 Como rodar no emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [📱 Usar Expo Go no celular](https://expo.dev/go)
