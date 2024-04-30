//Fonction pour vérifier si l'utilisateur est connecté
async function checkUserConnected () {
   const token = localStorage.getItem('token');
  //Vérification présence token
       console.log(token);
    
   const userConnected = token != null && token != undefined && token != '';

   if (userConnected){
     // Si l'utilisateur est connecté 
         // Changement du bouton "login" en "logout" + déconnexion
         const login = document.querySelector('.login')
         login.textContent = "logout"
         //Les filtres sont masqués
         const filtres = document.querySelector('.filtres')
         filtres.style.display = "none"
         //On enlève la galerie

         
   }
    
}

checkUserConnected()
