const render = function(){

    runTodoQuery();
}


const runTodoQuery = function () {
   
    $.ajax({ url: '/api/todo', method: 'GET'})
        .then(function(todoList){});

   
}


const renderList = function (output, dataList) {
    const output = $(outputElement);
    for (let i = 0; i < dataList.length; i++) {

    }
}