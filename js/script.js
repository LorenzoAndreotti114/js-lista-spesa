let shopList = [];
console.log(shopList, typeof shopList);


// LIST IN PAGE
let x=0

while (x <= shopList.length - 1) {
    document.getElementById("list").innerHTML += `<li> ${shopList[x]} </li>`
    x++
}

// UNDO BUTTON
let undo = document.getElementById("undoBtn");
undo.addEventListener("click", function () {

    location.reload ();

});

// SEND BUTTON
let send = document.getElementById("sendBtn");
send.addEventListener("click", function () {

    console.log("ciaoo");

    let newItem = document.getElementById("insertItem");
    let currentItem = newItem.value;
    console.log(currentItem);

    shopList.push (currentItem)

    console.log(shopList);

    while (x <= shopList.length - 1) {
        document.getElementById("list").innerHTML += `<li> ${shopList[x]} </li>`
        x++
    }
    
});


