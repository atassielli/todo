import './style.css';
import homepage from './homepage.js';
import sidebar from './sidebar.js';
import mainbody from './mainbody.js';
import Task from './taskFactory.js';
import newtask from './newTaskForm.js';
import {completeFormValidation} from './newTaskValidation.js';
import {priorityFormValidation} from './newTaskValidation.js';
import Library from './taskLibrary.js';
import taskCreation from './newTaskCreation.js'
import {taskLog} from './newTaskCreation.js'
import visibleTaskList from './visibleTaskList.js';
import hideNewTaskForm from './hideNewTaskForm.js';
import getTodayDate from './getTodayDate.js';
import displayAllProjects from './displayAllProjects.js'

homepage();
sidebar();
mainbody();

const button = document.querySelector('.newTask');

button.addEventListener('click', () => {
    newtask();
    const submit = document.querySelector('.submit');
    submit.addEventListener('click', () => {
        if (completeFormValidation() === "pass" && priorityFormValidation() === "pass"){
            taskCreation();
        } else {
            return
        }
        hideNewTaskForm();
        taskLog.projectList;
        taskLog.entireTaskList;
    })
})

let projects = document.querySelector('.projectButton')

projects.addEventListener('click', function () {
    displayAllProjects();
})

let taskHome = document.querySelector('.taskButton');
let content = document.querySelector('.mainbodyContent');

taskHome.addEventListener('click', function () {
    content.textContent = ''
    taskLog.entireTaskList
})

let monthButton = document.querySelector('.monthButton');

monthButton.addEventListener('click', function () {
    content.textContent = ''
    taskLog.monthTasks
})

let todayButton = document.querySelector('.todayButton');

todayButton.addEventListener('click', function () {
    content.textContent = '';
    taskLog.todayTasks
})




