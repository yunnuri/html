$.fn.imageSlider = function (object) {
    const width = object.width || 460;
    const height = object.height || 300;
    let current = 0;
    const moveTo = function () {
        $(this).find('.image').animate({
            left: -current * width
        }, 1000);
    };
    const imageLength = $(this).find('.slider .image').length;
    for (let i = 0; i < imageLength; i++) {
        $('<button></button>')
            .attr('data-position', i)
            .text(i)
            .click(function () {
                current = $(this).attr('data-position');
                moveTo.call($(this).closest('.slider'));
            })
            .insertBefore($(this).find('.slider'));
    }
    $(this).css({
        position: 'relative',
        width: width,
        height: height,
        overflow: 'hidden'
    });

    $(this).find('.slider .image').css({
        position: 'absolute',
        width: width * imageLength,
    });
    $(this).find('.slider .image').css({
        margin: 0,
        padding: 0,
        width: width,
        height: height,
        display: 'block',
        float: 'left'
    });
    setInterval(function () {
        current = (current + 1) % imageLength;
        moveTo.call($(this).closest('.slider'));
    }.bind(this), 3000);
}
