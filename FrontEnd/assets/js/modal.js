//Gestion des appel à l'API

//Récupération des données des travaux 
const reponse = await fetch('http://localhost:5678/api/works');
const projets = await reponse.json()

function genererProjets(projets) {
    for (let i = 0; i < projets.length; i++) {

        const article = projets[i];
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
        iconElement.classList.add("fa-solid")
        sectionGalerie.classList.add('row')

        // On relie les éléments img et title à leur parent card et l'article à la div qui contient la galerie 
        sectionGalerie.appendChild(articleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(titreElement);
        articleElement.appendChild(iconElement);

    }

}

genererProjets(projets);


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
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none"
    }
}


//on trash click, delete work photo
const iconElement = document.querySelector('.fa-trash-can')
 iconElement.addEventListener('click', function(){
    const supprimer =  fetch (`http://localhost:5678/api/works/${idProject}`, {
                method: 'DELETE',
                headers: {
                    'accept': '*/*',
                    'Authorization': `Bearer ${monToken}`,
                }
      
     })}
    
 )
 
 

 

        




