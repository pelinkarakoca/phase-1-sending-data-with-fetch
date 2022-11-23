
//appending user id to DOM
function appendId(data) {
const para = document.createElement("p");
para.textContent = data.id;
document.querySelector("body").appendChild(para);
}

function catchData(error) {
    const errorPara = document.createElement("p");
    errorPara.innerHTML = error.message;
    document.querySelector("body").appendChild(errorPara)
}

function submitData (uname, mail) {
    const configurationObject = {
       method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
        name: uname,
        email: mail,
        }),
    };
    return fetch('http://localhost:3000/users', configurationObject)
    .then((response) => response.json())
    .then((data) => appendId(data))
    .catch((error) => catchData(error))
}