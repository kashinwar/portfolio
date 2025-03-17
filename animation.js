// CSS for fade, flip, and zoom animations
const style = document.createElement('style');
style.innerHTML = `
  .fade-right, .fade-left, .fade-top, .fade-down, .fade-up, .fade-up-right, .fade-up-left, .fade-down-left, .fade-down-right,
  .flip-left, .flip-right, .flip-up, .flip-down,
  .zoom-out, .zoom-in, .zoom-in-up, .zoom-in-down, .zoom-in-left, .zoom-in-right,
  .zoom-out-up, .zoom-out-down, .zoom-out-left, .zoom-out-right {
    opacity: 0;
    transition: opacity 0.9s ease-out, transform 0.9s ease-out;
  }
  
  .fade-right { transform: translateX(-50px); }
  .fade-left { transform: translateX(50px); }
  .fade-top { transform: translateY(50px); }
  .fade-down { transform: translateY(-50px); }
  .fade-up { transform: translateY(50px); }
  .fade-up-right { transform: translate(50px, 50px); }
  .fade-up-left { transform: translate(-50px, 50px); }
  .fade-down-left { transform: translate(-50px, -50px); }
  .fade-down-right { transform: translate(50px, -50px); }

  .flip-left { transform: rotateY(-90deg); }
  .flip-right { transform: rotateY(90deg); }
  .flip-up { transform: rotateX(-90deg); }
  .flip-down { transform: rotateX(90deg); }

  .zoom-out { transform: scale(1.2); }
  .zoom-in { transform: scale(0.8); }
  .zoom-in-up { transform: scale(0.8) translateY(50px); }
  .zoom-in-down { transform: scale(0.8) translateY(-50px); }
  .zoom-in-left { transform: scale(0.8) translateX(50px); }
  .zoom-in-right { transform: scale(0.8) translateX(-50px); }
  .zoom-out-up { transform: scale(1.2) translateY(50px); }
  .zoom-out-down { transform: scale(1.2) translateY(-50px); }
  .zoom-out-left { transform: scale(1.2) translateX(50px); }
  .zoom-out-right { transform: scale(1.2) translateX(-50px); }

  .fade-right.show, .fade-left.show, .fade-top.show, .fade-down.show, .fade-up.show, .fade-up-right.show, .fade-up-left.show,
  .fade-down-left.show, .fade-down-right.show, .flip-left.show, .flip-right.show, .flip-up.show, .flip-down.show,
  .zoom-out.show, .zoom-in.show, .zoom-in-up.show, .zoom-in-down.show, .zoom-in-left.show, .zoom-in-right.show,
  .zoom-out-up.show, .zoom-out-down.show, .zoom-out-left.show, .zoom-out-right.show {
    opacity: 1;
    transform: translateX(0) translateY(0) scale(1) rotateX(0) rotateY(0);
  }
`;
document.head.appendChild(style);

// JavaScript to trigger the animation when elements are in viewport
function fadeInElements() {
  const elements = document.querySelectorAll('.fade-right, .fade-left, .fade-top, .fade-down, .fade-up, .fade-up-right, .fade-up-left,.fade-down-left, .fade-down-right, .flip-left, .flip-right, .flip-up, .flip-down, .zoom-out, .zoom-in, .zoom-in-up, .zoom-in-down,.zoom-in-left, .zoom-in-right, .zoom-out-up, .zoom-out-down, .zoom-out-left, .zoom-out-right');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
}

// Run on scroll, load, and resize
document.addEventListener('DOMContentLoaded', fadeInElements);
window.addEventListener('scroll', fadeInElements);
window.addEventListener('resize', fadeInElements);

// Example Usage in HTML:
// <div class="fade-right">Your content here</div>
// <div class="fade-left">Your content here</div>
// <div class="fade-top">Your content here</div>
// <div class="fade-down">Your content here</div>
// <div class="fade-up">Your content here</div>
// <div class="fade-up-right">Your content here</div>
// <div class="fade-up-left">Your content here</div>
// <div class="fade-down-left">Your content here</div>
// <div class="fade-down-right">Your content here</div>
// <div class="flip-left">Your content here</div>
// <div class="flip-right">Your content here</div>
// <div class="flip-up">Your content here</div>
// <div class="flip-down">Your content here</div>
// <div class="zoom-out">Your content here</div>
// <div class="zoom-in">Your content here</div>
// <div class="zoom-in-up">Your content here</div>
// <div class="zoom-in-down">Your content here</div>
// <div class="zoom-in-left">Your content here</div>
// <div class="zoom-in-right">Your content here</div>
// <div class="zoom-out-up">Your content here</div>
// <div class="zoom-out-down">Your content here</div>
// <div class="zoom-out-left">Your content here</div>
// <div class="zoom-out-right">Your content here</div>
