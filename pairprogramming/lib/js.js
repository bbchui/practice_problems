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

// function showTime() {
//   let date = new Date();
//   let h = date.getHours();
//   let m = addZero(date.getMinutes());
//   let s = addZero(date.getSeconds());
//   let ampm = h < 12 ? " AM" : " PM";
//   h = (h === 12 || h === 0) ? 12 : addZero(h % 12);
//   let time = h + ":" + m + ":" + s + ampm
//   document.getElementById("clock").innerText = time
// }
// showTime();
// setInterval(showTime, 1000);
//
// function addZero(num) {
//   return num = num < 10 ? "0" + num : num
// }


document.addEventListener("DOMContentLoaded", function() {
  let currentTime = new Date();

  function Clock() {
    this.hour = currentTime.getHours();
    this.minute = currentTime.getMinutes();
    this.second = currentTime.getSeconds();

    this.ampm = this.hours < 12 ? " AM" : " PM";

    this.hour = (this.hour === 12 || h === 0) ? 12 : h % 12

    this.hourDisplay = document.querySelector('.hour');
    this.minuteDisplay = document.querySelector('.minute');
    this.secondDisplay = document.querySelector('.second');
    this.amPmDisplay = document.querySelector('.am-pm');

    this.incrementTime = function() {
      setInterval(this.incrementSeconds.bind(this), 1000);
    }

    this.incrementSeconds = function() {
      if (this.second < 59) {
        this.second += 1;
      } else if (this.second === 59) {
        this.second = 0;
        this.incrementMinutes();
      }
      this.render();
    }

    this.incrementMinutes = function() {
      if (this.minute < 59) {
        this.minute += 1;
      } else {
        this.minute = 0;
        this.incrementHours();
      }
    }

    this.incrementHours = function() {
      if (this.hour < 12) {
        this.hour += 1;
      } else if (this.hour === 12) {
        this.hour = 1;
      }
    }

    this.render = function() {
      this.hourDisplay.innerHTML = this.hour;
      this.minuteDisplay.innerHTML = this.minute;
      this.secondDisplay.innerHTML = this.second;
      this.amPmDisplay.innerHTML = this.ampm
    }
  }

  var clock = new Clock();
  clock.incrementTime();

})
