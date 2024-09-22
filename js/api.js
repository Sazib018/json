fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=> res.json())
.then(data => {photos(data)})

function photos(showphotos) {
    const photoContainer = document.getElementById('photo-container')
    for (const element of showphotos) {
        const div = document.createElement('div')
        div.innerHTML = `
        <img src="${element.thumbnailUrl}" alt="description of image">
        `

        photoContainer.appendChild(div)
        
        
    }
}