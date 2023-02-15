class ProfilePhotographer{
    constructor(cards) {
    this.cards = cards;
}
createProfile() {
    let profileTemplate = "";
    const { name, portrait, id, tagline, city, price, country } = this.cards;


    profileTemplate = `<article><div><a href="/photographer.html?id=${id}"><img src="assets/photographers/${portrait}" alt="profil de ${name}" aria-label="Cliquez pour voir le profil de ${name}" height="200px" width="270px"><h2>${name}</h2><h3>${city}, ${country}</h3><h4>${tagline}</h4><h5>${price}€ / jour</h5></a></div></article>
    
   `;

return profileTemplate;
}
}