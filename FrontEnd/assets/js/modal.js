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
         // On récupère les données importantes pour afficher les travaux
        imageElement.src = article.imageUrl;
        imageElement.setAttribute('categorie', article.categoryId);
        imageElement.classList.add('image-size')
        sectionGalerie.classList.add('row')

        // On relie les éléments img et title à leur parent card et l'article à la div qui contient la galerie 
        sectionGalerie.appendChild(articleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(titreElement);

    }

}

genererProjets(projets);


 // Récupération des catégories 
 async function genererFiltres() {
    await fetch("http://localhost:5678/api/categories")
    .then(response => response.json())
    .then(dataCategories => {
        // Test de récupération des catégories
        //    console.table(dataCategories);
        
        // Sélection de la div qui va contenir les filtres
        const filtres = document.querySelector(".filtres")
        // Création du filtre Tous 
        const tousFiltre = document.createElement('p');
        tousFiltre.textContent = 'Tous';
        tousFiltre.classList.add("filtreButton");
        tousFiltre.classList.add("filtreActif")
        filtres.appendChild(tousFiltre);
        // Utilisation d'une boucle pour créer les noms des catégories
        dataCategories.forEach((categorie) => {
           const nameFiltres = document.createElement("p");
           nameFiltres.innerText = categorie.name;
           nameFiltres.id = categorie.id;
           nameFiltres.classList.add("filtreButton");
           filtres.appendChild(nameFiltres);   
        });
        //On fait l'événement click sur les filtres 
        filtres.querySelectorAll('p').forEach((filtre) => {
            filtre.addEventListener("click", function() {
                // Sélection de l'id appliqué lors de la création des images des travaux 
                const id = this.id;
                // console.log(this.id)
                document.querySelectorAll('.galerie img').forEach((image) => {
                    // Si image = catégorie correspondante, afficher l'image
                    if (image.getAttribute('categorie') === id) {
                        image.parentElement.style.display = 'block';
                    } else {
                        // Sinon, masquer
                        image.parentElement.style.display = 'none';
                    }})
                });
            
        });
        // Pour le filtre Tous - réinitialisation de l'affichage 
        tousFiltre.addEventListener('click', function () {
            // Sélectionne toutes les images de la galerie
            document.querySelectorAll('.galerie img').forEach(image => {
            // Permet d'afficher tous les travaux 
            image.parentElement.style.display = 'block';
            });
        }); 
        //Sélection du filtre actif
        const elements = filtres.querySelectorAll('p');
        elements.forEach((element) => {
            element.addEventListener("click", () => {
                elements.forEach((element) => {
                    // Au clic sur un bouton on retire la classe "active" du filtre "Tous"
                    element.classList.remove("filtreActif");
                    });
                    // Et on ajoute cette classe active sur le bouton cliqué
                    element.classList.add("filtreActif"); 
            });
                });  
    })
    
 }

genererFiltres()
 


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


        




