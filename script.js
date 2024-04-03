function isSafariMobile() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !!(navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match('CriOS'));
}

// var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);



if (isSafariMobile() == false) {
  
  const headers = document.querySelectorAll('.intro');
  let currentHeader = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (currentHeader) {
            currentHeader.classList.add('not-focused');
          }
          entry.target.classList.remove('not-focused');
          currentHeader = entry.target;
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0% 0px -80% 0px',
    }
  );

  headers.forEach((header) => {
    observer.observe(header);
  });
}
else {
  document.querySelector('.intro').classList.remove('not-focused');
  const introElements = document.querySelectorAll('.intro');
  const lastIntroElement = introElements[introElements.length - 1];
  lastIntroElement.classList.remove('not-focused');
}


const text = document.querySelectorAll('.about, .projects, .card, .experience');

const scrollAnime = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  })
}, {
  rootMargin: "0px",
});

text.forEach((text) => {
  scrollAnime.observe(text);
});

function cardClick(link) {
    window.open(link, '_blank');
}

function openNav() {
  document.getElementById("my-nav").style.display = "flex";
  
}

function closeNav() {
  document.getElementById("my-nav").style.display = "none";
}

// const headercolor = document.querySelectorAll('.about .projects .work');

// const headerchange = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.style.color = "red";
//     }
//   })
// }, {
//   rootMargin: "0px",
// });

// headercolor.forEach((h1) => {
//   headerchange.observe(h1);
// });

var observerz = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {
      document.querySelector('header').style.color = 'var(--primary-color)';
      document.querySelector('.navwindow').style.backgroundColor = 'var(--primary-color)'
      document.querySelector('.navwindow').style.color = 'var(--text-color)'
      document.querySelector('.graaay').style.borderTopLeftRadius = '0'
      document.querySelector('.graaay').style.borderTopRightRadius = '0'
      
      // console.log('Element is in the viewport!');
    } else {
      document.querySelector('header').style.color = 'var(--text-color)';
      document.querySelector('.navwindow').style.backgroundColor = 'var(--secondary-color)'
      document.querySelector('.navwindow').style.color = 'var(--primary-color)'
      document.querySelector('.graaay').style.borderRadius = '10vw'
      // console.log('Element is NOT in the viewport!');
    }
  });
}, {
  rootMargin: '0px 0px -99% 0px'
});

// var myElement = document.getElementById('about');
observerz.observe(document.querySelector('.graaay'));
// observerz.observe(document.getElementById('projects'));
// observerz.observe(document.getElementById('experience'));


window.addEventListener('load', () => {
  //add wait s
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'block';
  }, 400);
  document.querySelector('.loader').addEventListener('animationend', () => {
    

    // window.addEventListener('load', () => {
      const loader = document.querySelector('.loading-screen');
      loader.classList.add('loading-screen-hidden');
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      document.querySelector('.landing').classList.add('go-in')

      loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
      });

    // });

  });
});
