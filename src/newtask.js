export default function newtask () {
    let container = document.querySelector('.mainbodyContent');

    container.textContent = ''

    let form = document.createElement('div');
    form.classList.add('taskform')

    let nameTitle = document.createElement('label');
    nameTitle.textContent = "Task Name:";
    nameTitle.setAttribute('for', 'name');
    form.appendChild(nameTitle);

    let getName = document.createElement('input');
    getName.setAttribute('type', 'text');
    getName.setAttribute('id', 'name');
    form.appendChild(getName);

    let dateTitle = document.createElement('label');
    dateTitle.textContent = "Due Date:";
    dateTitle.setAttribute('for', 'date');
    form.appendChild(dateTitle);

    let getDate = document.createElement('input');
    getDate.setAttribute('type', 'date');
    dateTitle.setAttribute('id', 'date');
    form.appendChild(getDate);

    let projectTitle = document.createElement('label');
    projectTitle.textContent = "Project:";
    projectTitle.setAttribute('for', 'project');
    form.appendChild(projectTitle);

    let getProject = document.createElement('input');
    getProject.setAttribute('type', 'text');
    getProject.setAttribute('id', 'project');
    form.appendChild(getProject);

    let priorityTitle = document.createElement('label');
    priorityTitle.textContent = "Priority:";
    priorityTitle.setAttribute('for', 'priority');
    form.appendChild(priorityTitle);

    let getPriority = document.createElement('input');
    getPriority.classList.add('priority');
    getPriority.setAttribute('type', 'text');
    getPriority.setAttribute('id', 'priority')
    form.appendChild(getPriority);

    let submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = 'Submit'
    form.appendChild(submit);

    container.appendChild(form);


}