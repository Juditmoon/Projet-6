//Fonction pour vérifier si l'utilisateur est connecté
async function checkUserConnected () {
    const token = localStorage.getItem('token');
   //Vérification présence token
        // console.log(token);
     
    const userConnected = token != null && token != undefined && token != '';
 
    if (userConnected){
      // Si l'utilisateur est connecté 
          // Changement du bouton "login" en "logout" + déconnexion
          const login = document.querySelector('.login')
          login.textContent = "logout"
          login.addEventListener("click", userLogOut);
          //Les filtres sont masqués
          const filtres = document.querySelector('.filtres')
          filtres.style.display = "none"
          
    } else {
        const navEdition = document.querySelector('.header-mode-edition')
        navEdition.style.display = "none"
        const btnModifier = document.getElementById("myBtn")
        btnModifier.style.display = "none"
        const iconSquare = document.getElementById('icon-modal')
        iconSquare.style.display = "none"
        const mesProjetsTitle = document.querySelector(".h2MesProjets")
        mesProjetsTitle.classList.add('h2MesProjetsNotLoggedIn')
    }
     
 }
 
 checkUserConnected()

 // Fonction de déconnexion
function userLogOut() {
    // Nettoyage du localStorage => suppression du token
    localStorage.clear();
    // Rechargement de la page 
    window.location.reload();
 }
