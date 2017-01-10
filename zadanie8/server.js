const express = require('express');
const list = require('./todolist');

const app = express();

app.get('/api/tasks', (req, res) => 
{
    var tasks = list.get();
    var response = '';
    for(let i = 0; i<tasks.length; i++){
        response += tasks[i].name;
        response += '\n';
    }
    res.send(response);
});

app.post('/api/task', (req, res) => 
{
    list.add();
    res.send('Created task')
});

app.delete('/api/task/:index', (req, res) => 
{
    list.del(req.params.index);
    res.send('Deleted task');
});

app.listen(8080, () => console.log('Server started on port 8080'));