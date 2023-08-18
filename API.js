fetch("https://swapi.tech/api/people/1")
.then(res => res.json())
.then(data => console.log(data.result.properties.name))
.catch(err => console.log(err))

export default fetch