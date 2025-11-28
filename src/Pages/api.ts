// export const api = {

//     CarregarUsuarios: async () => {
//         let response = await fetch("http://localhost:3000/usuarios");
//         let json = await response.json();
//         return json;
//     }
// }


// 👉 1️⃣ Tipagem usada nas funções da API
// export type MercadoPayload = {
//   nome: string;
//   telefone: string;
//   email: string;
//   rua: string;
//   numero: string;
//   bairro: string;
//   cep: string;
//   endereco: string;
// };
 
// // 👉 2️⃣ Objeto com funções de requisição
// export const api = {
//   CarregarTodosUsuarios: async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const json = await response.json();
//     return json;
//   },
 
//   CarregarUsuario: async (usuarioId: number) => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${usuarioId}`
//     );
//     const json = await response.json();
//     return json;
//   },
 
//   CarregarProduto: async () => {
//     const response = await fetch("http://localhost:3000/produtos");
//     const json = await response.json();
//     return json;
//   },
 
//   CriarMercado: async (dados: MercadoPayload) => {
//     try {
//       const response = await fetch("http://localhost:3000/mercados", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dados),
//       });
 
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message?.[0] || "Erro ao cadastrar mercado");
//       }
 
//       const json = await response.json();
//       return json;
//     } catch (error) {
//       throw error;
//     }
//   },
// };
 
 