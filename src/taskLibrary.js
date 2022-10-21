import Task from "./taskfactory.js";

export default class Library {
    constructor() {
        this.tasks = []
    }
    newTask(name, date, project, priority) {
        let t = new Task (name, date, project, priority);
        this.tasks.push(t);
        return t;
    }
    get allTasks() {
        return this.tasks
    }
    get numberOfTasks() {
        return this.tasks.length
    }
}