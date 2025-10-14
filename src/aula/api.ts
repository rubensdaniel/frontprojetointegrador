export const api = {
    CarregarTodosUsuarios: async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let json = await response.json();
        return json;
    },


    CarregarUsuario: async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${usuarioId}`);
        let json = await response.json();
        return json;
    }
}
