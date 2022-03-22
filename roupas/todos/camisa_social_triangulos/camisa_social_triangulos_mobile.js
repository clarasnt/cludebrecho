window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var produtos = document.querySelectorAll(".produtos")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")
var categorias = document.querySelector("#categorias")
var div_roupas = document.querySelector("#div_roupas")
var div_clude = document.querySelector("#div_clude")

setTimeout(() => {
    produtos[0].setAttribute("style", 'opacity: 1')
    menu.setAttribute("style", 'opacity: 1')
    menu_texto.setAttribute("style", 'opacity: 1')
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

clicado_menu = 0
clicado_produto0 = 0
clicado_produto1 = 0
clicado_produto3 = 0
clicado_produto5 = 0
clicado_produto7 = 0

produtos[0].addEventListener("click", function(){
    if (clicado_produto1 == 1 || clicado_produto3 == 1 || clicado_produto5 == 1 || clicado_produto7 == 1){
        produtos[2].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[4].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[6].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[8].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_produto1 = 0
        clicado_produto3 = 0
        clicado_produto5 = 0
        clicado_produto7 = 0
    }
    if (clicado_produto0 == 0){
        produtos[0].setAttribute("style", "opacity: 1; height: 360px; width: 940px; background-image: linear-gradient(to left, transparent, white);")
        clicado_produto0 = 1
    } else {
        window.location.href = "camisa_social_triangulos_mobile.html"
        clicado_produto0 = 0
    }
})

produtos[1].addEventListener("click", function(){
    if (clicado_produto0 == 1 || clicado_produto3 == 1 || clicado_produto5 == 1 || clicado_produto7 == 1){
        produtos[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[4].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[6].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[8].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_produto0 = 0
        clicado_produto3 = 0
        clicado_produto5 = 0
        clicado_produto7 = 0
    }
    if (clicado_produto1 == 0){
        produtos[2].setAttribute("style", "opacity: 1; height: 250px; width: 800px; background-image: linear-gradient(to left, transparent, white); z-index: 2")
        clicado_produto1 = 1
    } else {
        produtos[2].setAttribute("style", "opacity: 0; height: 240px; width: 760px; background-image: linear-gradient(to left, transparent, transparent); z-index: 1")
        clicado_produto1 = 0
    }
})

produtos[2].addEventListener("click", function(){
    window.open("https://shopee.com.br/product/280073789/17624997135/", "_blank")
})

produtos[3].addEventListener("click", function(){
    if (clicado_produto0 == 1 || clicado_produto1 == 1 || clicado_produto5 == 1 || clicado_produto7 == 1){
        produtos[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[2].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[6].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[8].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_produto0 = 0
        clicado_produto1 = 0
        clicado_produto5 = 0
        clicado_produto7 = 0
    }
    if (clicado_produto3 == 0){
        produtos[4].setAttribute("style", "opacity: 1; height: 250px; width: 800px; background-image: linear-gradient(to left, transparent, white); z-index: 2")
        clicado_produto3 = 1
    } else {
        produtos[4].setAttribute("style", "opacity: 0; height: 240px; width: 760px; background-image: linear-gradient(to left, transparent, transparent); z-index: 1")
        clicado_produto3 = 0
    }
})

produtos[5].addEventListener("click", function(){
    if (clicado_produto0 == 1 || clicado_produto1 == 1 || clicado_produto3 == 1 || clicado_produto7 == 1){
        produtos[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[2].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[4].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[8].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_produto0 = 0
        clicado_produto1 = 0
        clicado_produto3 = 0
        clicado_produto7 = 0
    }
    if (clicado_produto5 == 0){
        produtos[6].setAttribute("style", "opacity: 1; height: 650px; width: 800px; background-image: linear-gradient(to left, transparent, white); z-index: 2")
        clicado_produto5 = 1
    } else {
        produtos[6].setAttribute("style", "opacity: 0; height: 640px; width: 760px; background-image: linear-gradient(to left, transparent, transparent); z-index: 1")
        clicado_produto5 = 0
    }
})

produtos[7].addEventListener("click", function(){
    if (clicado_produto0 == 1 || clicado_produto1 == 1 || clicado_produto3 == 1 || clicado_produto5 == 1){
        produtos[0].setAttribute("style", "opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[2].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[4].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        produtos[6].setAttribute("style", "opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
        clicado_produto0 = 0
        clicado_produto1 = 0
        clicado_produto3 = 0
        clicado_produto5 = 0
    }
    if (clicado_produto7 == 0){
        produtos[8].setAttribute("style", "opacity: 1; height: 250px; width: 800px; background-image: linear-gradient(to left, transparent, white); z-index: 2")
        clicado_produto7 = 1
    } else {
        produtos[8].setAttribute("style", "opacity: 0; height: 240px; width: 760px; background-image: linear-gradient(to left, transparent, transparent); z-index: 1")
        clicado_produto7 = 0
    }
})

produtos[8].addEventListener("click", function(){
    window.open("https://shopee.com.br/product/280073789/17624997135/", "_blank")
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
    window.location.href = "../../../index.html"
})

div_roupas.addEventListener("click", function(){
    window.location.href = "../../roupas.html"
})

    }else{
        window.location.href = "camisa_social_triangulos.html"
    }
}