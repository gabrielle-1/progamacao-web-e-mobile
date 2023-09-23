function sendForm () {    

    const loader = document.querySelector('.load-div');
    loader.classList.toggle('hide');

    const url = "http://localhost:3000/enviar-email";

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let project = document.getElementById("project");
    let message = document.getElementById("message");    

    // recuerar os campos do form
    name = (name.value != "" || name.value != null) ? name.value : "" ;
    email = (email.value != "" || email.value != null) ? email.value : "" ;
    project = (project.value != "" || project.value != null) ? project.value : "" ;
    message = (message.value != "" || message.value != null) ? message.value : "" ;


    if (name == "" || email == "" || project == "" || message == "") {
        alert("Todos os campos são obrigatórios!");
        return false;    
    }

    const data = {
        name: name,
        email: email,
        project: project,
        message: message
    }

    $.ajax({
        url: url,
        type: "POST",        
        data: data,
        success: function(data) {
            if (data.mensagem != "") {
                popup.style.display = 'block';
                loader.classList.toggle('hide');
            }
        },
        error: function(xhr, status, error) {            
            console.log(error);
        }
    });
}

const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Fecha o popup
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fecha o popup se o usuário clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});