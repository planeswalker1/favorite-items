//Business (or back-end) logic:
let favoriteItems = [];

// Everything below this line is user interface (or front-end) logic
$('form#form').submit(function(event) {
  event.preventDefault();
  // for loop to create favoriteItems array
  for (let i = 1; i < 6; i++) {
    let favoriteItem = $('input#item' + [i]).val();
    favoriteItems.push(favoriteItem);
  }

  console.log(favoriteItems);
});
