let category = document.querySelectorAll("#store .category li a")
let items = document.querySelectorAll("#store .itemList li");
let itemsA = document.querySelectorAll("#store .itemList li a");
let itemsArr = Array.from(items);
let input = document.querySelector(".inputBox input")

itemsArr.forEach(function(item){
    item.classList.add("on")
})

Array.from(itemsA).forEach(function(li){
    li.addEventListener("click",function(e){
        e.preventDefault();
    })
})

category.forEach(function(el){
    el.addEventListener("click",function(e){
        e.preventDefault();
        items.forEach(function(item){
            item.classList.remove("on")
        })
        let specific = itemsArr.filter(function(item){
            return item.dataset["category"].includes(el.parentElement.dataset["category"]);
        })
        specific.forEach(function(item){
            item.classList.add("on");
        })
    })
})

input.onkeyup = function(){
    let value = input.value;
    category.forEach(function(el){
        items.forEach(function(item){
            item.classList.remove("on")
        })
        let specific = itemsArr.filter(function(item){
            return item.dataset["category"].includes(value);
        })
        specific.forEach(function(item){
            item.classList.add("on");
        })
    })
}