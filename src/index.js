import './style.css';
import homepage from './homepage.js';
import sidebar from './sidebar.js';
import mainbody from './mainbody.js';
import Task from './taskfactory.js';
import newtask from './newTaskForm.js';
import newtaskValidation from './newtaskValidation.js';
import Library from './taskLibrary';
import taskCreation from './newTaskCreation'

homepage();
sidebar();
mainbody();

const button = document.querySelector('.newTask');

button.addEventListener('click', () => {
    newtask();
    const submit = document.querySelector('.submit');
    submit.addEventListener('click', () => {
    newtaskValidation();
    taskCreation();
    })
})

