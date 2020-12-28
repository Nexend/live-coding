// option 1
// const items = document.querySelectorAll('.list-item');

// function handleItemClick() {
//   console.log(this);
// }

// items.forEach(item => item.addEventListener('click', handleItemClick));

// option 2
const list = document.querySelector('.list');
list.addEventListener('click', handleListClick);

function handleListClick(event) {
  if (event.target.className !== 'list-item') {
    return;
  }
  console.log(event.target.textContent);
}

// WEB FLOW!!!!!
// 1. get data from server ==> [{...}, {...}, {...} ...]
// 2. render (!!!!)
// 3. handle event - UPDATE [{...}, {...}, {...} ...], dont touch DOM
// 4. re render

// algo
// 1. find task in array
// 2. update done field
// 3. call render
function handleListClick(event) {
  // TODO
}
