//Business (or back-end) logic:
let favoriteItems = [];
let specificFavoriteItems = [];

// Everything below this line is user interface (or front-end) logic
$('form#form').submit(function(event) {
  event.preventDefault();
  if (favoriteItems.length !== 0) {
    //empty array if we already submitted
    favoriteItems.length = 0;
    specificFavoriteItems.length = 0;
    // empty ul if we already submitted
    $('div.initially-hidden ul').empty();
  }
  // for loop to create favoriteItems array
  for (let i = 1; i < 6; i++) {
    let favoriteItem = $('input#item' + [i]).val();
    favoriteItems.push(favoriteItem);
  }
  // for loop to create specificFavoriteItems array
  for (let i = 1; i < 4; i++) {
    console.log('specific favorite item: ' + favoriteItems[i]);
    specificFavoriteItems.push(favoriteItems[i]);
  }
  // for loop to append list items to div.initially-hidden ul
  for (let i = 0; i < specificFavoriteItems.length; i++) {
    let listItem = $('<li></li>').text('' + specificFavoriteItems[i] + '');
    $('div.initially-hidden ul').append(listItem);
  }
  $('div.initially-hidden').slideDown();
  console.log(favoriteItems);
  console.log(specificFavoriteItems);
});
