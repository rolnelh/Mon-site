function login () {
    let username = document.getElementById ('username').value;
    let email = document.getElementById ('email').value;
    let password = document.getElementById ('password').value;
    let text;


    if (username == "" || email == "" || password == "" ) {
        alert ( "Veuillez remplire les champs !") ;
    } else {
        text = `Bienvenue ${username} `
        document.getElementById(`contenu`).style.display = 'none';
        document.getElementById(`result`).style.display = 'block';
        document.getElementById(`textes`).style.display = 'center';
    }
    document.getElementById('textes').innerHTML = text;
}