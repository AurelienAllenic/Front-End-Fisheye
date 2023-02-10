function mediaFactory(data) {
    const { date, id, image, likes, photographerId, price, title } = data;

    ////////////Getting all infos ////////////////////
// Getting our Pictures
const getImages = `assets/images/${photographerId}/${image}`;
console.log(getImages)

// Our Dates
const getDate = `${date}`
console.log(getDate)

// Our Ids
const getId = `${id}`
console.log(getId)

// Our Titles
const getTitle = `${title}`
console.log(getTitle)


// Our Prices
const getPrices = `${price}`
console.log(getPrices)

//Our PhotographerId
const getPhotographerId = `${photographerId}`
console.log(getPhotographerId)

//Our Medias likes
const getLikes = `${likes}`
console.log(getLikes)

function getMediaCardDOM() {
    const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    img.setAttribute("src", getImages)
    // For accessibility, we add an alt = photo of photographer and an aria-label to tell that you can click on the image to see more infos
   // img.setAttribute("alt", `profil de ${name}`)
    img.setAttribute("aria-label", `cliquez pour consulter le profil de ${name}`)
    const h2 = document.createElement( 'h2' );
    h2.textContent = getTitle;
    const h3 = document.createElement('h3')
    h3.innerHTML = getLikes +`<svg class="svg" fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.701 471.701" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path> </g> </g></svg>`
    /*const h4 = document.createElement('h4')
    h4.textContent = getCountries
    const h5 = document.createElement('h5')
    h5.textContent = getPrices+" € /h"
    const a = document.createElement('a')
    a.textContent = "Voir le profil"
   // a.href=getPhotographer;*/
    
    article.appendChild(img);
    article.appendChild(h2);
   article.appendChild(h3);
    /* article.appendChild(h4);
    article.appendChild(h5);*/

    return (article)
}
return { date, id, image, likes, photographerId, price, title,  getMediaCardDOM }
}


