var namepoke = document.getElementById('search-bar')
var btn = document.getElementById('sub')
btn.addEventListener('click',(event) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${namepoke.value.toLowerCase()}`).then((respone) =>{
    respone.json().then((data) =>{
        namepoke.value = '';
        document.getElementById('name').innerText = data.forms[0].name.toUpperCase()
        document.getElementById('height').innerText  = data.height
        document.getElementById('weight').innerText = data.weight
        document.getElementById('type').innerText = data.types[0].type.name
        var photos = document.getElementById('photos')
        photos.innerHTML = '';
        photos.innerHTML +=`
            <img id="image" src="${data.sprites.front_default}" alt="">
        `
        var bio = document.getElementById('bio')
        if(bio){
            bio.innerHTML = '';
            bio.innerHTML +=`<p>this pokemon has ${data.abilities[0].ability.name} ability</p>`
        }


    })
  })
})
function show(){
    
}