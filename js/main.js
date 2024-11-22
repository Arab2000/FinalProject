// // <!-- Start contact form section -->
// document.querySelector(".submit",conditions)
// function conditions () {
//     var first = document.querySelector(".first-form").value;
//     var last = document.querySelector(".last-form").value;
//     var phone = document.querySelector(".phone-form").value;
//     var email = document.querySelector(".email-form").value;
//     var error = document.querySelector(".error");
//     if (first == "" && last == "" && phone == "" && email == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Data in Form"
//         return false;
//     }
//     else if (first == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your First Name"
//         return false;
//     }
//     else if (isNaN(first) == 0) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your First Name correctly please"
//         return false;
//     }
//     else if (first.length > 15 || first.length < 4) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your First Name From 4 to 15 Character"
//         return false;
//     }
//     else if (phone == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Phone Number"
//         return false;
//     }
//     else if (isNaN(phone)) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your number correctly please"
//         return false;
//     }
//     else if (last == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Last Name"
//         return false;
//     }
//     else if (isNaN(last) == 0) {
//         error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` +" Enter Your Last Name correctly please"
//         return false;
//     }
//     else if (last.length > 15 || last.length < 4) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Last Name From 4 to 15 Character"
//         return false;
//     }
//     else if (email == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Email"
//         return false;
//     }
//     else if (isNaN(email) == 0) {
//         error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your Email correctly please"
//         return false;
//     }
//     else if (email.indexOf("@") == -1) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Valid Email correctly please"
//         return false;
//     }
//     else {
//         return false;
//     }
// }
// // <!-- End contact form section -->
// // <!-- Start sign form section -->
// function sign() {
//     var email = document.querySelector(".email-sign").value;
//     var pass = document.querySelector(".pass-sign").value;
//     var error = document.querySelector(".error");
//     if (pass == "" && email == "") {
//         error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` +" Write Your Data in Form"
//         return false;
//     }
//     else if (email == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Email"
//         return false;
//     }
//     else if (isNaN(email) == 0) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your Email correctly please"
//         return false;
//     }
//     else if (email.indexOf("@") == -1) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Valid Email correctly please"
//         return false;
//     }
//     else if (pass=="") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your Password"
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// // <!-- End sign form section -->
// // <!-- Start register form section -->
// function register() {
//     var first = document.querySelector(".first-form").value;
//     var last = document.querySelector(".last-form").value;
//     var phone = document.querySelector(".phone-form").value;
//     var email = document.querySelector(".email-form").value;
//     var pass = document.querySelector(".pass-sign").value;
//     var Password = document.querySelector(".confirm-pass-sign").value;
//     var error = document.querySelector(".error");
//     if (first == "" && last == "" && phone == "" && email == "" && pass=="" &&Password=="") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Data in Form"
//         return false;
//     }
//     else if (first == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your First Name"
//         return false;
//     }
//     else if (isNaN(first) == 0) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your First Name correctly please"
//         return false;
//     }
//     else if (first.length > 15 || first.length < 4) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your First Name From 4 to 15 Character"
//         return false;
//     }
//     else if (phone == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Phone Number"
//         return false;
//     }
//     else if (isNaN(phone)) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your number correctly please"
//         return false;
//     }
//     else if (last == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Last Name"
//         return false;
//     }
//     else if (isNaN(last) == 0) {
//         error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` +" Enter Your Last Name correctly please"
//         return false;
//     }
//     else if (last.length > 15 || last.length < 4) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Last Name From 4 to 15 Character"
//         return false;
//     }
//     else if (email == "") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Write Your Email"
//         return false;
//     }
//     else if (isNaN(email) == 0) {
//         error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your Email correctly please"
//         return false;
//     }
//     else if (email.indexOf("@") == -1) {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Valid Email correctly please"
//         return false;
//     }
//     else if (pass=="") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Enter Your Password"
//         return false;
//     }
//     else if (Password=="") {
//         error.innerHTML =`<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i>` + " Confirm Your Password"
//         return false;
//     }
//     else {
//         return true;
//     }
// }
// // utils.js
// // export function register(formData) {
// //     const { first, last, phone, email, pass, confirmPassword } = formData;
// //     const errorElement = document.querySelector('.error');

// //     if (!first || !last || !phone || !email || !pass || !confirmPassword) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your Data in Form`;
// //         return false;
// //     } else if (isNaN(first)) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Your First Name correctly please`;
// //         return false;
// //     } else if (first.length < 4 || first.length > 15) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your First Name From 4 to 15 Characters`;
// //         return false;
// //     } else if (isNaN(phone)) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Your Phone Number correctly please`;
// //         return false;
// //     } else if (isNaN(last)) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Your Last Name correctly please`;
// //         return false;
// //     } else if (last.length < 4 || last.length > 15) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your Last Name From 4 to 15 Characters`;
// //         return false;
// //     } else if (email.indexOf('@') === -1) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Valid Email`;
// //         return false;
// //     } else if (pass.length < 6) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Password must be at least 6 characters`;
// //         return false;
// //     } else if (pass !== confirmPassword) {
// //         errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Passwords do not match`;
// //         return false;
// //     }

// //     // Clear any previous error message if validation passes
// //     errorElement.innerHTML = '';
// //     return true;
// // }
// function conditions(e) {
//     e.preventDefault();  // Prevent form from submitting by default
  
//     // Get form field values
//     const first = document.querySelector(".first-form").value;
//     const last = document.querySelector(".last-form").value;
//     const phone = document.querySelector(".phone-form").value;
//     const email = document.querySelector(".email-form").value;
//     const error = document.querySelector(".error");
  
//     // Clear any previous error message
//     error.innerHTML = '';
  
//     // Validation logic
//     if (first === "" && last === "" && phone === "" && email === "") {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your Data in Form`;
//       return false;
//     } else if (first === "") {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your First Name`;
//       return false;
//     } else if (!/^[a-zA-Z]+$/.test(first)) {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Your First Name correctly please`;
//       return false;
//     } else if (first.length > 15 || first.length < 4) {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> First Name should be between 4 and 15 characters`;
//       return false;
//     } else if (phone === "") {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your Phone Number`;
//       return false;
//     } else if (isNaN(phone)) {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Your Phone Number correctly`;
//       return false;
//     } else if (last === "") {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your Last Name`;
//       return false;
//     } else if (!/^[a-zA-Z]+$/.test(last)) {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter Your Last Name correctly please`;
//       return false;
//     } else if (last.length > 15 || last.length < 4) {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Last Name should be between 4 and 15 characters`;
//       return false;
//     } else if (email === "") {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Write Your Email`;
//       return false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       error.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Enter a valid email address`;
//       return false;
//     }
  
//     return true;  // If everything is correct, allow form submission
//   }
  
//   export default conditions;
  
// // <!-- End register form section -->
