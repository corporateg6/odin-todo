export default class TaskList {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    addTask(aTask) {
        this.tasks.push(aTask);
    }

    removeTaskAt(index) {
        this.tasks.splice(index, 1);
    }
}