var foldBtns = document.getElementsByClassName("fold-button");

for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function(event) {
        console.log("you clicked ", event.target);
        var post = event.target.parentElement;
        if (post.classList.contains("folded")) {
            post.classList.remove("folded");
            event.target.innerHTML = "свернуть";
        } else {
            post.classList.add("folded");
            event.target.innerHTML = "развернуть";
        }
    });
}
