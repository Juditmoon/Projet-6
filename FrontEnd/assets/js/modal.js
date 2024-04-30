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
    const deleteButton = document.createElement("button");

    // On récupère les données importantes pour afficher les travaux
    imageElement.src = article.imageUrl;
    imageElement.setAttribute('categorie', article.categoryId);
    imageElement.classList.add('image-size')
    deleteButton.classList.add('fa-trash-can')

    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation()


      deleteWork(article.id, event);
    });

    deleteButton.classList.add("fa-solid")
    deleteButton.setAttribute("id", "workId");
    sectionGalerie.classList.add('row')

    // On relie les éléments img et title à leur parent card et l'article à la div qui contient la galerie 
    sectionGalerie.appendChild(articleElement);
    articleElement.appendChild(imageElement);
    articleElement.appendChild(titreElement);
    articleElement.appendChild(deleteButton);

  }
}
genererProjetsModal(projetsModal);


// // get modal 
const modal = document.getElementById('myModal')

// // get the button that opens the modal
const btn = document.getElementById('myBtn')

// // get the <span> element that closes the modal(c'est le icon croix)
const span = document.querySelector('.close')

// // when the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block"
}

// when the user clicks on <span>(the cross), close the modal
span.onclick = function () {
  modal.style.display = "none"
}

// // when the user clicks anywhere outside of the modal, close it 
window.addEventListener("click", function (event) {
  if (event.target == modal ) {
    modal.style.display = "none"
  }
}
)

// Gestion de supprimer de travaux 
const token = localStorage.getItem('token');

async function deleteWork(workId) {

  const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
}

// Modal-2

//on fait apparaître la modal2
const buttonAjouter = document.querySelector('.button-modal')
buttonAjouter.addEventListener('click', function () {
  const bodyBackground = document.querySelector('.body')
  bodyBackground.classList.add("body")
  const modal1 = document.getElementById('myModal')
  modal1.style.display = "none"
  const modal2 = document.getElementById('modalAjout')
  modal2.style.display = "block"
})


//gére le click sur la flèche
const arrow = document.querySelector(".fa-arrow-left")
arrow.addEventListener("click", function () {
  const modal1 = document.getElementById('myModal')
  modal1.style.display = "block"
  const modal2 = document.getElementById('modalAjout')
  modal2.style.display = "none"
})


//gére le click sur la croix
const closeIt = document.querySelector(".close2")
closeIt.addEventListener("click", function (event) {

  const modal1 = document.getElementById('myModal')
  modal1.style.display = "none"
  const modal2 = document.getElementById('modalAjout')
  modal2.style.display = "none"
  if (event.target == closeIt) {
    form.reset()
    previewImage.src = '';
    
  }

})


//click ajouter photo, direction mon PC
const fileInput = document.querySelector('input')
fileInput.addEventListener('change', () => {
  const preview = document.getElementById('preview')

  const fr = new FileReader()
  fr.readAsDataURL(fileInput.files[0])
  fr.addEventListener('load', () => {
    preview.urlContent = fr.result
    // console.log(preview.urlContent)

    const img = new Image()
    img.setAttribute("id", "previewImage")
    img.src = preview.urlContent
    preview.appendChild(img)
    img.classList.add('addImg')
    const label = document.getElementById('label')
    label.style.display = "none"
    const pModal2 = document.querySelector('.pModal2')
    pModal2.style.display = "none"
  })
})

//fermer la modale onclick dehors de la modal
function closeModal2() {
  const form = document.getElementById('form')
  const modal2 = document.getElementById('modalAjout')
  const previewImage = document.getElementById('previewImage');
  modal2.addEventListener('click', function (event) {
    
    // console.log(event.target)
    if (event.target == modal2) {
      modal2.style.display = "none"
      form.reset()
      previewImage.src = '';
    }
  })

}
closeModal2()


function getTitreValue() {
  var titreValue = document.getElementById('titre').value;
  console.log('The value of "itre" input is: ' + titreValue);
}
let inputTitre = document.getElementById('titre');
inputTitre.addEventListener('input', getTitreValue);
// // function that changes the submit button of the formulaire to green when all the inputs have been filled
function changeButtonColor() {
  var fieldInput = document.getElementById('file').value;
  console.log(fieldInput)
  var titreInput = document.getElementById('titre').value;
  var optionValue = document.getElementById('list').value;

  var validerButton = document.getElementById('validerButton');

  if (fieldInput !== '' && titreInput !== '' && optionValue !== 'emptyOption') {
    validerButton.style.backgroundColor = '#1D6154';
  } else {
    validerButton.style.backgroundColor = '#A7A7A7';
  }
}

let fieldInput = document.getElementById('file');
fieldInput.addEventListener('input', changeButtonColor);
document.getElementById('titre').addEventListener('input', changeButtonColor);
document.getElementById('list').addEventListener('change', changeButtonColor);

let validerButton = document.getElementById('validerButton');
validerButton.addEventListener('click', function () {

  var fieldInput = document.getElementById('file').value;
  console.log(fieldInput)
  var titreInput = document.getElementById('titre').value;
  var optionValue = document.getElementById('list').value;
  var validerButton = document.getElementById('validerButton');

  if (fieldInput !== '' && titreInput !== '' && optionValue !== 'emptyOption') {
    validerButton.style.backgroundColor = '#1D6154';
  } else {
    alert('Veuillez remplir tous les champs')
  }
});

let alertTriggered = false;

function stopFormSubmission(event) {
  if (alertTriggered) {
    event.preventDefault(); // Prevent the form from submitting
  }
}

// Example of how to trigger the alert
function triggerAlert() {
  // alert('Veuillez remplir tous les champs');
  alertTriggered = true; // Set the flag to true when the alert is triggered
}

// Add an event listener to the form submit event
document.getElementById('form').addEventListener('submit', stopFormSubmission);
function stopModalClose(event) {
  if (alertTriggered) {
    event.preventDefault();
    event.stopPropagation();
  }
}

// Example of how to trigger the alert and prevent modal close
function triggerAlertAndPreventModalClose() {
  alertTriggered = true;
}
document.getElementById('modalAjout').addEventListener('hide.bs.modal', stopModalClose);
document.getElementById('validerButton').addEventListener('click', () => {
  triggerAlertAndPreventModalClose, addWork
});


// // Ajouter un projet
const btnAjouterProjet = document.querySelector("#validerButton");
btnAjouterProjet.addEventListener("click", addWork);

async function addWork(event) {
  event.preventDefault()
  const titre = document.querySelector("#titre").value;
  const categorie = document.querySelector("#list").value;
  const file = document.querySelector('#file');
  try {
    const formData = new FormData();
    formData.append('title', titre);
    formData.append('category', categorie);
    formData.append('image', file.files[0]);

    const response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.status === 201) {
      alert("Projet ajouté avec succès :)");
    } else if (response.status === 500) {
      alert("Erreur serveur");
    } else if (response.status === 401) {
      alert("Vous n'êtes pas autorisé à ajouter un projet");

    }
  }

  catch (error) {
    console.log(error);
  }
}















