import Task from "./taskfactory.js";
import displayTask from "./displayTask.js";

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
    get nameOfTasks() {
        for (let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i].name)
        }
    }
    get entireTaskList() {
       this.tasks.forEach(function(item){
        displayTask(item.name, item.date, item.project, item.priority)
       })
    }
}