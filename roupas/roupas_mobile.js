window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var categorias = document.querySelectorAll(".categorias")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")
var div_roupas = document.querySelector("#div_roupas")
var div_clude = document.querySelector("#div_clude")

setTimeout(() => {
    categorias[0].setAttribute("style", 'opacity: 1')
    menu.setAttribute("style", 'opacity: 1')
    menu_texto.setAttribute("style", 'opacity: 1')
    setTimeout(() => {
        categorias[1].setAttribute("style", 'opacity: 1')
        setTimeout(() => {
            categorias[2].setAttribute("style", 'opacity: 1')
            setTimeout(() => {
                categorias[3].setAttribute("style", 'opacity: 1')
            }, 250);
        }, 250);
    }, 250);
}, 50);

var clicado_menu = 0
var clicado_categoria0 = 0
var clicado_categoria1 = 0
var clicado_categoria2 = 0
var clicado_categoria3 = 0

categorias[0].addEventListener("click", function(){
    if (clicado_categoria1 == 1 || clicado_categoria2 == 1 || clicado_categoria3 == 1){
        categorias[1].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_categoria1 = 0
        clicado_categoria2 = 0
        clicado_categoria3 = 0
    }
    if (clicado_categoria0 == 0){
        categorias[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado_categoria0 = 1
    } else {
        window.location.href = "roupas.html"
        clicado_categoria0 = 0
    }
})

categorias[1].addEventListener("click", function(){
    if (clicado_categoria0 == 1 || clicado_categoria2 == 1 || clicado_categoria3 == 1){
        categorias[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_categoria0 = 0
        clicado_categoria2 = 0
        clicado_categoria3 = 0
    }
    if (clicado_categoria1 == 0){
        categorias[1].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado_categoria1 = 1
    } else {
        window.location.href = "todos/todos.html"
        clicado_categoria1 = 0
    }
})

categorias[2].addEventListener("click", function(){
    if (clicado_categoria0 == 1 || clicado_categoria1 == 1 || clicado_categoria3 == 1){
        categorias[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[1].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_categoria0 = 0
        clicado_categoria1 = 0
        clicado_categoria3 = 0
    }
    if (clicado_categoria2 == 0){
        categorias[2].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado_categoria2 = 1
    } else {
        window.location.href = "todos/todos.html"
        clicado_categoria2 = 0
    }
})

categorias[3].addEventListener("click", function(){
    if (clicado_categoria0 == 1 || clicado_categoria1 == 1 || clicado_categoria2 == 1){
        categorias[1].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[2].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        categorias[3].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_categoria0 = 0
        clicado_categoria1 = 0
        clicado_categoria2 = 0
    }
    if (clicado_categoria3 == 0){
        categorias[3].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clicado_categoria3 = 1
    } else {
        window.location.href = "todos/todos.html"
        clicado_categoria3 = 0
    }
})

menu.addEventListener("click", function(){
    if (clicado_menu == 0){
        menus[0].setAttribute("style", "opacity: 1")
        menus[1].setAttribute("style", "opacity: 1")
        div_roupas.setAttribute("style", "opacity:1")
        div_clude.setAttribute("style", "opacity:1")
        menu_texto.setAttribute("style", "opacity: 0; top: 200px")
        clicado_menu = 1
    } else if (clicado_menu == 1){
        menus[0].setAttribute("style", "opacity: 0")
        menus[1].setAttribute("style", "opacity: 0")
        div_roupas.setAttribute("style", "opacity:0")
        div_clude.setAttribute("style", "opacity:0")
        menu_texto.setAttribute("style", "opacity: 1; top: 10px")
        clicado_menu = 0
    }
})

div_clude.addEventListener("click", function(){
    window.location.href = "../index.html"
})

div_roupas.addEventListener("click", function(){
    window.location.href = "roupas.html"
})
    }else {
        window.location.href = "roupas.html"
    }
}