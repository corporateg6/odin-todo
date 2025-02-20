export default class Project {
    constructor(title) {
        this.title = title;
        this.taskLists = [];
    }

    addTaskList(aTaskList) {
        this.taskLists.push(aTaskList);
    }

    removeTaskListAt(index) {
        this.taskLists.splice(index, 1);
    }
}