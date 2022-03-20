window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var cinza = document.querySelectorAll(".cinza")
var dentro = document.querySelectorAll(".dentro")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")
var clique = document.querySelector("#clique")
var div_roupas = document.querySelector("#div_roupas")
var div_clude = document.querySelector("#div_clude")

setTimeout(() => {
    cinza[0].setAttribute("style", 'opacity: 1')
    clique.setAttribute("style", "opacity:1")
    setTimeout(() => {
        cinza[1].setAttribute("style", 'opacity: 1')
        setTimeout(() => {
            cinza[2].setAttribute("style", 'opacity: 1')
            setTimeout(() => {
                cinza[3].setAttribute("style", 'opacity: 1')
                setTimeout(() => {
                    cinza[4].setAttribute("style", 'opacity: 1')
                    setTimeout(() => {
                        menu.setAttribute("style", 'opacity: 1')
                        menu_texto.setAttribute("style", 'opacity: 1')
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);
}, 50);

var clicado_c = 0
var clicado_menu = 0

cinza[0].addEventListener("click", function(){
    if(clicado_c == 0){
        dentro[0].setAttribute("style", "height: 200px; width: 700px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clique.setAttribute("style", "opacity:0")
        clicado_c = 1
    } else if (clicado_c == 1){
        clique.setAttribute("style", "opacity:1")
        dentro[0].setAttribute("style", "height: 80px; width: 300px; opacity: 0")
        clicado_c = 0
    }
})

clique.addEventListener("click", function(){
    if(clicado_c == 0){
        dentro[0].setAttribute("style", "height: 200px; width: 700px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
        clique.setAttribute("style", "opacity:0")
        clicado_c = 1
    } else if (clicado_c == 1){
        clique.setAttribute("style", "opacity:1")
        dentro[0].setAttribute("style", "height: 80px; width: 300px; opacity: 0")
        clicado_c = 0
    }
})

dentro[0].addEventListener("click", function(){
    window.location.href = "roupas/roupas.html"
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
    window.location.href = "index.html"
})

div_roupas.addEventListener("click", function(){
    window.location.href = "roupas/roupas.html"
})
    } else {
        window.location.href = "index.html"
    }
}

