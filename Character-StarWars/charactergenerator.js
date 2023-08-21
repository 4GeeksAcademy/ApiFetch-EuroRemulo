console.log('Hola')

function setChar() {
    fetch("https://swapi.tech/api/people/1")
    .then(res => res.json())
    .then(data => {
        const characterName = data.result.properties.name;
        const characterUrl = data.result.properties.url;

        const charName = document.getElementById('name');
        const charUrl = document.createElement('a');
        charUrl.textContent = characterName;
        charUrl.href = characterUrl;
        
        charName.appendChild(charUrl);
    })
    .catch(err => console.log(err));
}

setChar();