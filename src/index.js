import Task from './task.js';
import TaskList from './tasklist.js';
import Project from './project.js';
import { tools } from './tools.js';
import { render } from './render.js';
import './style.css';

const myProjects = [];
let currentProject;

function init() {
    //generate and log dummy data for development
    myProjects.push(tools.generateDummyProject());
    console.table(myProjects[0].taskLists[0].tasks);
    currentProject = 0;
    console.log(myProjects[currentProject]);
    render.renderProject(myProjects[currentProject]);
}

function newTaskListListener() {
    myProjects[currentProject].addTaskList(new TaskList("new task list"));
    render.renderLatestTaskList(myProjects[currentProject]);
}

document.getElementById("btn-new-tasklist").addEventListener("click", newTaskListListener);

init();

