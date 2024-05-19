/**
* Template Name: Reveal
* Template URL: https://bootstrapmade.com/reveal-bootstrap-corporate-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


// form script
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  var x = document.getElementsByClassName("step");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

// function nextPrev(n) {
//   // This function will figure out which tab to display
//   var x = document.getElementsByClassName("step");
//   // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
//   // Hide the current tab:
//   x[currentTab].style.display = "none";
//   // Increase or decrease the current tab by 1:
//   currentTab = currentTab + n;
//   // if you have reached the end of the form...
//   if (currentTab >= x.length) {
//     // ... the form gets submitted:
//     document.getElementById("signUpForm").submit();
//     return false;
//   }
//   // Otherwise, display the correct tab:
//   showTab(currentTab);
// }

var currentTab = 0; // Inisialisasi tab saat ini

// Fungsi untuk memvalidasi formulir
function validateForm() {
  // Tambahkan logika validasi formulir di sini
  return true; // Misalnya, sementara kita kembalikan true
}

// Fungsi untuk mengumpulkan data dari langkah tes tertentu
function collectFormData(stepIndex) {
  // Di sini Anda perlu mengumpulkan data formulir dari langkah tertentu
  // Misalnya, Anda dapat menggunakan querySelectorAll untuk mengumpulkan data dari elemen formulir
  var formData = [];
  var step = document.querySelector('#test-' + (stepIndex + 1));
  var inputs = step.querySelectorAll('input[type="radio"]:checked');
  inputs.forEach(function(input) {
    formData.push(input.value);
  });
  return formData;
}

// Fungsi untuk mengirimkan semua formulir ke backend Flask
function submitAllForms() {
  // Mengumpulkan data dari setiap langkah tes
  var formData = {
    "riasec": collectFormData(0), // Mengumpulkan data dari langkah pertama
    "kecendrungan_otak": collectFormData(1), // Mengumpulkan data dari langkah kedua
    "tipe_kecerdasan": collectFormData(2), // Mengumpulkan data dari langkah ketiga
    "gaya_belajar": collectFormData(3) // Mengumpulkan data dari langkah keempat
  };

  // Mengirimkan data ke backend Flask menggunakan AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Response from server:", xhr.responseText);
      // Di sini Anda bisa menambahkan logika untuk menangani respons dari backend
      window.location.href = "/result";
    }
  };
  xhr.send(JSON.stringify(formData));
}

// Fungsi untuk menangani navigasi antar langkah
function nextPrev(n) {
  var x = document.getElementsByClassName("step");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    if (document.getElementById("nextBtn").innerHTML == "Submit") {
      submitAllForms(); // Submit all forms before redirecting
      window.location.href = "/result";
      return false;
    }
  }
  showTab(currentTab);
}


// Fungsi untuk menampilkan langkah saat ini
function showTab(n) {
  var x = document.getElementsByClassName("step");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("stepIndicator");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}



// scroll to top of the form after clicking the next button
// Get the next button element
var nextButton = document.getElementById("nextBtn");

// Add an event listener for the "click" event
nextButton.addEventListener("click", function() {
    document.getElementById("quiz-form").scrollIntoView();
    console.log("Next button clicked!");
});



// radio button scroll
// document.addEventListener('DOMContentLoaded', function () {
//   const select = (el, all = false) => {
//       el = el.trim()
//       if (all) {
//           return [...document.querySelectorAll(el)]
//       } else {
//           return document.querySelector(el)
//       }
//   }

//   const on = (type, el, listener, all = false) => {
//       let selectEl = select(el, all)
//       if (selectEl) {
//           if (all) {
//               selectEl.forEach(e => e.addEventListener(type, listener))
//           } else {
//               selectEl.addEventListener(type, listener)
//           }
//       }
//   }

//   const radioButtons = select('input[type="radio"]', true);
  
//   radioButtons.forEach(function(radioButton) {
//       on('change', radioButton, function() {
//           // Scroll to the questions below
//           var parentStep = this.closest('.step');
//           var nextQuestion = parentStep.nextElementSibling;
//           if (nextQuestion) {
//               nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           }
//       });
//   });
// });
