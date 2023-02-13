function photographerFactory(data) {
    const { name, portrait, id, tagline, city, price, country } = data;

    ////////////Getting all infos ////////////////////
    
    // Getting our Pictures
    const picture = `assets/photographers/${portrait}`;
    console.log(picture)

    // Our Ids
    const getId = `${id}`

    // Our taglines
    const getTagline = `${tagline}`

    // Our Cities
    const getCity = `${city}`

    // Our Prices
    const getPrices = `${price}`

    // Our Countries
    const getCountries = `${country}`
    
    //Our Photographer
    const getPhotographer = `/photographer.html?id=${getId}`
    

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        // For accessibility, we add an alt = photo of photographer and an aria-label to tell that you can click on the image to see more infos
        img.setAttribute("alt", `profil de ${name}`)
        img.setAttribute("aria-label", `cliquez pour consulter le profil de ${name}`)
        img.setAttribute("height", "200px")
        img.setAttribute("width", "270px")
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3')
        h3.textContent = getCity + ", " + getCountries
        const h4 = document.createElement('h4')
        h4.textContent = getTagline
        const h5 = document.createElement('h5')
        h5.textContent = getPrices+" €/jour"
        const a = document.createElement('a')
        a.href=getPhotographer;
        const div = document.createElement('div')


        article.appendChild(div);
        div.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(h3);
        a.appendChild(h4);
        a.appendChild(h5);

        return (article);
    }
    // We added every data of our photographers
    return { name, portrait, id, tagline, city, price, country,  getUserCardDOM }
}