const todo = document.getElementById("todo-app");
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((res) => {
        res?.slice(0, 50).forEach((item,i) => {
todo.innerHTML +=`
<div class ="todo-app">
<h2>To-Do List<img src="/photo/636153.png"></h2>
<div class="row">
 <input type="text" id="input-box" placeholder="Введите текст">
 <button>Add</button>
</div>
<ul id="list-container">
</ul>
</div>
`;
});
});
}
 getData();
