const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

//Preloader
function hidePreloader() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(hidePreloader, 1700);
});

//Hamburger menu
navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "img/icons/close.svg";
  } else {
    navBtnImg.src = "img/icons/open.svg";
  }
};

//Sticky header & goToTop button
window.addEventListener("scroll", function () {
  const header = document.querySelector("#header");
  const hero = document.querySelector("#home");
  let triggerHeight = hero.offsetHeight - 170;

  if (window.scrollY > triggerHeight) {
    header.classList.add("header-sticky");
    goToTop.classList.add("reveal");
  } else {
    header.classList.remove("header-sticky");
    goToTop.classList.remove("reveal");
  }
});

//AOS animations settings
AOS.init({
  once: true,
});
// document.getElementById('myContact').addEventListener('submit', async function(e) {
//     e.preventDefault();
    
//     const form = e.target;
//     const formData = new FormData(form);
//     const responseDiv = document.getElementById('responseMessage');
    
//     // Show loading state
//     responseDiv.innerHTML = 'Sending...';
//     responseDiv.className = 'loading';
    
//     try {
//         const response = await fetch('https://retailease.parliamentpratidin.com/portfolio-contact.php', {
//             method: 'POST',
//             body: formData
//         });
        
//         if (response.ok) {
//             const result = await response.json();
//             responseDiv.innerHTML = result.message || 'Success!';
//             responseDiv.className = 'success';
//             form.reset();
//         } else {
//             throw new Error('Server error');
//         }
//     } catch (error) {
//         responseDiv.innerHTML = 'Error: ' + error.message;
//         responseDiv.className = 'error';
//     }
// });
document.getElementById('myContact').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const form = e.target;
    const formData = new FormData(form);
    const responseDiv = document.getElementById('responseMessage');
    
    // Show loading state
    responseDiv.innerHTML = 'Sending...';
    responseDiv.className = 'loading';
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://retailease.parliamentpratidin.com/portfolio-contact.php', true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success
            responseDiv.innerHTML = 'Message sent successfully!';
            responseDiv.className = 'success';
            form.reset(); // Clear form
        } else {
            // Error
            responseDiv.innerHTML = 'Error sending message. Please try again.';
            responseDiv.className = 'error';
        }
    };
    
    xhr.onerror = function() {
        responseDiv.innerHTML = 'Network error. Please check your connection.';
        responseDiv.className = 'error';
    };
    
    xhr.send(formData);
});