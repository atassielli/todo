import './style.css';
import homepage from './homepage.js';
import sidebar from './sidebar.js';
import mainbody from './mainbody.js';
import Task from './taskfactory.js';
import newtask from './newTaskForm.js';
import {completeFormValidation} from './newtaskValidation.js';
import {priorityFormValidation} from './newtaskValidation.js';
import Library from './taskLibrary.js';
import taskCreation from './newTaskCreation.js'
import {taskLog} from './newTaskCreation.js'


homepage();
sidebar();
mainbody();

const button = document.querySelector('.newTask');

button.addEventListener('click', () => {
    newtask();
    const submit = document.querySelector('.submit');
    submit.addEventListener('click', () => {
        completeFormValidation();
        priorityFormValidation();
        if (completeFormValidation() === "pass" && priorityFormValidation() === "pass"){
            taskCreation();
            console.log(taskLog.allTasks)
        } else {
            return
        }
    })
})
