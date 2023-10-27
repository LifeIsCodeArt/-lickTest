const episodesNameSearch = document.getElementById('episodesNameFilter')
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