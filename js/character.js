const renderCharacters = document.querySelector('#cardsArea')
const previousButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')
const pagination = document.querySelector('#pagination')

const nameSearch = document.querySelector('#charactersNameFilter')
const speciesSearch = document.querySelector('#characterSpecies')
const genderSearch = document.querySelector('#characterGender')
const characterStatus = document.querySelector('#characterStatus')

const burger = document.querySelector('#burger')
const navigation = document.querySelector('#navigation')

burger.addEventListener('click', function (e) {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
})
let characters = []
let page = 1
let info = ''
let nextPage = ''
let prevPage = ''


const init = () =>{
    getCharacters(page)
}

let getCharacters = (page) => {
    renderCharacters.innerHTML = ''
    prevPage = ''
    nextPage = ''
    fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${nameSearch.value}&species=${speciesSearch.value}&gender=${genderSearch.value}&status=${characterStatus.value}`).then(res => {
        return res.json();
    })
        .then(data => {
            characters = data['results']
            info = data['info']

            if(info.prev){
            prevPage = parseInt(info.prev.match(/\d+/))
            pagination.innerHTML =  paginationItem(prevPage)
            pagination.innerHTML +=  paginationItem(page)
            previousButton.classList.remove('disabled')
            }
            else{
                prevPage = ''
                pagination.innerHTML = paginationItem(page)
                previousButton.classList.add('disabled')
            }
            if(info.next){
                nextPage = parseInt(info.next.match(/\d+/))
                pagination.innerHTML +=  paginationItem(nextPage)
                nextButton.classList.remove('disabled')
            }
            else{
                nextPage = ''
                nextButton.classList.add('disabled')
            }
            characters.forEach(item => {
                renderCharacters.innerHTML += characterItem(item)
            })
        })
}

nameSearch.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        getCharacters(page)
    }
})

const setCharacterId = (id) => {
    localStorage.setItem("characterCardId", id);
    console.log('testId: ', id)
}
const paginationItem = (page) =>{
    return ` <li class="pagination-item" onclick="getCharacters(${page})">
                <a role="button" class="pagination-page">${page}</a>
             </li>`
}

const characterItem = (data) => {
    return `<div onclick="setCharacterId(${data.id})" class="col-3 mb-3">
                <a class="link-to-character"  href="../pages/character-details.html">
                    <div class="card">
                        <div class="card-image">
                            <img src="${data.image}" alt="" class="picture-card">
                        </div>
                        <div class="card-text">
                            <div class="card-text__name" title="${data.name}">
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

previousButton.addEventListener('click', function () {
    if (info['prev']){
        page--
        getCharacters(page)
        previousButton.classList.add('disabled')
    }

})

nextButton.addEventListener('click', function () {
    if (info['next']){
        page++

        getCharacters(page)
        previousButton.classList.remove('disabled')
    }
})
init()

