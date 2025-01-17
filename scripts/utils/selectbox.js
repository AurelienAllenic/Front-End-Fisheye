// Getting where we're going to insert our Selectbox

const selector = document.querySelector(".selectBox_container");

// Creating Selectbox
selector.innerHTML = `
        <div class="container_name_selectBox">
          <p>Trier par :</p>
        </div>
        <div id="selectBox">
        <div id="selectBoxVisible">
            <span class="container_arrow_first_choice">
                <button type="button" class="btn-choice" id="first-choice" data-filtre="likes">Popularité</button>
              <button class="button-arrow" id="button_arrow" tabindex="0">
                    <img src="/assets/icons/chevron-up-solid.svg" class="arrow_selection" id="arrow_selection" role="button" aria-hashpop="listbox" aria-expanded/> 
                </button>
            </span>
            <span id="hidden_options" class="hidden_options">
            <button type="button" class="btn-choice" data-filtre="date" id="second-choice" tabindex="0">Date</button>
            <button type="button" class="btn-choice" data-filtre="title" id="third-choice" tabindex="0">Titre</button>
            </span>
            </div>
        </div>`;

// Our second and third buttons of selectbox are hidden
let hiddenOptions = document.getElementById("hidden_options")
hiddenOptions.style.display = "none";
// Getting our arrow for selectbox
let arrow = document.getElementById("button_arrow");
// IsOpen to check if the selectbox box is open
let isOpen = false;
// Our first button of the selectbox
let firstOption = document.getElementById("first-choice");
// Getting all the selectbox
const selectOptions = document.getElementById("OurSelectBox");
// Getting all buttons of the selectbox
const allButtons = selectOptions.querySelectorAll("button");
let ourButtons = []
ourButtons.push(allButtons[0], allButtons[2], allButtons[3])
console.log(ourButtons)

// Handling opening and closure of the list
    arrow.onclick = function(){
        if(!isOpen){
            hiddenOptions = document.getElementById("hidden_options")
            hiddenOptions.style.display = "block";
            isOpen = true;
        } else{
            hiddenOptions = document.getElementById("hidden_options")
            hiddenOptions.style.display = "none"; 
            isOpen = false;
        }   
    }
///////////////////////////////////

// Handling click on first option
firstOption.addEventListener("click", handleButtonsOptions())
/////////////////////////////////

// Handling click on arrow 
arrow.addEventListener("click", () => {
  if(isOpen){
    return handleButtonsOptions();
  } 
});
//////////////////////////

// Handling closure of the selectBox
function closeSelect() {
  hiddenOptions.style.display = "none";
  return (isOpen = false);
}
/////////////////////////////////////

// Function that first, handles the changing of text inside first button on click
function handleButtonsOptions() {
  ourButtons.forEach((button) => {
    button.onclick = () => {
//Getting infos about the clicked button, to, adapt the selectbox and filter datas
    const buttonText = button.textContent;
    const sortValue = button.dataset.filtre;

    button.innerHTML = firstOption.textContent;
    button.dataset.filtre = firstOption.dataset.filtre;

    firstOption.innerHTML = buttonText;
    firstOption.dataset.filtre = sortValue;
//////////////
// Then we close the selectbox
      closeSelect();
//////////////////////////////////////

// We first get all our medias inside an array
      let items = document.querySelectorAll('.gallery-item');
      let medias = [];
        items.forEach((item) => {
          medias.push(item)
          return item;
        })
//////////////////////////////////////
    
// Sort on the array containing all the medias
      medias.sort(function(a, b) {
// We get our attribute, likes, title or date and filter with it
        let mediaA = a.getAttribute('post-'+sortValue);
        let mediaB = b.getAttribute('post-'+sortValue);
        if(sortValue == 'likes'){
            return (parseInt(mediaB) < parseInt(mediaA)) ? -1 : (parseInt(mediaB) > parseInt(mediaA)) ? 1 : 0;
        } else {
            return (mediaA < mediaB) ? -1 : (mediaA > mediaB) ? 1 : 0;
        }
    }).forEach(function(filteredMedia) {
      filteredMedia.parentNode.appendChild(filteredMedia)
    });
    }
  })}