$(document).ready(function() {
    $('#topPhone').mask('+7 (999) 999-9999');
    $('#bottomPhone').mask('+7 (999) 999-9999');
    $('.banner__form button').click(function(e) {
        e.preventDefault();
        var data = {
            "Имя": $(this).parent().children('.form__inputs').children('input[name="name"]').val(),
            "Телефон": $(this).parent().children('.form__inputs').children('input[name="phone"]').val(),
        }
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: data
        }).done(() => {
            $(this).parent().children('.form__inputs').children('input[name="name"]').val('');
            $(this).parent().children('.form__inputs').children('input[name="phone"]').val('');
        });
    });



    var timeID = setInterval(() => {
        const hoursHtml = $('.time .time__hour');
        const minutesHtml = $('.time .time__min');
        const secHtml = $('.time .time__sec');
        const hours = parseInt($(hoursHtml).html(), 10);
        const min = parseInt($(minutesHtml).html(), 10);
        const sec = parseInt($(secHtml).html(), 10);

        if (hours === 0 && min === 0 && sec === 0) {
            clearInterval(timeID);
        } else {
            if (min === 0 && sec === 0) {
                $(hoursHtml).text(hours > 10 ? `${ hours - 1 }` : `0${ hours - 1 }`);
                $(minutesHtml).text('59');
                $(secHtml).text('59');
            } else {
                if (sec === 0) {
                    $(minutesHtml).text(min > 10 ? `${ min - 1 }` : `0${ min - 1 }`);
                    $(secHtml).text('59');
                } else {
                    $(secHtml).text(sec > 10 ? `${ sec - 1 }` : `0${ sec - 1 }`);
                }
            }
        }
    }, 1000);
});