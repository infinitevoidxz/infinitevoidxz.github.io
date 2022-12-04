const navitem = document.getElementById("contactlink");

navitem.addEventListener("click", () => {
  alert("Email: danievdbergit@gmail.com");
});

const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let searchtxt = document.getElementById("searchtext").value;

  if (searchtxt.toLowerCase() == "anime") {
    window.location.replace("/anime.html");
  } else if (
    searchtxt.toLowerCase() == "gaming" ||
    searchtxt.toLowerCase() == "game development" ||
    searchtxt.toLowerCase() == "game dev"
  ) {
    window.location.replace("/gaming.html");
  } else if (searchtxt.toLowerCase() == "chess") {
    window.location.replace("/chess.html");
  }
});
