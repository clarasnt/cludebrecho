window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var categorias = document.querySelectorAll(".categorias")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")

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
                setTimeout(() => {
                    categorias[4].setAttribute("style", 'opacity: 1')
                }, 250);
            }, 250);
        }, 250);
    }, 250);
}, 50);

categorias[0].addEventListener("click", function(){
    categorias[0].setAttribute("style", "height: 123px; width: 769px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    categorias[0].addEventListener("click", function(){
        window.location.href = "roupas.html"
    })
})

categorias[0].addEventListener("mouseout", function(){
    categorias[0].setAttribute("style", "height: 103px; width: 649px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

categorias[1].addEventListener("click", function(){
    categorias[1].setAttribute("style", "height: 180px; width: 488px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    categorias[1].addEventListener("click", function(){
        window.location.href = "todos/todos.html"
    })
})

categorias[1].addEventListener("mouseout", function(){
    categorias[1].setAttribute("style", "height: 160px; width: 428px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

categorias[2].addEventListener("click", function(){
    categorias[2].setAttribute("style", "height: 121px; width: 428px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

categorias[2].addEventListener("mouseout", function(){
    categorias[2].setAttribute("style", "height: 101px; width: 368px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

categorias[3].addEventListener("click", function(){
    categorias[3].setAttribute("style", "height: 127px; width: 598px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

categorias[3].addEventListener("mouseout", function(){
    categorias[3].setAttribute("style", "height: 112px; width: 538px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
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
    window.location.href = "../index.html"
})

menus[1].addEventListener("click", function(){
    menus[2].setAttribute("style", "opacity: 1")
    menus[3].setAttribute("style", "opacity: 1")
    menus[4].setAttribute("style", "opacity: 1")
    categorias.setAttribute("style", "opacity: 1")
    menus[1].addEventListener("click", function(){
        window.location.href = "roupas.html"
    })
    menus[2].addEventListener("click", function(){
        window.location.href = "todos/todos.html"
    })
})

menus[1].addEventListener("mouseout", function(){
    menus[2].setAttribute("style", "opacity: 0")
    menus[3].setAttribute("style", "opacity: 0")
    menus[4].setAttribute("style", "opacity: 0")
    categorias.setAttribute("style", "opacity: 0")
})
    }else {
        window.location.href = "roupas.html"
    }
}