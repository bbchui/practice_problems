/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


document.addEventListener("DOMContentLoaded", function () {
  var currentTime = new Date();

  var Clock = function () {
    function Clock() {
      _classCallCheck(this, Clock);

      this.hour = currentTime.getHours();
      this.minute = currentTime.getMinutes();
      this.second = currentTime.getSeconds();
      this.secondDisplay = document.querySelector('.clock');
      this.render = this.render.bind(this);
    }

    _createClass(Clock, [{
      key: "incrementTime",
      value: function incrementTime() {
        setInterval(this.incrementSeconds.bind(this), 1000);
      }
    }, {
      key: "incrementSeconds",
      value: function incrementSeconds() {
        this.seconds += 1;
        this.render();
      }
    }, {
      key: "render",
      value: function render() {
        this.secondDisplay.innerHTML = "Hi";
      }
    }]);

    return Clock;
  }();

  var clock = new Clock();
  clock.incrementTime();
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map