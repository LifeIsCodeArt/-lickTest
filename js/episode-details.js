const episodeName = document.querySelector('#episodeName')
const renderEpisodes = document.querySelector('#residentArea')
const episodeNumber = document.querySelector('#episodeNumber')
const episodeDate = document.querySelector('#episodeDate')

let idCardPass = localStorage.getItem('episodeId')
let episodeCharactersInfo = '';
let charactersId = '';
let episodeId = ''
renderEpisodes.innerHTML = '';

 renderEpisodes.addEventListener('click',e => {
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

const setCharactersId = (characters) => {
    charactersId = ''
    characters.forEach(item => {
        let pureId = item.split('/')
        charactersId += `${pureId[pureId.length-1]},`
    })
    localStorage.setItem('charsFromEpisode', charactersId)
}

let getEpisodes = () => {
    fetch(`https://rickandmortyapi.com/api/episode/${idCardPass}`).then(res => {
        return res.json();
    })
        .then(dataInfo => {
            renderEpisodes.innerHTML = ''
            episodeName.innerHTML = dataInfo.name
            episodeNumber.innerHTML = dataInfo.air_date
            episodeDate.innerHTML = dataInfo.episode
            episodeCharactersInfo = dataInfo.characters
            setCharactersId(dataInfo.characters)
        })
}
        getEpisodes()

   let  getChars = () => {
        fetch(`https://rickandmortyapi.com/api/character/${localStorage.getItem('charsFromEpisode')}`).then(res => {
            return res.json();
        })
            .then(data => {
                renderEpisodes.innerHTML = ''
                data.forEach(item => {
                    renderEpisodes.innerHTML += characterItem(item)
                    console.log(item.id)
                })
            })
    }
        getChars()