const locationName = document.querySelector('#locationName')
const locationType = document.querySelector('#locationType')
const locationDimension = document.querySelector('#locationDimension')
const renderCharacters = document.querySelector('#residentArea')

let idLocationPass = localStorage.getItem('locationCardId')
renderCharacters.innerHTML = '';
let episodeCharactersInfo = '';
let residentsId = '';
let episodeId = ''

renderCharacters.addEventListener('click',e => {
    episodeId = e.target.id
    localStorage.setItem("characterCardId", episodeId);
    console.log(localStorage.getItem("characterCardId"))
})


const characterItem = (data) => {
    return `<div class="col-3 mb-3">
                   <a class="link-to-character"  href="../pages/character-details.html">
                        <div  class="card">
                            <div class="card-image">
                                <img src="${data.image}" alt="" class="picture-card">
                            </div>
                            <div class="card-text" id="${data.id}">
                                <div class="card-text__name">
                                    ${data.name}
                                </div>
                                <div class="card-text__type">
                                    ${data.species}
                                </div>
                            </div>
                        </div>    
                   </a>  
            </div>`
}

const setResidentsId = (residents) => {
    residentsId = ''
        residents.forEach(item => {
            let pureId = item.split('/')
            residentsId += `${pureId[pureId.length-1]},`
        })
    localStorage.setItem('charsFromLocation', residentsId)
}

let getLocationInfo = () => {
    fetch(`https://rickandmortyapi.com/api/location/${idLocationPass}`).then(res => {
        return res.json();
    })
        .then(dataInfo => {
            renderCharacters.innerHTML = ''
            locationName.innerHTML = dataInfo.name
            locationType.innerHTML = dataInfo.type
            locationDimension.innerHTML = dataInfo.dimension
            episodeCharactersInfo = dataInfo.residents
            setResidentsId(dataInfo.residents)
        })
}
getLocationInfo()

let  getChars = () => {
    fetch(`https://rickandmortyapi.com/api/character/${localStorage.getItem('charsFromLocation')}`).then(res => {
        return res.json();
    })
        .then(data => {
            renderCharacters.innerHTML = ''
            data.forEach(item => {
                renderCharacters.innerHTML += characterItem(item)
                console.log(item.id)
            })
        })
}
getChars()