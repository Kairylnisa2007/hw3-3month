const card = document.querySelector('#cards');
function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => {
        res?.slice(0, 400).forEach((item,i) => {
card.innerHTML +=`
<div class="card">
<h3 class"name">${item.userId}</h3>
<h2 id "text">${item.id}</h2>
<h1 class"title">${item.title}</h1>
<h4 class"text2">${item.completed}</h4>
</div>
    `;
});
});
}

 getData();
