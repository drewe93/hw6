const todoList = require('../data/todo-list.js');
const sampleTable = require('../data/sample-table.json');



module.exports = function(app) {

 
  app.get('/api/todo', function(req, res) {
    res.json(todoList);
  });

 
  app.post('/api/todo', function(req,res){
    todoList.push(req.body);
      res.json(req.body);
    });
  


  app.get('/api/todo/:index', function(req, res) {
    res.json(todoList[req.params.index]);
  });

}