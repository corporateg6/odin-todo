import TaskList from './tasklist.js';
import Project from './project';
import Task from './task.js';

export const render = (function() {

    function renderProject(pj) {
        const tlsDOM = document.querySelector(".task-lists");
        //clear out any existing html
        tlsDOM.innerHTML = "";

        //may not need .array here
        pj.taskLists.forEach((tl) => { 
            tlsDOM.appendChild(renderTaskList(tl));
        });
    }

    function renderTaskList(tl) {
        const tlDOM = document.createElement("div");
        tlDOM.classList.add("task-list");
        tlDOM.textContent = tl.title;
        const tasksDOM = document.createElement("div");
        tasksDOM.classList.add("tasks");
        const btnNewTask = document.createElement("button");
        btnNewTask.textContent = 'New Task';
        tl.tasks.forEach((tsk) => {
            tasksDOM.appendChild(renderTask(tsk));
        });
        tlDOM.appendChild(tasksDOM);
        tlDOM.appendChild(btnNewTask);
        return tlDOM;
    }

    function renderTask(tsk) {
        const tskDOM = document.createElement("div");
        tskDOM.classList.add("task");
        const tskTitleDOM = document.createElement("div");
        tskTitleDOM.classList.add("task-title");
        tskTitleDOM.textContent = tsk.title;
        const tskIsCompDOM = document.createElement("div");
        tskIsCompDOM.classList.add("task-iscomplete");
        tskIsCompDOM.textContent = `Complete? ${tsk.isComplete}`;
        tskDOM.appendChild(tskTitleDOM);
        tskDOM.appendChild(tskIsCompDOM);
        return tskDOM;
    }

    function renderLatestTaskOnList(aProject, listIndex) {
        const aList = aProject.taskLists[listIndex];
        const newTaskDOM = renderTask(aList[aList.length-1]);
        const tlsDOMSelector = document.querySelector(".task-lists");
        const tasksDOMSelector = tlsDOMSelector.children[listIndex];
        tasksDOMSelector.appendChild(newTaskDOM);
    }

    function renderLatestTaskList(aProject) {
        const tlsDOMSelector = document.querySelector(".task-lists");
        const newTLDOM = renderTaskList(aProject.taskLists[aProject.taskLists.length-1]);
        tlsDOMSelector.appendChild(newTLDOM);
    }

    return {
        renderProject,
        renderLatestTaskOnList,
        renderLatestTaskList,
    }
})();