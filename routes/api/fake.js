var router = require('express').Router();
const request = require('request');
var cool = require('cool-ascii-faces');

//fake users
const options = {
  url: 'https://api.github.com/users',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client'
  }
}

router.get('/git-users', function(req, res) {
  request(options, function(err, output, body) {
    var json = JSON.parse(body);
    res.send(json);
  });
});

router.get('/test', function(req, res) {
  res.send("hello word");
});

router.get('/cool', function(req, res) {
  res.json(cool());
});

router.get('/times', function(req, res) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
      result += i + ' ';
  res.send(result);
});

router.get('/days', function(req, res) {
  res.json([
    {
      "mo": [
        {
          "bt": 240,
          "et": 779
        }
      ],
      "tu": [],
      "we": [],
      "th": [
        {
          "bt": 240,
          "et": 779
        },
        {
          "bt": 1140,
          "et": 1319
        }
      ],
      "fr": [
        {
          "bt": 660,
          "et": 1019
        }
      ],
      "sa": [
        {
          "bt": 0,
          "et": 1439
        }
      ],
      "su": []
    }
  ]);
});

module.exports = router;
