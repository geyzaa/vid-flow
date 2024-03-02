const containerVideos = document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos") //faz a busca
    .then(res => res.json()) //resposta da busca "então"
    .then((videos) =>
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
    )