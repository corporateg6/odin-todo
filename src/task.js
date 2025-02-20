export default class Task {

    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    set title(aTitle) {
        this.title = aTitle;
    }

    get title() {
        return this.title;
    }

    set description(aDescription) {
        this.description = aDescription;
    }

    get description() {
        return this.description;
    }

    set dueDate(aDueDate) {
        this.dueDate = aDueDate;
    }

    get dueDate() {
        return this.dueDate;
    }

    set priority(aPriority) {
        this.priority = aPriority;
    }

    toggleComplete() {
        this.compelte = !this.compelte;
    }
    
}