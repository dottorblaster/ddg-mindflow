
/*
 * GET home page.
 */
var ddg = require('ddg');
var res_array = [];

exports.index = function(req, res){
  myquery = (req.query.my_query ? req.query.my_query : '');
  if (!Object.keys(req.query).length) {
    res.render('index', { title: 'Mindflow' });
  }
  else if (req.query.my_query.length>0){
    ddg.query(myquery, function(err, data){
      res_array = data.RelatedTopics; //related topics is a list of 'related answers'
      res.render('results', {title: 'Mindflow', searched: myquery, resource: res_array});
    });
  }
  else {
    console.log('nice');
    res.render('index', { title: 'Mindflow' });
  }
};
