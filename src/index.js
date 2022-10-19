import './style.css';
import homepage from './homepage.js';
import sidebar from './sidebar.js';
import mainbody from './mainbody.js';
import Task from './taskfactory.js';
import newtask from './newtask.js';

homepage();
sidebar();
mainbody();

const button = document.querySelector('.newTask');

console.log(button)

button.addEventListener('click', () => {
    newtask();
})

const test = new Task('Anthony', "October", "Test", "High", "Completed");

console.log(test.name);