$(document).ready(function() {

    $(".fa-caret-right").click(function() {
        //salva in una variabile il selettore dell'immagine visualizzata
        // e il cerchio pieno al momento del click
        var currentImg = $('img.current-item');
        var currentPointer = $('.fa-circle.fas');

        // rimuove classe current-item all'immagine corrente
        currentImg.removeClass('current-item');
        //scambia le classi fas e far al cerchio pieno corrente
        currentPointer.toggleClass('fas far');

        // controlla che l'elemento successivo dell'HTML sia un'immagine
        if(currentImg.next('img').length) {
            // se si:
            //dà la classe current-item all'immagine successiva
            currentImg.next().addClass('current-item');
            //cambia le classi fas e far al cerchio successivo
            currentPointer.next().toggleClass('fas far');
        } else {
            // Se no da le classiapposite alla prima immagine e al primo cerchio
            $('.img-box img:first-of-type').addClass('current-item');
            $('.round-box .fa-circle:first-of-type').toggleClass('fas far');
        }
    });


    // ripete quello fatto in precedenza nell'altro senso
    $(".fa-caret-left").click(function() {
        var currentImg = $('img.current-item');
        var currentPointer = $('.fa-circle.fas');

        currentImg.removeClass('current-item');
        currentPointer.toggleClass('fas far');

        if(currentImg.prev('img').length) {
            currentImg.prev().addClass('current-item');
            currentPointer.prev().toggleClass('fas far');
        } else {
            $('.img-box img:last-of-type').addClass('current-item');
            $('.round-box .fa-circle:last-of-type').toggleClass('fas far');
        }
    });

    

});
