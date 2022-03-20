window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var cinza = document.querySelectorAll(".cinza")
var dentro = document.querySelectorAll(".dentro")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")
var categorias = document.querySelector("#categorias")

setTimeout(() => {
    cinza[0].setAttribute("style", 'opacity: 1')
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

cinza[0].addEventListener("click", function(){
    cinza[0].setAttribute("style", "height: 550px; width: 400px; opacity: 1")
    dentro[0].setAttribute("style", "height: 100px; width: 350px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    cinza[0].addEventListener("click", function(){
        window.location.href = "roupas/roupas.html"
    })
})

cinza[0].addEventListener("mouseout", function(){
    dentro[0].setAttribute("style", "height: 80px; width: 300px; opacity: 0")
    cinza[0].setAttribute("style", "height: 500px; width: 350px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

dentro[0].addEventListener("click", function(){
    cinza[0].setAttribute("style", "height: 550px; width: 400px; opacity: 1")
    dentro[0].setAttribute("style", "height: 100px; width: 350px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    dentro[0].addEventListener("click", function(){
        window.location.href = "roupas/roupas.html"
    })
})

dentro[0].addEventListener("mouseout", function(){
    dentro[0].setAttribute("style", "height: 80px; width: 300px; opacity: 0")
    cinza[0].setAttribute("style", "height: 500px; width: 350px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

menu.addEventListener("click", function(){
    menus[0].setAttribute("style", "opacity: 1")
    menus[1].setAttribute("style", "opacity: 1")
    menu_texto.setAttribute("style", "opacity: 0")
    menu.setAttribute("style", "height: 800px; top: 0px; right:0px; width: 200px; opacity: 1")
})

menu.addEventListener("mouseout", function(){
    menus[0].setAttribute("style", "opacity: 0")
    menus[1].setAttribute("style", "opacity: 0")
    menu_texto.setAttribute("style", "opacity: 1")
    menu.setAttribute("style", "height: 500px; top: 0px; right:0px; width: 100px; opacity: 1")
})

menus[0].addEventListener("click", function(){
    window.location.href = "index.html"
})

menus[1].addEventListener("click", function(){
    menus[2].setAttribute("style", "opacity: 1")
    menus[3].setAttribute("style", "opacity: 1")
    menus[4].setAttribute("style", "opacity: 1")
    categorias.setAttribute("style", "opacity: 1")
    menus[1].addEventListener("click", function(){
        window.location.href = "roupas/roupas.html"
    })
    menus[2].addEventListener("click", function(){
        window.location.href = "roupas/todos/todos.html"
    })
})

menus[1].addEventListener("mouseout", function(){
    menus[2].setAttribute("style", "opacity: 0")
    menus[3].setAttribute("style", "opacity: 0")
    menus[4].setAttribute("style", "opacity: 0")
    categorias.setAttribute("style", "opacity: 0")
})
    } else {
        window.location.href = "index.html"
    }
}

