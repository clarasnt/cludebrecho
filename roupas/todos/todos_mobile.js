window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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

produtos[0].addEventListener("click", function(){
    produtos[0].setAttribute("style", "height: 170px; width: 468px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[0].addEventListener("click", function(){
        window.location.href = "todos_mobile.html"
    })
})

produtos[0].addEventListener("mouseout", function(){
    produtos[0].setAttribute("style", "height: 160px; width: 428px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[2].addEventListener("click", function(){
    produtos[1].setAttribute("style", "height: 460px; width: 370px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[2].setAttribute("style", "height: 270px; width: 340px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[2].addEventListener("click", function(){
        window.location.href = "camisa_social_triangulos/camisa_social_triangulos.html"
    })
})

produtos[2].addEventListener("mouseout", function(){
    produtos[1].setAttribute("style", "height: 400px; width: 320px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[2].setAttribute("style", "height: 250px; width: 270px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
})

produtos[4].addEventListener("click", function(){
    produtos[3].setAttribute("style", "height: 460px; width: 370px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[4].setAttribute("style", "height: 270px; width: 300px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
    produtos[4].addEventListener("click", function(){
        window.location.href = "corset_flor_tribal/corset_flor_tribal.html"
    })
})

produtos[4].addEventListener("mouseout", function(){
    produtos[3].setAttribute("style", "height: 400px; width: 320px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
    produtos[4].setAttribute("style", "height: 250px; width: 270px; opacity: 0; background-image: linear-gradient(to left, transparent, transparent);")
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
    window.location.href = "../../index_mobile.html"
})

menus[1].addEventListener("click", function(){
    menus[2].setAttribute("style", "opacity: 1")
    menus[3].setAttribute("style", "opacity: 1")
    menus[4].setAttribute("style", "opacity: 1")
    categorias.setAttribute("style", "opacity: 1")
    menus[1].addEventListener("click", function(){
        window.location.href = "../roupas_mobile.html"
    })
    menus[2].addEventListener("click", function(){
        window.location.href = "todos_mobile.html"
    })
})

menus[1].addEventListener("mouseout", function(){
    menus[2].setAttribute("style", "opacity: 0")
    menus[3].setAttribute("style", "opacity: 0")
    menus[4].setAttribute("style", "opacity: 0")
    categorias.setAttribute("style", "opacity: 0")
})
    } else {
        window.location.href = "todos.html"
    }
}