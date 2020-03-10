$( document ).ready(function() {

});

$(window).on('scroll', function() {

});

/** ======================== User actions ========================== **/
// scrool top
$('.footer .banner__further span,.footer .further__arrow').on('click', function(e) {
    e.preventDefault();
    $('body, html').animate({ 
        scrollTop: 0,
    }, 300, 'swing');
})
// open menu
// $('.header__menu_open').on('click', function() {
//     $('.header__top').addClass('orange');
//     $('.header__menu').addClass('active');
//     if ($(window).width() < 1200) {
//         $('.header-container').addClass('fullfield');
//     } 
// });
// close menu
// $('.close-btn').on('click', function() {
//     $('.header__top').removeClass('orange');
//     $('.header__menu').removeClass('active');
//     if ($(window).width() < 1200) {
//         $('.header-container').removeClass('fullfield');
//     } 
// });
/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/

/** ======================== END:Functions ========================== **/