const api = fetch("http://localhost:3000/videos") //faz a busca
.then(resposta => console.log(resposta.json())) //resposta da busca