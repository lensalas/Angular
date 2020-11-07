
WhatAnimation('move');
WhatAnimation('move2');
WhatAnimation('move3');


$(window).scroll(function(){

WhatAnimation('move');
WhatAnimation('move2');
WhatAnimation('move3');


});

function WhatAnimation(name) {
 $('.'+ name).each(function(){
   switch (name) {
     case 'move': AddClass(this, 'fade');
     break;
     case 'move2': AddClass(this, 'fade2');
     break;
     break;
     case 'move3': AddClass(this, 'fade3');
     break;
   }
 })
};

function AddClass(object, name) {
  if(IsVisible(object)) {
    $(object).addClass(name);
  } else {
    $(object).removeClass(name);
  }

  }
  function IsVisible(object) {
    var viewport = $(window).scrollTop() + $(window).height();
    var rand = $(object).offset();
    rand.bottom = rand.top + $(object).outerHeight();
    return !(
      viewport < rand.top +200 || $(window).scrollTop() > rand.bottom -200);

  }
