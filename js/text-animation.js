var title = ['<p>We manage every single games that we give to our customer </p>','<p>We provide testimonials and proof of our expertise.</p>',
'<p>kudipredict provides you with a wide range of accurate predictions you can rely on</p>'];
var index = 0;

function change_title() {
    var x = title[index];
    $('.main').html(x);
    index++;
    if (index >= title.length) { index = 0; }
};

function change_left() {
    $('div').removeClass('slide-right').addClass('slide-left');
}

function change_right() {
    $('div').removeClass('slide-left').addClass('slide-right');
    change_title();
}

function to_left() {
setInterval(change_left, 10000);
};

function to_right() {
    setInterval(change_right, 20000);
};

to_left();
to_right();