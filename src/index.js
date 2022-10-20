import './style.css';
import homepage from './homepage.js';
import sidebar from './sidebar.js';
import mainbody from './mainbody.js';
import Task from './taskfactory.js';
import newtask from './newtask.js';
import newtaskValidation from './newtaskValidation.js';

homepage();
sidebar();
mainbody();

const button = document.querySelector('.newTask');

button.addEventListener('click', () => {
    newtask();
    const submit = document.querySelector('.submit');
    submit.addEventListener('click', () => {
    newtaskValidation();
    })
})

const test = new Task('Anthony', "October", "Test", "High", "Completed");

console.log(test.name);