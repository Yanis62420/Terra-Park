
//Slide
let slide_one = document.getElementById('one')
let slide_two = document.getElementById('two')
let slide_three = document.getElementById('three')
let slide_four = document.getElementById('four')
let slide_five = document.getElementById('five')

//Btn
let btn_prev = document.getElementById('btn-prev')
btn_prev.addEventListener('click', function(){

    stock--
    slide(stock)
})


let btn_suiv = document.getElementById('btn-suiv')
btn_suiv.addEventListener('click', function(){
    stock++
    slide(stock)
})


var stock = 0

function slide(recup) {

    if (recup == 0) {
        slide_one.classList.add("active")
        slide_two.classList.remove("active")
        slide_three.classList.remove("active")
        slide_four.classList.remove("active")
        slide_five.classList.remove("active")
    } else if (recup == 1) {
        slide_one.classList.remove("active")
        slide_two.classList.add("active")
        slide_three.classList.remove("active")
        slide_four.classList.remove("active")
        slide_five.classList.remove("active")

    } else if (recup == 2) {
        slide_one.classList.remove("active")
        slide_two.classList.remove("active")
        slide_three.classList.add("active")
        slide_four.classList.remove("active")
        slide_five.classList.remove("active")
    }else if (recup == 3) {
        slide_one.classList.remove("active")
        slide_two.classList.remove("active")
        slide_three.classList.remove("active")
        slide_four.classList.add("active")
        slide_five.classList.remove("active")
    }else if (recup == 4) {
        slide_one.classList.remove("active")
        slide_two.classList.remove("active")
        slide_three.classList.remove("active")
        slide_four.classList.remove("active")
        slide_five.classList.add("active")
    }else if ( recup > 4){
        slide_one.classList.add("active")
        slide_two.classList.remove("active")
        slide_three.classList.remove("active")
        slide_four.classList.remove("active")
        slide_five.classList.remove("active")
        stock = 0
    }
}
