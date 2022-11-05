// Web dev assignment by Abdulailah Noor - 2040664

AOS.init(); //Animate on scroll

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.getElementById("messageform").addEventListener("submit",function (e)  { //form function
  e.preventDefault()
  let name = document.getElementById("name").value
  document.getElementById("messagesent").innerHTML = "Hi "+name+", Your message has been sent successfully, <br><br> I will reach you soon 😊";
  document.getElementById("messageform").reset();
  })

function emailval(x){
  if (x.validity.valueMissing){
    x.setCustomValidity("Your email is required")
    
  }
  else if(x.validity.patternMismatch){
    x.setCustomValidity("Your email is not correct, please try again")
    
  } else{
    x.setCustomValidity("")
  }
  x.reportValidity()
}

