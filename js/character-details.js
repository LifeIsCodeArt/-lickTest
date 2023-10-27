const characterName = document.querySelector('#characterName')
const characterPhoto = document.querySelector('#mainPhoto')
const characterGender = document.querySelector('#gender')
const characterStatus = document.querySelector('#status')
const characterSpecie = document.querySelector('#specie')
const characterOrigin = document.querySelector('#origin')
const characterType = document.querySelector('#type')
const characterLocation = document.querySelector('#location')
const episodeArea = document.querySelector('#episodesArea')


let currentEpisodeId = '';
let episodesId = '';
let locationId = '';
let locationIdPure = '';
let characterCardId = localStorage.getItem('characterCardId')


episodeArea.addEventListener('click',e => {
    currentEpisodeId = e.target.id
    localStorage.setItem("episodeId", currentEpisodeId);
    console.log(localStorage.getItem("episodeId"))
})

const episodeItem = (data) => {
    return `<li class="episodes-list-item">
                <a class="link-to-episode"  href="../pages/episode-details.html">
                    <div class="item-text-block">
                            <div class="item-text-title">
                                ${data.episode}
                            </div>
                            <div class="item-text-subtitle" id="${data.id}">
                                ${data.name}
                            </div>
                            <div class="item-text-date">
                                ${data.air_date}
                            </div>
                    </div> 
                </a>
            </li>`
}

const setEpisodesId = (episodes) => {
    episodesId = ''
    episodes.forEach(item => {
        let pureId = item.split('/')
        episodesId += `${pureId[pureId.length-1]},`
    })
    localStorage.setItem('episodesFromCharacter', episodesId)
    console.log(localStorage.getItem('episodesID'))
}

let getInformation = () => {
    fetch(`https://rickandmortyapi.com/api/character/${characterCardId}`).then(res => {
        return res.json();
    })
        .then(dataInfo => {
            characterName.innerHTML = dataInfo.name
            characterGender.innerHTML = dataInfo.gender
            characterStatus.innerHTML = dataInfo.status
            characterSpecie.innerHTML = dataInfo.species
            characterOrigin.innerHTML = dataInfo.origin.name
            characterType.innerHTML = dataInfo.type
            characterLocation.innerHTML = dataInfo.location.name
            locationId = dataInfo.location.url.split('/')
            locationIdPure = `${locationId[locationId.length-1]}`
            localStorage.setItem("locationCardId", locationIdPure);
            console.log('testId: ', locationIdPure)
            characterPhoto.src = dataInfo.image
            setEpisodesId(dataInfo.episode)
        })
}
getInformation()

let  getEpisodes = () => {
    fetch(`https://rickandmortyapi.com/api/episode/${localStorage.getItem('episodesFromCharacter')}`).then(res => {
        return res.json();
    })
        .then(data => {
            episodeArea.innerHTML = ''
            data.forEach(item => {
                episodeArea.innerHTML += episodeItem(item)
            })
        })
}
getEpisodes()