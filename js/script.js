const cardArea = document.getElementById('cardsArea')
const cardPersonName = document.getElementsByClassName('card-text__name')
const cardPersonSpecies = document.getElementsByClassName('card-text__type')
const cardPersonImages = document.getElementsByClassName('picture-card')
let cardImagesArray = [...cardPersonImages]
console.log(cardImagesArray)
let cardSpeciesArray = [...cardPersonSpecies]
let personNameArray = [...cardPersonName]
const URLCharacters = fetch('https://rickandmortyapi.com/api/character')
let savePoint =[]
let characterNames = fetch('https://rickandmortyapi.com/api/character').then(res => {
    return res.json();
})
.then(data =>{
    let someInformation = ''
    data['results'].forEach(obj =>{
        someInformation += `${[obj.name]},`
    })
    //console.log(savePoint)
    savePoint = someInformation.split(',')
    let represent = function (){
        for (let i = 0;i<personNameArray.length;i++){
            personNameArray[i].innerHTML = savePoint[i]
        }
    }
    represent()
})
let charactersSpecies = fetch('https://rickandmortyapi.com/api/character').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${[obj.species]},`
        })
        //console.log(savePoint)
        savePoint = someInformation.split(',')
        let represent = function (){
            for (let i = 0;i<cardSpeciesArray.length;i++){
                cardSpeciesArray[i].innerHTML = savePoint[i]
            }
        }
        represent()
    })
let charactersImages = fetch('https://rickandmortyapi.com/api/character').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${[obj.image]},`
        })
        console.log(savePoint)
        savePoint = someInformation.split(',')
        let represent = function (){
            for (let i = 0;i<cardImagesArray.length;i++){
                cardImagesArray[i].src = savePoint[i]
            }
        }
        represent()
    })
    const URLLocations = fetch('https://rickandmortyapi.com/api/location')
    const planetName = document.getElementsByClassName('tablet-text__name')
    const planetType = document.getElementsByClassName('tablet-text__type')
    let planetNameArray = [...planetName]
let planetTypeArray = [...planetType]
let locationsName = fetch('https://rickandmortyapi.com/api/location').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${[obj.name]},`
        })
        console.log(savePoint)
        savePoint = someInformation.split(',')
        let represent = function (){
            for (let i = 0;i<planetNameArray.length;i++){
                planetNameArray[i].innerHTML = savePoint[i]
            }
        }
        represent()
    })
let locationsType = fetch('https://rickandmortyapi.com/api/location').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${[obj.type]},`
        })
        console.log(savePoint)
        savePoint = someInformation.split(',')
        let represent = function (){
            for (let i = 0;i<planetTypeArray.length;i++){
                planetTypeArray[i].innerHTML = savePoint[i]
            }
        }
        represent()
    })
const URLEpisodes = fetch('https://rickandmortyapi.com/api/episode')
const seriesNames = document.getElementsByClassName('series-text__name')
const seriesDates = document.getElementsByClassName('series-text__date')
const seriesNumbers = document.getElementsByClassName('series-text__number')
let seriesNamesArray = [...seriesNames]
let seriesDatesArray = [...seriesDates]
let seriesNumbersArray = [...seriesNumbers]

let episodesNames = fetch('https://rickandmortyapi.com/api/episode').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${[obj.name]},`
        })
        console.log(savePoint)
        savePoint = someInformation.split(',')
        let represent = function (){
            for (let i = 0;i<seriesNamesArray.length;i++){
                seriesNamesArray[i].innerHTML = savePoint[i]
            }
        }
        represent()
    })
let episodesDates = fetch('https://rickandmortyapi.com/api/episode').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${obj.air_date}.`
        })
        console.log(savePoint)
        savePoint = someInformation.split('.')
        let represent = function (){
            for (let i = 0;i<seriesDatesArray.length;i++){
                seriesDatesArray[i].innerHTML = savePoint[i]
            }
        }
        represent()
    })
let episodesNumbers = fetch('https://rickandmortyapi.com/api/episode').then(res => {
    return res.json();
})
    .then(data =>{
        let someInformation = ''
        data['results'].forEach(obj =>{
            someInformation += `${obj.episode},`
        })
        console.log(savePoint)
        savePoint = someInformation.split(',')
        let represent = function (){
            for (let i = 0;i<seriesNumbersArray.length;i++){
                seriesNumbersArray[i].innerHTML = savePoint[i]
            }
        }
        represent()
    })
const episodesNameSearch = document.getElementById('episodesNameFilter').value
console.log(episodesNameSearch)
const searchValue = document.getElementById('episodesNameFilter')
const searchButton = document.getElementById('searchEpisodes')
let searchResultsHolder = []
/*searchButton.addEventListener('click', function() {
    let searchValueHolder = searchValue.value
    let episodesFilter = fetch('https://rickandmortyapi.com/api/character?=name').then((res) => {
        return res.json();
    })
        .then(data => {
            let someInformation = ''
            data.forEach(obj => {
                someInformation += `${obj.episode},`
            })
            console.log(savePoint)
            savePoint = someInformation.split(',')
            let represent = function () {
                for (let i = 0; i < seriesNumbersArray.length; i++) {
                    seriesNumbersArray[i].innerHTML = savePoint[i]
                }
            }
            represent()
        })
})

//console.log(cardArea)
//console.log(cardItemsArray)
//console.log(cardItemsObj)
//console.log(personNameArray)
//console.log(cardItemsArray[3])*/