const formulaire = document.querySelector(".formulaire-login")

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();
  


const email = document.querySelector("#email");
const password = document.querySelector("#password");
const messageError = document.querySelector("#error");

const user = {
  email: email.value,
  password: password.value,
}
// console.log(user)

//On envoie le formulaire à l'API 
try {
  const reponse = await fetch("http://localhost:5678/api/users/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  });
 
   
  if (reponse.ok) {
   
    const data = await reponse.json();
    // console.log(data);
  
    const token = data.token;
 
    localStorage.setItem('token', token);
   
   
    window.location.href = 'edition-mode.html';
  } else {

    messageError.textContent = "Erreur dans le mot de passe ou dans l'identifiant";

    setTimeout(() => {
      messageError.style.display = 'none';
    }, 5000);
  }
} catch (error) {
  console.log("Echec de l'authentification", error);
}

})

