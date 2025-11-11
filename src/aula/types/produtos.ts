export type Produto = {
  id: number;          // ✅ adicionado — a API retorna esse campo e você usa ele como "key"
  title: string;
  //price: number;       // ✅ corrigido — na API o preço vem como número, não como string
  description: string;
  image: string;
};



