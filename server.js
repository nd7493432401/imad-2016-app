var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
	articleOne: {
		title: "Article One | N.D.",
		heading: "Article One",
		date: "Sept 5, 2016",
		content:`
			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>


			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>

			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>`
	},
	articleTwo: {
		title: "Article Two | N.D.",
		heading: "Article Two",
		date: "Sept 15, 2016",
		content:`
			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>


			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>

			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>`
	},
	articleThree: {
		title: "Article Three | N.D.",
		heading: "Article Three",
		date: "Sept 25, 2016",
		content:`
			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>


			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>

			<p>
				This article contains alot of content. This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.This article contains alot of content.
			</p>`
	}
}

function createTemplate (data) {

	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;

	var htmlTemplate = `
	<html>
	<head>
		<title>${title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link href="/ui/style.css" rel="stylesheet" />
	</head>
	<body>
		<div class="container">
		
			<div>
				<a href="/">Home</a>
			</div>
			<hr/>
			<h3>
				${heading}
			</h3>
			<div>
				${date}
			</div>
			<div>
				${content}

			</div>
		</div>
	</body>
	</html>`;

	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res) {
	// articleName === articleOne
	// articles[articleName] == {} content object for article one
	var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

app.get('/articleTwo',function(req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'articleTwo.html'));
});

app.get('/articleThree',function(req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'articleThree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
