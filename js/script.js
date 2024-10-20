var counter = 0;

function Item_Count(IteM) {
  if( ! IteM.classList.contains('active') ) {
    counter = counter + 1;
    document.querySelector('.banner-text_counter').textContent = counter + '/' + document.getElementsByClassName('item').length;
    IteM.classList.add('active');
  }

  if( counter == document.getElementsByClassName('item').length ) {
    animation(2);
  }
}

function ReseT(parentSelector, className) {
  if( counter != 0 ) {
    document.querySelectorAll(`${parentSelector} > .${className}`).forEach(n => {
      n.classList.remove(className);
    });

    counter = 0;
    document.querySelector('.banner-text_counter').textContent = counter + '/' + document.getElementsByClassName('item').length;
    
    document.querySelector('.backpack').style.cssText = `transform: scale(1.1) rotate(0deg) translate3d(0px, -94px, 0px); opacity: 0; z-index: -1; transition:none;`;
    document.querySelector('.banner-text_ready').style.cssText = `opacity: 0; z-index: -1; transform: translate3d(0px, 0px, 0px); transition:none;`;
    document.querySelector('.banner_button').style.cssText = `opacity: 0; z-index: -1; transform: translate3d(0px, 0px, 0px); transition:none;`;

    setTimeout(function() {
      animation(0);
      animation(1);
    }, 50);
  }
}

function animation(step) {
    if( step == 0 ) {
      document.querySelector('.banner-text_readiness').style.cssText = ``;
      document.querySelector('.banner-text_ready').style.cssText = ``;
      document.querySelector('.banner_button').style.cssText = ``;
      document.querySelector('.item_1').style.cssText = ``;
      document.querySelector('.item_2').style.cssText = ``;
      document.querySelector('.item_3').style.cssText = ``;
      document.querySelector('.item_4').style.cssText = ``;
      document.querySelector('.item_5').style.cssText = ``;
      document.querySelector('.backpack').style.cssText = ``;
      document.querySelector('.banner-text_message').style.cssText = ``;
      document.querySelector('.list').classList.remove('no-active');
    }

    if( step == 1 ) {
      setTimeout(function() {
        document.querySelector('.banner-text_readiness').style.cssText = `
          transform: translate3d(0px, 0px, 0px);
          opacity: 1;
          z-index: 1;
        `;
      }, 250);

      setTimeout(function() {
        document.querySelector('.backpack').style.cssText = `
         transform: rotate(-10.92deg) scale(1.10) translate3d(15px, -151px, 0px);
         opacity: 1;
         z-index: 1;
        `;
      }, 350);

      setTimeout(function() {
        document.querySelector('.backpack').style.cssText = `
          transform: rotate(-10.92deg);
          opacity: 1;
          z-index: 1;
        `;
      }, 1000);

      setTimeout(function() {
        document.querySelector('.item_1').style.cssText = `
          transform: scale(1.0);
          opacity: 1;
          z-index: 10;
        `;
      }, 1100);

      setTimeout(function() {
        document.querySelector('.item_2').style.cssText = `
          transform: scale(1.0);
          opacity: 1;
          z-index: 10;
        `;
      }, 1150);

      setTimeout(function() {
        document.querySelector('.item_3').style.cssText = `
          transform: scale(1.0);
          opacity: 1;
          z-index: 10;
        `;
      }, 1200);

      setTimeout(function() {
        document.querySelector('.item_4').style.cssText = `
          transform: scale(1.0);
          opacity: 1;
          z-index: 10;
        `;
      }, 1250);

      setTimeout(function() {
        document.querySelector('.item_5').style.cssText = `
          transform: scale(1.0);
          opacity: 1;
          z-index: 10;
        `;
      }, 1300);

      setTimeout(function() {
        document.querySelector('.list').classList.add('anim');
      }, 1350);

      setTimeout(function() {
        document.querySelector('.banner-text_message').style.cssText = `
          opacity: 1;
          z-index: 10;
          transform: rotate(0deg);
        `;
      }, 1200);
    }

    if( step == 2 ) {
        document.querySelector('.list').classList.remove('anim');
        document.querySelector('.list').classList.add('no-active');

        document.querySelector('.backpack').style.cssText = `
          transform: scale(1.10) rotate(0) translate3d(0px, -94px, 0px);
          opacity: 1;
          z-index: 1;
        `;

        document.querySelector('.banner-text_message').style.cssText = `
          opacity: 0;
          z-index: -1;
          transform: rotate(0deg);
          transition:none;
        `;

        document.querySelector('.banner-text_readiness').style.cssText = `
          opacity: 0;
          z-index: -1;
          transition:none;
        `;

        document.querySelector('.banner-text_ready').style.cssText = `
          opacity: 1;
          z-index: 1;
          transform: translate3d(0px, 0px, 0px);
        `;

         document.querySelector('.banner_button').style.cssText = `
          opacity: 1;
          z-index: 10;
          transform: translate3d(0px, 0px, 0px);
        `;
    }
}

animation(1);