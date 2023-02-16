function profilePhotographer(data){
    const { name, portrait, id, tagline, city, price, country } = data;

function createProfile() {
    
    let profileTemplate = "";


    profileTemplate = `<article><div><a href="/photographer.html?id=${id}"><img src="assets/photographers/${portrait}" alt="profil de ${name}" aria-label="Cliquez pour voir le profil de ${name}" height="200px" width="270px"><h2>${name}</h2><h3>${city}, ${country}</h3><h4>${tagline}</h4><h5>${price}€ / jour</h5></a></div></article>`;
   console.log(profileTemplate)
   div = document.createElement('section')
   div.appendChild(profileTemplate)
   return div

}
return { name, portrait, id, tagline, city, price, country,  createProfile }
}

