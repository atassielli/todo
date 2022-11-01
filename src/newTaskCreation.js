import Library from "./taskLibrary.js";
import Task from "./taskfactory.js";

export let taskLog = new Library

export default function taskCreation () {
    let name = document.querySelector('.name');
    let date = document.querySelector('.date');
    let project = document.querySelector('.project');
    let priority = document.querySelector('.priority');
    let status = 'open'

    taskLog.newTask(name.value, date.value, project.value, priority.value, status)

}