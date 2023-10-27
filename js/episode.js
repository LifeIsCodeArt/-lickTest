const renderEpisodes = document.querySelector('#mainTablet')
const previousButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')
const nameSearch = document.querySelector('#episodesNameFilter')
const pagination = document.querySelector('#pagination')

let tabletArray = []
let episodes = []
let page = 1
let info = ''


const setEpisodeId = (id) => {
    localStorage.setItem("episodeId", id);
    console.log('testId: ', id)
}

const episodeItem = (data) => {
    return `<div onclick="setEpisodeId(${data.id})" class="col-3 mb-3">
                 <a class="link-to-episode" href="../pages/episode-details.html">
                    <div class="tablet series">
                        <div class="series-text">
                            <div class="series-text__name" title="${data.name}">
                                ${data.name}
                            </div>
                            <div class="series-text__date">
                                ${data.air_date}
                            </div>
                            <div class="series-text__number">
                                ${data.episode}
                            </div>
                        </div>
                    </div>
                   </a>
            </div>`
}
const paginationItem = (page) =>{
    return ` <li class="pagination-item" onclick="getEpisodes(${page})">
                <a href="#" class="pagination-page">${page}</a>
             </li>`
}

nameSearch.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        getEpisodes(1, nameSearch.value)
    }
})

// renderEpisodes.addEventListener('click',e => {
//     console.log(e.target['id'])
//     episodeId = e.target['id']
//     console.log(episodeId)
//     localStorage.setItem("test", e.target['id']);
// })
let getEpisodes = (page, search) => {
    renderEpisodes.innerHTML = ''
    console.log(search)
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}&name=${search}`).then(res => {
        return res.json();
    })
        .then(data => {
            tabletArray = []
            info = data['info']
            episodes = data['results']

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
            episodes.forEach(item => {
                renderEpisodes.innerHTML += episodeItem(item)
                tabletArray.push(episodeItem(item))
            })
        })

}

getEpisodes(page, nameSearch.value)


previousButton.addEventListener('click', function () {
    if (info['prev']) {
        page--
        getEpisodes(page, nameSearch.value)
        console.log(info['prev'])
        nextButton.classList.remove('disabled')
    }

})
nextButton.addEventListener('click', function () {
    if (info['next']) {
        page++
        getEpisodes(page, nameSearch.value)
        console.log(info['next'])
        previousButton.classList.remove('disabled')
    }

})


