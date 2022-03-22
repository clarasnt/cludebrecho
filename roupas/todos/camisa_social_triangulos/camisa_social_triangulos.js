window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = "camisa_social_triangulos_mobile.html"
    } else {

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
                    setTimeout(() => {
                        produtos[9].setAttribute("style", 'opacity: 1')
                        setTimeout(() => {
                            produtos[10].setAttribute("style", 'opacity: 1')
                        }, 250);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);
}, 50);

produtos[0].addEventListener("mouseover", function(){
    produtos[0].setAttribute("style", "height: 219px; width: 651px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[0].addEventListener("mouseout", function(){
    produtos[0].setAttribute("style", "height: 209px; width: 611px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[2].addEventListener("mouseover", function(){
    produtos[2].setAttribute("style", "height: 105px; width: 405px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[1].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[2].addEventListener("mouseout", function(){
    produtos[2].setAttribute("style", "height: 85px; width: 385px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[1].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[4].addEventListener("mouseover", function(){
    produtos[4].setAttribute("style", "height: 105px; width: 405px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[3].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[4].addEventListener("mouseout", function(){
    produtos[4].setAttribute("style", "height: 85px; width: 385px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[3].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[6].addEventListener("mouseover", function(){
    produtos[6].setAttribute("style", "height: 434px; width: 460px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[5].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[6].addEventListener("mouseout", function(){
    produtos[6].setAttribute("style", "height: 424px; width: 450px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[5].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[8].addEventListener("mouseover", function(){
    produtos[8].setAttribute("style", "height: 105px; width: 405px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[7].setAttribute("style", "height: 570px; width: 450px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

produtos[8].addEventListener("mouseout", function(){
    produtos[8].setAttribute("style", "height: 85px; width: 385px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[7].setAttribute("style", "height: 550px; width: 430px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
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