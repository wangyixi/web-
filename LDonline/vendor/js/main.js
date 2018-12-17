$('#myModel').on('shown.bs.modal', function(e) {
    $(this).css('display', 'block');
    var modalHeight = $(window).height() / 2 - $('#myModel .modal-dialog').height() / 2;
    $(this).find('.modal-dialog').css({
        'margin-top': modalHeight
    });
});