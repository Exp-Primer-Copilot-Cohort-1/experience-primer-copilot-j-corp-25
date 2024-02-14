// Create web server
// Usage: http://localhost:3000/comments

var express = require('express');
var app = express();

app.get('/comments', function(req, res){
  res.send('This is a comments page');
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');
```

####