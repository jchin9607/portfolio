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

const text = document.querySelectorAll('.textabout, .projects img, .experience a');

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
      
      // console.log('Element is in the viewport!');
    } else {
      document.querySelector('header').style.color = 'var(--text-color)';
      document.querySelector('.navwindow').style.backgroundColor = 'var(--secondary-color)'
      document.querySelector('.navwindow').style.color = 'var(--primary-color)'
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