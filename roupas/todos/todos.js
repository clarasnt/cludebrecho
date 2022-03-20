window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "todos_mobile.html"
    } else {
var produtos = document.querySelectorAll(".produtos")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")

setTimeout(() => {
    produtos[0].setAttribute("style", 'opacity: 1')
    menu.setAttribute("style", 'opacity: 1')
    menu_texto.setAttribute("style", 'opacity: 1')
    setTimeout(() => {
        produtos[1].setAttribute("style", 'opacity: 1')
        setTimeout(() => {
            produtos[3].setAttribute("style", 'opacity: 1')
            
        }, 250);
    }, 250);
}, 50);

produtos[0].addEventListener("mouseover", function(){
    produtos[0].setAttribute("style", "height: 170px; width: 468px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[0].addEventListener("mouseout", function(){
    produtos[0].setAttribute("style", "height: 160px; width: 428px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[2].addEventListener("mouseover", function(){
    produtos[1].setAttribute("style", "height: 460px; width: 370px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[2].setAttribute("style", "height: 270px; width: 340px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[2].addEventListener("mouseout", function(){
    produtos[1].setAttribute("style", "height: 400px; width: 320px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[2].setAttribute("style", "height: 250px; width: 270px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[4].addEventListener("mouseover", function(){
    produtos[3].setAttribute("style", "height: 460px; width: 370px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[4].setAttribute("style", "height: 270px; width: 300px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[4].addEventListener("mouseout", function(){
    produtos[3].setAttribute("style", "height: 400px; width: 320px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[4].setAttribute("style", "height: 250px; width: 270px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
})

menu.addEventListener("mouseover", function(){
    menus[0].setAttribute("style", "opacity: 1")
    menus[1].setAttribute("style", "opacity: 1")
    menu_texto.setAttribute("style", "opacity: 0")
    menu.setAttribute("style", "height: 800px; top: 50px; right:10px; width: 200px; opacity: 1")
})

menu.addEventListener("mouseout", function(){
    menus[0].setAttribute("style", "opacity: 0")
    menus[1].setAttribute("style", "opacity: 0")
    menu_texto.setAttribute("style", "opacity: 1")
    menu.setAttribute("style", "height: 500px; top: 200px; width: 60px; opacity: 1")
})

menus[1].addEventListener("mouseover", function(){
    menus[2].setAttribute("style", "opacity: 1")
    menus[3].setAttribute("style", "opacity: 1")
    menus[4].setAttribute("style", "opacity: 1")
    categorias.setAttribute("style", "opacity: 1")
    categorias.addEventListener("mouseover", function(){
        menus[2].setAttribute("style", "opacity: 1")
        menus[3].setAttribute("style", "opacity: 1")
        menus[4].setAttribute("style", "opacity: 1")
        categorias.setAttribute("style", "opacity: 1")
    })
    categorias.addEventListener("mouseout", function(){
        menus[2].setAttribute("style", "opacity: 0")
        menus[3].setAttribute("style", "opacity: 0")
        menus[4].setAttribute("style", "opacity: 0")
        categorias.setAttribute("style", "opacity: 0")
    })
})

menus[1].addEventListener("mouseout", function(){
    menus[2].setAttribute("style", "opacity: 0")
    menus[3].setAttribute("style", "opacity: 0")
    menus[4].setAttribute("style", "opacity: 0")
    categorias.setAttribute("style", "opacity: 0")
})
    }}