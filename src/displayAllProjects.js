import { filteredProjectList } from "./createProject.js";
import { taskLog } from './newTaskCreation.js';

let content = document.querySelector('.content');

export default function displayAllProjects () {
    let content = document.querySelector('.content');
    content.textContent = ""
    let projectList = document.createElement('div');
    projectList.classList.add('projectList')
    content.appendChild(projectList)
    filteredProjectList().forEach(element => {
        showAllProjects(element)
    });
    let projectButton = document.querySelectorAll('.projectListButton');
        projectButton.forEach(button => {
        button.addEventListener('click', function () {
            taskLog.getOneProjectList(this.textContent)
        })
    })
}

export function showAllProjects (item) {
    let projectList = document.querySelector('.projectList')
    let project = document.createElement('button');
    project.classList.add('projectListButton');
    project.textContent = item;
    projectList.appendChild(project)
}


