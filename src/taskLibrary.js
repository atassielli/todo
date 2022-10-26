import Task from "./taskfactory.js";
import displayTask from "./displayTask.js";
import getTodayDate from "./getTodayDate.js";
import getWeekDate from "./getWeekDate.js";

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
    get entireTaskList() {
       this.tasks.forEach(function(item){
        displayTask(item.name, item.date, item.project, item.priority)
       })
    }
    get todayTasks() {
        this.tasks.forEach(function(item) {
          if (item.date === getTodayDate()) {
            displayTask(item.name, item.date, item.project, item.priority);
          }
        })
    }
    get weekTasks() {
        console.log(getTodayDate()-7)
    }
}