export const api = {

    CarregarUsuarios: async () => {
        let response = await fetch("http://localhost:3000/usuarios");
        let json = await response.json();
        return json;
    }
}
