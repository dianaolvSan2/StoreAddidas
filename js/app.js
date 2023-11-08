addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
      slidesToShow: 4.7,
      slidesToScroll: 5 ,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
        prev: '.carousel__anterior',
        next: '.carousel__siguiente'
        }
    });
});
addEventListener('load', function(){
  new Glider(document.querySelector('.carousel2__lista'), {
    slidesToShow: 4.7,
    slidesToScroll: 5 ,
      draggable: true,
      dots: '.carousel2__indicadores',
      arrows: {
      prev: '.carousel2__anterior',
      next: '.carousel2__siguiente'
      }
  });
});
addEventListener('load', function(){
  new Glider(document.querySelector('.carousel3__lista'), {
    slidesToShow: 4.7,
      slidesToScroll: 5 ,
      draggable: true,
      dots: '.carousel3__indicadores',
      arrows: {
      prev: '.carousel3__anterior',
      next: '.carousel3__siguiente'
      }
  });
});
addEventListener('load', function(){
  new Glider(document.querySelector('.carousel4__lista'), {
    slidesToShow: 4.5,
      slidesToScroll:4 ,
      draggable: true,
      dots: '.carousel4__indicadores',
      arrows: {
      prev: '.carousel4__anterior',
      next: '.carousel4__siguiente'
      }
  });
});
addEventListener('load', function(){
  new Glider(document.querySelector('.carousel5__lista'), {
    slidesToShow: 4.7,
      slidesToScroll: 5 ,
      draggable: true,
      dots: '.carousel5__indicadores',
      arrows: {
      prev: '.carousel5__anterior',
      next: '.carousel5__siguiente'
      }
  });
});
addEventListener('load', function(){
  new Glider(document.querySelector('.carousel6__lista'), {
    slidesToShow: 4.7,
      slidesToScroll: 5 ,
      draggable: true,
      dots: '.carousel6__indicadores',
      arrows: {
      prev: '.carousel6__anterior',
      next: '.carousel6__siguiente'
      }
  });
});

addEventListener('DOMContentLoaded',() => {
  const btn_menu = document.querySelector('.btn_menu')
  if (btn_menu){
      btn_menu.addEventListener('click', () => {
          const menu_items = document.querySelector('.menu_items')
          menu_items.classList.toggle('show')
      })
  }
});