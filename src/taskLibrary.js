import Task from "./taskFactory.js";
import displayTask from "./displayTask.js";
import getTodayDate from "./getTodayDate.js";
import getMonthDate from "./getMonthDate.js";
import createProject from "./createProject.js";
import { projectLibrary } from "./createProject.js";
import { filteredProjectList } from "./createProject.js";

export default class Library {
    constructor() {
        this.tasks = []
    }
    newTask(name, date, project, priority, status) {
        let t = new Task (name, date, project, priority, status);
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
        if(item.status === 'Open') {
            displayTask(item.name, item.date, item.project, item.priority, item.status)
        }
       })
    }
    get todayTasks() {
        this.tasks.forEach(function(item) {
          if (item.date == getTodayDate() && item.status === 'Open') {
            displayTask(item.name, item.date, item.project, item.priority, item.status);
          }
        })
    }
    get monthTasks() {
        this.tasks.forEach(function(item) {
            if (item.month === getMonthDate() && item.status === 'Open') {
              displayTask(item.name, item.date, item.project, item.priority, item.status);
            }
        })
    }
    get projectList() {
        this.tasks.forEach(function(item) {
            if (item.status === "Open") {
                projectLibrary.push(item.project)
            }
        })
        filteredProjectList();
    }

    getOneProjectList(project) {
        this.tasks.forEach(function (item) {
            if (item.project === project) {
                displayTask(item.name, item.date, item.project, item.priority, item.status)
            }
        })
    }
    

}