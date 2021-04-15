function navigate(str){

    if(str == 'home'){
        hideAll();
        $('.home').show();
    } else if(str == 'about'){
        hideAll();
        $('.about').show();
    } else if(str == 'services'){
        hideAll();
        $('.services').show();
    } else if(str == 'skills'){
        hideAll();
        $('.skills').show();
    } else if(str == 'edu'){
        hideAll();
        $('.education').show();
    } else if(str == 'exp'){
        hideAll();
        $('.experience').show();
    } else if(str == 'work'){
        hideAll();
        $('.work').show();
    } else if(str == 'blog'){
        hideAll();
        $('.blog').show();
    } else {
        hideAll();
        $('.contact').show();
    }
}

function hideAll(){
    $('.home').hide();
    $('.about').hide();
    $('.services').hide();
    $('.skills').hide();
    $('.education').hide();
    $('.experience').hide();
    $('.work').hide();
    $('.blog').hide();
    $('.contact').hide();
}
