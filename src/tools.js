import Task from './task.js';
import TaskList from './tasklist.js';
import Project from './project.js';

export const tools = (function() {

    function generateDummyProject() {
        const newProject = new Project("default");
        
        let myTasks = new TaskList("list1");
        
        let task1 = new Task("task1");//, "task1 desc", "task1 date", 1);
        let task2 = new Task("task2");//, "task2 desc", "task2 date", 2);
        let task3 = new Task("task3");//, "task3 desc", "task3 date", 3);
        task1.toggleComplete();
        
        myTasks.addTask(task1);
        myTasks.addTask(task2);
        myTasks.addTask(task3);

        newProject.addTaskList(myTasks);

        let myTasks2 = new TaskList("list2");
        myTasks2.addTask(task1);

        newProject.addTaskList(myTasks2);

        return newProject;
    }

    return {
        generateDummyProject,
    };

})();