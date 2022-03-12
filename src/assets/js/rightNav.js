


right__nav.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

    window.addEventListener('scroll', function() {
      right__nav.hidden = (pageYOffset < document.documentElement.clientHeight/2);
    });