function mediaFactory(data) {
    const { date, id, image, likes, photographerId, price, title, video } = data;

    const getVideo = `assets/images/medias/${video}`;
    console.log(getVideo)

function getMediaCardDOM() {
    for(i = 0; i<data.length; i++){

    }
        if(video == undefined){
    console.log("1 =>", data.video)
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    img.setAttribute("src", `assets/images/medias/${image}`)
    // For accessibility, we add an alt = photo of photographer and an aria-label to tell that you can click on the image to see more infos
   // img.setAttribute("alt", `profil de ${name}`)
    const h2 = document.createElement( 'h2' );
    h2.textContent = title;
    const h3 = document.createElement('h3')
    h3.innerHTML = likes +`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`
    const span = document.createElement('span')
    span.classList.add("infosAboutPhoto")
    article.appendChild(img);
    article.appendChild(span);
    span.appendChild(h2);
    span.appendChild(h3);
     return (article)
   // article.appendChild(h5);
    } else {
        const article = document.createElement( 'article' );
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const h3 = document.createElement('h3')
        h3.innerHTML = likes +`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`
        const span = document.createElement('span')
        span.classList.add("infosAboutPhoto")
        const h4 = document.createElement('video')
        h4.setAttribute("src", `assets/images/medias/${video}`)
        article.appendChild(h4);
        article.appendChild(span);
        span.appendChild(h2);
        span.appendChild(h3);
        
        console.log("rentre dans condition")
        return (article)
    }
}
return { date, id, image, likes, photographerId, price, title, video, getMediaCardDOM }
}


