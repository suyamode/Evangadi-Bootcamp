let list = $("#list");
console.log(list);
list.append("<li class='blue'>Blue</li>");
list.prepend("<li class='blue'>Blue</li>");
$("#list li").even().css("background-color", "cadetblue");
list.append("<button>Submit</button>");
list.css({
  listStyle: "none",
  boxShadow: "2px 2px 2px black",
  width: "250px",
  margin: "10px auto",
});

$("ul button").on("click", bgChange);

function bgChange() {
  $("li").even().css({ backgroundColor: "tomato", color: "white" }).toggle();
}
