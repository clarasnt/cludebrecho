

var produtos = document.querySelectorAll(".produtos")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")
var categorias = document.querySelector("#categorias")
var mouse = document.querySelector("#mouse")

setTimeout(() => {
    produtos[0].setAttribute("style", 'opacity: 1')
    menu.setAttribute("style", 'opacity: 1')
    menu_texto.setAttribute("style", 'opacity: 1')
    mouse.setAttribute("style", 'opacity: 1')
    setTimeout(() => {
        produtos[1].setAttribute("style", 'opacity: 1')
        setTimeout(() => {
            produtos[3].setAttribute("style", 'opacity: 1')
            setTimeout(() => {
                produtos[5].setAttribute("style", 'opacity: 1')
                setTimeout(() => {
                    produtos[7].setAttribute("style", 'opacity: 1')
                }, 250);
            }, 250);
        }, 250);
    }, 250);
}, 50);

produtos[0].addEventListener("mouseover", function(){
    produtos[0].setAttribute("style", "font-size: 120px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[0].addEventListener("mouseout", function(){
    produtos[0].setAttribute("style", "font-size: 100px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[2].addEventListener("mouseover", function(){
    produtos[2].setAttribute("style", "font-size: 80px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[1].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[2].addEventListener("mouseout", function(){
    produtos[2].setAttribute("style", "font-size: 60px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[1].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[4].addEventListener("mouseover", function(){
    produtos[4].setAttribute("style", "font-size: 80px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[3].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[4].addEventListener("mouseout", function(){
    produtos[4].setAttribute("style", "font-size: 60px: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[3].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[6].addEventListener("mouseover", function(){
    produtos[6].setAttribute("style", "font-size: 40px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[5].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[6].addEventListener("mouseout", function(){
    produtos[6].setAttribute("style", "font-size: 25px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[5].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[8].addEventListener("mouseover", function(){
    produtos[8].setAttribute("style", "font-size: 80px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[7].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[8].addEventListener("mouseout", function(){
    produtos[8].setAttribute("style", "font-size: 60px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[7].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

menu.addEventListener("mouseover", function(){
    menus[0].setAttribute("style", "opacity: 1")
    menus[1].setAttribute("style", "opacity: 1")
    menu_texto.setAttribute("style", "opacity: 0; z-index:-1")
})

menu.addEventListener("mouseout", function(){
    menus[0].setAttribute("style", "opacity: 0")
    menus[1].setAttribute("style", "opacity: 0")
    menu_texto.setAttribute("style", "opacity: 1; z-index:0")
})
