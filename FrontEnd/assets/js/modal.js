//Gestion des appel à l'API

//Récupération des données des travaux 
const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json()

function genererProjets(projets) {

    for (let i = 0; i < projets.length; i++) {

        const article = projets[i];
        //sélection de la div qui va contenir les travaux  
        const sectionGalerie = document.querySelector(".galerie");
        //on crée les éléments
        const articleElement = document.createElement("article");
        const imageElement = document.createElement("img");
        const titreElement = document.createElement("p");
         // On récupère les données importantes pour afficher les travaux
        imageElement.src = article.imageUrl;
        imageElement.setAttribute('categorie', article.categoryId);
        titreElement.innerText = article.title;

        // On relie les éléments img et title à leur parent card et l'article à la div qui contient la galerie 
        sectionGalerie.appendChild(articleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(titreElement);

    }

}

genererProjets(projets);



//Récupération des données des travaux 
const reponseModal = await fetch('http://localhost:5678/api/works');
const projetsModal = await reponseModal.json()

function genererProjetsModal(projetsModal) {
    for (let i = 0; i < projetsModal.length; i++) {

        const article = projetsModal[i];
        //sélection de la div qui va contenir les travaux  
        const sectionGalerie = document.querySelector(".galerie-modal");
        //on crée les éléments
        const articleElement = document.createElement("article");
        const imageElement = document.createElement("img");
        const titreElement = document.createElement("p");
        const iconElement = document.createElement("i");

         // On récupère les données importantes pour afficher les travaux
        imageElement.src = article.imageUrl;
        imageElement.setAttribute('categorie', article.categoryId);
        imageElement.classList.add('image-size')
        iconElement.classList.add("fa-trash-can")
        iconElement.addEventListener("click", (event) => {
          
          event.preventDefault();
           
            deleteWork(article.id, event);
          
        });
        iconElement.classList.add("fa-solid")
        iconElement.setAttribute("id", "work.id");
        sectionGalerie.classList.add('row')

        // On relie les éléments img et title à leur parent card et l'article à la div qui contient la galerie 
        sectionGalerie.appendChild(articleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(titreElement);
        articleElement.appendChild(iconElement);

    }

}

genererProjetsModal(projetsModal);


// // get modal 
const modal = document.getElementById('myModal')

// // get the button that opens the modal
const btn = document.getElementById('myBtn')

// // get the <span> element that closes the modal
const span = document.querySelector('.close')

// // when the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block"
}

// when the user clicks on <span>, close the modal 
span.onclick = function(){
    modal.style.display = "none"
}

// when the user clicks anywhere outside of the modal, close it 
window.addEventListener("click",  function(event){
    if (event.target == modal) {
        modal.style.display = "none"
    } }
)

const token = localStorage.getItem('token');


async function deleteWork(workId, event) {
  
  const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    if (response.ok) {
      const figmodal = document.getElementById('workId').parentNode.parentNode.removeChild;
      event.preventDefault()
    //   figmodal.style.display = "none";

      console.log(figmodal)
    }
  } catch (error) {
    console.log(error);
  }
}

// Modal-2

//on fait apparaître la modal2
const buttonAjouter = document.querySelector('.button-modal')
buttonAjouter.addEventListener('click', function(){
  const bodyBackground = document.querySelector('.body')
  bodyBackground.classList.add("body")
  const modal1 = document.getElementById('myModal')
  modal1.style.display = "none"
  const modal2 = document.getElementById('modalAjout')
  modal2.style.display = "block"
})


//gére le click sur la flèche
const arrow = document.querySelector(".fa-arrow-left")
arrow.addEventListener("click", function(){
  const modal1 = document.getElementById('myModal')
  modal1.style.display = "block"
  const modal2 = document.getElementById('modalAjout')
  modal2.style.display = "none"
})


//gére le click sur la croix
const closeIt = document.querySelector(".close2")
closeIt.addEventListener("click", function(){
  const modal1 = document.getElementById('myModal')
  modal1.style.display = "none"
  const modal2 = document.getElementById('modalAjout')
  modal2.style.display = "none"
}) 

//fermer la modale onclick dehors de la modal
const modal2 = document.getElementById('modalAjout')
modal2.addEventListener('click', function(event){
  console.log(event.target)
  if(event.target == modal2) {
    modal2.style.display = "none"
  }
})


//click ajouter photo, direction mon PC
// const ajouterPhoto = document.querySelector(".ajouterPhoto")
// ajouterPhoto.addEventListener('change', (event) => {
//   const fileList = event.target.files 
 
// })







 

 

        




