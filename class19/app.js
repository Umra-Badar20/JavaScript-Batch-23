// Swal.fire({
//     title: "Do you want to save the changes?",
//     showDenyButton: true,
//     showCancelButton: false,
//     confirmButtonText: "Yes",
//     denyButtonText: `No`,
//     position: "top-end"
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) Swal.fire("Saved!", "", "success");
//     else if (result.isDenied) Swal.fire("Changes are not saved", "", "error");
//   });

// let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 4000,
//   theme: 'material-ui',
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) console.log("I was closed by the timer");
// });

// let time =moment().format('MMM 0Do Q DDD dddd YYYYYY  hh:mm:ss A')
// console.log(time);
// console.log(moment([2026, 9, 8]).fromNow());

// var a = moment([2020, 0, 28]);
// var b = moment([2007, 0, 29]);
// console.log(a.from(b));

// var userInput = prompt("Enter your DOB. YYYY MM DD")

// var time = moment([userInput]).fromNow();
// console.log( time);


var time = moment([2027, 1, 7]).toNow();
console.log( time);