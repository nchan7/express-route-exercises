var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("You've reached the home route!");
});

// Add your routes below this line
// 1. 
app.get('/parent', function(req, res) {
  res.send("I am the parent");
});

app.get('/parent/son', function(req, res) {
  res.send("I am the son");
});

app.get('/parent/daughter', function(req, res) {
  res.send("I am the daughter");
});

// 3. // Top down reading of the  code
app.get('/hello/SEI', function (req, res) {
  res.send("Welcome to SEI!");
});

// 2.
app.get('/hello/:name', function(req, res) {
  res.send("Hello " + req.params.name);
});


// 4. 
app.get('/:name/:thing', function(req, res) {
  res.send(req.params.thing + ", " + req.params.name);
});


// 6. 
app.get('/console', function (req, res) {
  console.log(req.query);
  res.send("Done");
})

// 7. 
app.get('/color', function (req, res) {
  var color = req.query.color
  // res.send("<h1 style=\"color: " + color + ";\">COLOR</h1>");
  res.send(`<h1 style="color: ${color};">COLOR</h1>`);
  
})

// 5. Have to make this last since it's the wildcard route
app.get('/*', function(req, res) {
  var myParams = req.params[0].split('/');
  var newParams = [];
  for (let i = 0; i < myParams.length; i++) { // Could also use the map function
    if (i % 2 === 0) {
      myParams[i] = myParams[i].toUpperCase(); 
    } else {
      myParams[i] = myParams[i];
    }
  }
  newParams = myParams.join(" ");
  res.send(newParams); 
});


// 5. Steve's code...using the map loop for arrays
// app.get('/*', function(req, res) {
//   var myParams = req.params[0].split('/');
//   var strs = myParams.map(function(word, index) {
//   if (index % 2 === 0) {
//       return word.toUpperCase();
//   } else {
//       return word;
//   }
//   });
//   var newString = strs.join(' ');
//   res.send(newString);
// });

// Add your routes above this line
app.listen(8000);
