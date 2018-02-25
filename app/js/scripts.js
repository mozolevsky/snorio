// sticky header
let stickyHeader = document.querySelector('.header-sticky');

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 150) {
    stickyHeader.classList.add('header-sticky_opened');
  } else {
    stickyHeader.classList.remove('header-sticky_opened');
  }
});


// mobile menu
let slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'touch': false
  });

  // Toggle button
  let allToggleButtons = document.querySelectorAll('.js-slideout-toggle');

    [].forEach.call(allToggleButtons, function(item) {
        item.addEventListener('click', function() {
          slideout.toggle();
      });
    });

    let fixed = document.querySelector('.header-sticky');

    slideout.on('translate', function(translated) {
        fixed.style.transform = 'translateX(' + translated + 'px)';
    });

    slideout.on('beforeopen', function () {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(256px)';
        fixed.classList.add("header-sticky_with-overlay");
    });

    slideout.on('beforeclose', function () {
        fixed.style.transition = 'transform 300ms ease';
        fixed.style.transform = 'translateX(0px)';
        fixed.classList.remove("header-sticky_with-overlay");
    });

    function close(eve) {
      eve.preventDefault();
      slideout.close();
    }

    slideout
      .on('beforeopen', function() {
        this.panel.classList.add('panel-open');
      })
      .on('open', function() {
        this.panel.addEventListener('click', close);
      })
      .on('beforeclose', function() {
        this.panel.classList.remove('panel-open');
        this.panel.removeEventListener('click', close);
  });


  // timer
let clock = $('.clock').FlipClock(3600, {
    countdown: true
});
console.log('after timer');


//reviews
let reviewsBtn = document.querySelector('.reviews__btn-js');
let reviewsBtnText = document.querySelector('.reviews__btn-text-js');
let reviewsSpinner = document.querySelector('.loader');
let counter = 0;

if (reviewsBtn && reviewsBtnText && reviewsSpinner) {
    reviewsBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (counter < 10) {
            reviewsBtnText.classList.toggle('d-none');
            reviewsBtn.setAttribute('disabled', true);
            reviewsSpinner.classList.toggle('d-none');
            let reviewsHiddenBlock = document.querySelector('.reviews-' + counter + '-js');

            ++counter;

            setTimeout(function() {
                reviewsSpinner.classList.toggle('d-none');

                if (counter === 10) {
                    reviewsBtn.setAttribute('disabled', true);
                    reviewsBtn.innerText = 'All comments loaded';
                } else {
                    reviewsBtn.removeAttribute('disabled');
                    reviewsBtnText.classList.toggle('d-none');
                }

                reviewsHiddenBlock.classList.remove('d-none');
            }, 2500);
        }
    });
}

// table 
var table = document.querySelector('.table');

if (table) {
    table.addEventListener('touchstart', function(e) {
        e.stopImmediatePropagation();
    });
}