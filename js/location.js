const renderLocations = document.querySelector('#tabletArea')
const pagination = document.querySelector('#pagination')
const previousButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')
const nameSearch = document.querySelector('#locationsNameFilter')
const planetSearch = document.querySelector('#planetType')
const dimensionSearch = document.querySelector('#dimensionSearch')

let locations = []
let page = 1
let info = ''

const burger = document.querySelector('#burger')
const navigation = document.querySelector('#navigation')

burger.addEventListener('click', function (e) {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
})

const locationCardId = (id) => {
    localStorage.setItem("locationCardId", id);
    console.log('testId: ', id)
}
nameSearch.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        getLocations()
    }
})

const locationItem = (data) => {
    return `<div onclick="locationCardId(${data.id})" class="col-3 mb-3">
                <a class="link-to-location" href="../pages/location-details.html">    
                    <div class="tablet bio">
                        <div class="tablet-text">
                            <div class="tablet-text__name" title="${data.name}">
                                ${data.name}
                            </div>
                            <div class="tablet-text__type">
                                ${data.type}
                            </div>
                        </div>
                    </div>
                </a>    
            </div>`
}
const paginationItem = (page) =>{
    return ` <li class="pagination-item" onclick="getLocations(${page})">
                <a href="#" class="pagination-page">${page}</a>
             </li>`
}

let getLocations = (page) => {
    renderLocations.innerHTML = ''
    fetch(`https://rickandmortyapi.com/api/location?page=${page}&name=${nameSearch.value}&type=${planetSearch.value}&dimension=${dimensionSearch.value}`).then(res => {
        return res.json();
    })
        .then(data => {
            info = data['info']
            locations = data['results']
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
            locations.forEach(item => {
                renderLocations.innerHTML += locationItem(item)
            })
        })
}


getLocations(page)

previousButton.addEventListener('click', function () {
    if (info['prev']){
        page--
        getLocations(page)
        console.log(info['prev'])
        nextButton.classList.remove('disabled')
    }
})
nextButton.addEventListener('click', function () {
    if (info['next']){
        page++
        getLocations(page)
        console.log(info['next'])
        previousButton.classList.remove('disabled')
    }
})


