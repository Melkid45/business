
$(".burger").on("click", function (e) {
    $(".header").hasClass("active")
        ? ($(".header").removeClass("active"), $("body").removeClass("hidden"))
        : ($(".header").addClass("active"), $("body").addClass("hidden"));
})


$('.menu').on('click', function(e){
    $('.menu__items').toggleClass('active')
    $('.menu .plus').toggleClass('active')
    })
    $(window).on("load resize", function (e) {
    if ($(window).width() <= 750) {
        $(".footer").removeClass("abs")
    }
});



let col = 0;
$(".contact__body-item-form-btn").on("click", function (e) {
    $(".input").each(function (e) {
    0 == $(this).val().length
        ? $(this).addClass("error")
        : (col++, $(this).removeClass("error"));
    }),
    3 == col &&
        ($(this).attr("type", "submit"), (window.location.href = "good.html"));
}),
    $(window).on("scroll", function (e) {
    $(window).scrollTop() >= 200
        ? $(".menu").addClass("active")
        : $(".menu").removeClass("active");
})





document.querySelectorAll(".online__body-block-items-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.online__body-block-items-item-desc');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.online__body-block-items-item-desc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.online__body-block-items-item').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.online__body-block-items-item-desc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.online__body-block-items-item').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})
document.querySelectorAll(".ofline__body-block-items-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.ofline__body-block-items-item-desc');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.ofline__body-block-items-item-desc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.ofline__body-block-items-item').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.ofline__body-block-items-item-desc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.ofline__body-block-items-item').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})

var splide = new Splide( '.splide', {
    pagination: false
} );

splide.mount();