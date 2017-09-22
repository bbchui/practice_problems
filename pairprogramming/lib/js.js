// let clock = document.getElementById("root");
// class Clock {
//   // clock.remove(hours, ":", this.minutes, ":", this.seconds);
//   // clock.remove();
//   this.ampm = "am"
//   this.hours = new Date().getHours();
//   if (this.hours > 12) {
//     this.ampm = "pm"
//     this.hours = this.hours % 12
//   }
//
//   if (parseInt(this.hours) < 10) {
//     this.hours = "0" + this.hours
//   }
//   this.minutes = new Date().getMinutes();
//   if (parseInt(this.minutes) < 10) {
//     this.minutes = "0" + this.minutes
//   }
//   this.seconds = new Date().getSeconds();
//   if (parseInt(this.seconds) < 10) {
//     this.seconds = "0" + this.seconds
//   }
//   clock.append(this.hours, ":", this.minutes, ":", this.seconds, " ", this.ampm)
//
//   this.addTime = function() {
//     this.seconds += 1
//     if (this.seconds == 60) {
//       this.minutes += 1
//       this.seconds = 0
//       if (this.minutes == 60) {
//         this.hours += 1
//         this.minutes = 0
//         if (this.hours > 24) {
//           this.hours = 0
//         }
//       }
//     }
//   }
// }
//
//
//
// // let t = document.createTextNode(this.hours)
// var clocksss = new Clock;
// setInterval(clocksss.addTime(), 1000)

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());
  let ampm = h < 12 ? " AM" : " PM";
  h = (h === 12 || h === 0) ? 12 : addZero(h % 12);
  let time = h + ":" + m + ":" + s + ampm
  document.getElementById("clock").innerText = time
}
showTime();
setInterval(showTime, 1000);

function addZero(num) {
  return num = num < 10 ? "0" + num : num
}
