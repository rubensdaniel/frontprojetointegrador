export const api = {
    CarregarTodosUsuarios: async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let json = await response.json();
        return json;
    }
}
