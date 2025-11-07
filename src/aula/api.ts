export const api = {
    CarregarTodosUsuarios: async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let json = await response.json();
        return json;
    },


    CarregarUsuario: async (usuarioId: number) => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${usuarioId}`);
        let json = await response.json();
        return json;
    },



    CarregarProduto: async () => {
        let response = await fetch("http://localhost:3000/produtos");
        let json = await response.json();
        return json;
    }
}
