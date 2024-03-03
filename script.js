const containerVideos = document.querySelector(".videos__container");

// async avisa o js que vai ser usado código assincrono na função
//await - vai aguardar que a busca seja feita p/ que o código da 
//função assíncrona continue sendo executado eliminando a necessidade do uso do then pra esperar o resultado do codigo anterior
async function buscarEMostrarVideos() {
    //try/catch - tentar executar o codigo e se ele capturar algum erro, faz o segundo bloco
    try {
        const busca = await fetch("http://localhost:3000/videos") //faz a busca
        const videos = await busca.json();

        //.then(res => res.json()) //resposta da busca "então"
        //.then((videos) =>
        videos.forEach((video) => {
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem} alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                </div>
            </li>
            `;
        })
    } catch (error) {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`
    }
    //   )
    //tratamento de erros
    //analisa bloco anterior e pega caso aconteça erros
    //    .catch((error)=> {
    //     containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
    //   })
}

buscarEMostrarVideos();