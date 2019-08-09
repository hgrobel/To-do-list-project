var container = $('.container');
var button = $('.button');

button.on("click", appendList);

function appendList() {
  var list = $('.toDo').val();
  container.append (`
<ul><li><p class="name-card">${list}</p></li></ul>`);
  $(`.toDo`).val("");

}
