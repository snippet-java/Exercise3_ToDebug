var getMain = function(req, res) {
  res.render('main.ejs', {});
};

var postResults = function(req, res) {
  var x = req.body.myInputField;
  res.render('results.ejs', {theInput: x});
};

var routes = { 
  get_main: getMain,
  post_results: postResults
};

module.exports = routes;
