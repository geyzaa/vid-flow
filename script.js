const containerVideos = document.querySelector(".videos__container");

// async avisa o js que vai ser usado código assincrono na função
//await - vai aguardar que a busca seja feita p/ que o código da 
//função assíncrona continue sendo executado eliminando a necessidade do uso do then pra esperar o resultado do codigo anterior
async function buscarEMostrarVideos() {
    //try/catch - tentar executar o codigo e se ele capturar algum erro, faz o segundo bloco
    try {
        const busca = await fetch("http://localhost:3000/videos"); //faz a busca
        const videos = await busca.json();

        //.then(res => res.json()) //resposta da busca "então"
        //.then((videos) =>
        videos.forEach((video) => {
            if (video.categoria == "") {
                throw new Error('Vídeo não tem categoria');
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem} alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
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

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");

    if (barraDePesquisa.value != "") {
        for (let video of videos) {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if (!titulo.includes(valorFiltro)) {
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }
    } else {
        video.style.display = "block";
    }

}

/*Refatorando esse bloco 
function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  const valorFiltro = barraDePesquisa.value.toLowerCase();

  videos.forEach((video) => {
    const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

    video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
  });
}

Substituição do Loop for...of por forEach: O loop for...of é substituído por forEach para percorrer 
os elementos videos. Isso torna o código mais legível e conciso.

Condição Ternária: A lógica condicional que define o estilo de exibição (display) dos vídeos 
é simplificada usando uma condição ternária. Isso elimina a necessidade de blocos if...else.*/

const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", ()=> filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria (filtro) {
    const videos =document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}
