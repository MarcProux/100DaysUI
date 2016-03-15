function highlighted(item) {
    replaceClass();
    item.classList.add("highlight");
}

function replaceClass() {
    var items = document.getElementsByClassName("item");
    for (var i = 0; i < items.length; i++) {
        if (items[i].className.match(/(?:^|\s)highlight(?!\S)/g)) {
            items[i].className = items[i].className.replace(/(?:^|\s)highlight(?!\S)/g, '');
        }
    }
}
