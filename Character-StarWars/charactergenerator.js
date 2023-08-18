console.log('Hola')

function setChar() {
    fetch("https://swapi.tech/api/people/1")
    .then(res => res.json())
    .then(data => {
        const characterName = data.result.properties.name

        const h1Element = document.getElementById('name');
        h1Element.innerHTML = characterName;
    })
    .catch(err => console.log(err))

}
   
setChar();
