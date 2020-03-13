$(document).ready(function() {
    $('#topPhone').mask('+7 (999) 999-9999');
    $('#bottomPhone').mask('+7 (999) 999-9999');
    $('banner__form').submit(function() {
        var e = $(this);
        return $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: e.serialize()
        }).done((e) => {
            console.log(e);
        });
    });
});

/** ======================== User actions ========================== **/

/** ======================== END:User actions ========================== **/


/** ======================== Functions ========================== **/

/** ======================== END:Functions ========================== **/