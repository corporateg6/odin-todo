import Task from './task.js';
import TaskList from './tasklist.js';
import Project from './project.js';
import { tools } from './tools.js';

const myProjects = [];

function init() {
    //generate and log dummy data for development
    myProjects.push(tools.generateDummyProject());
    console.table(myProjects[0].taskLists[0].tasks);
}

init();

