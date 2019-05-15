function loadList(restaurants) {
    restaurants.forEach(appendListItem);
}

function appendListItem(element) {
    let list = document.getElementById("mainList");
    let listItem = new PlaceElementWidget(element["name"], element["location"], element["score"], element["comment"]);
    list.appendChild(listItem);
}
