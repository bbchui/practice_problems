var job1 = function(cb) {
  setTimeout(function() { cb('first'); }, 900);
};

var job2 = function(cb) {
  setTimeout(function() { cb('second'); }, 100);
};

var job3 = function(cb) {
  setTimeout(function() { cb('third'); }, 300);
};

var jobs = [job1, job2, job3];
var callback = function(results) { console.log(results); };

function asy(args, cb) {
  let results = [];
  let counter = 0;

  for (var i = 0; i < args.length; i++) {
    (function(i) {
      let job = jobs[i]
      job(function(val) {
        results[i] = val
        counter++
        if (counter === args.length) {
          cb(results)
        }
      })
    })(i)
  }
}

asy(jobs, callback)
