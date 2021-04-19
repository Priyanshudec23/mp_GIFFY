var api_key = "W5Y6Jyh7Ju0wPhQ9Vw0ahIAvHIb7uKjv";
var search = document.getElementById("searchbarr");
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  search_gifs();
});
function search_gifs() {
  var url_2 = `https://api.giphy.com/v1/gifs/search?q=${search.value}&api_key=${api_key}`;
  console.log(search.value);
  fetch(url_2)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      add_search(data.data);
    });
}
function add_search(data) {
    if (data.length > 0) {
      var search_gifs = document.getElementById("search_gifs");
      var gifs = document.getElementById("gifs_searched");
      data.forEach((gif) => {
        gifs.innerHTML += `<div class='gif'>
                      <img src=${gif.images.original.url}/>  
                  </div>`;
      });
      search_gifs.style.visibility = "visible";
    }
  };