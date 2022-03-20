var cinza = document.querySelectorAll(".cinza")
var dentro = document.querySelectorAll(".dentro")
var menu = document.querySelector("#menu")
var menus = document.querySelectorAll(".menu")
var menu_texto = document.querySelector("#menu_texto")
var categorias = document.querySelector("#categorias")
var css = document.querySelector("#css")
var javascript = document.querySelector("#javascript")

if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    css.setAttribute("src", "index_mobile.css")
    javascript.setAttribute("src", "index_mobile.js")
}
else {
    css.setAttribute("src", "index.css")
    javascript.setAttribute("src", "index.js")
}
    


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

dentro[0].addEventListener("mouseover", function(){
    cinza[0].setAttribute("style", "height: 550px; width: 400px; opacity: 1")
    dentro[0].setAttribute("style", "height: 100px; width: 350px; opacity: 1; background-image: linear-gradient(to left, transparent, white);")
})

dentro[0].addEventListener("mouseout", function(){
    dentro[0].setAttribute("style", "height: 80px; width: 300px; opacity: 0")
    cinza[0].setAttribute("style", "height: 500px; width: 350px; opacity: 1; background-image: linear-gradient(to left, transparent, transparent);")
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
})

categorias.addEventListener("mouseout", function(){
    menus[2].setAttribute("style", "opacity: 0")
    menus[3].setAttribute("style", "opacity: 0")
    menus[4].setAttribute("style", "opacity: 0")
    categorias.setAttribute("style", "opacity: 0")
})



