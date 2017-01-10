global.list = [];

function addTask()
{
    list.push(
        {
            name: 'Task'.concat(list.length)
        }
    );
}

function getTasks()
{
    return list;
}

function deleteTask(index){
    if(index>=0){
        list.splice(index,1);
    }
}

module.exports = {
    add: addTask,
    get: getTasks,
    del: deleteTask
};