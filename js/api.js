// photo

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => { photos(data) })

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

// user

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userName(json))

function userName(information) {
    const ul = document.getElementById('list');

    for (const element of information) {

        const li = document.createElement('li');
        li.innerText = element.name
        ul.appendChild(li)

    }
}


// comment

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(a => a.json())
    .then(json => commetC(json))

function commetC(add) {

    const ul = document.getElementById('comment-Container');

    for (const element of add) {
        const li = document.createElement('li');
        li.innerText = element.name
        ul.appendChild(li)

    }

}

// post 

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(jes => jes.json())
    .then(data => postC(data))

function postC(posted) {
    const ul = document.getElementById('post-container');

    for (const element of posted) {
        const li = document.createElement('li');
        li.innerText = element.body
        ul.appendChild(li)
    }
}

// album

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(jes => jes.json())
    .then(album => albumC(album))

function albumC(albumS) {
    const ul = document.getElementById('album-container');

    for (const element of albumS) {
        const li = document.createElement('li');
        li.innerText = element.title
        ul.appendChild(li)
    }
}

// todos 

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(jes => jes.json())
    .then(data => todosC(data))

function todosC(todos) {
    const ul = document.getElementById('todos-container');

    for (const element of todos) {
        const li = document.createElement('li');
        li.innerText = element.title
        ul.appendChild(li)
    }
}



