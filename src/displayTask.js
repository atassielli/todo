
export default function displayTask(name, date, project, priority, status) {
    let content = document.querySelector('.content');

    let taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    content.appendChild(taskContainer);

    let upperTaskContainer = document.createElement('div');
    upperTaskContainer.classList.add('upperTaskContainer');
    taskContainer.appendChild(upperTaskContainer);

    let lowerTaskContainer = document.createElement('div');
    lowerTaskContainer.classList.add('lowerTaskContainer');

    let taskName = document.createElement('div');
    taskName.textContent = `${name}`;
    taskName.classList.add('taskName');
    upperTaskContainer.appendChild(taskName);

    let taskDate = document.createElement('div');
    taskDate.textContent = `Due Date: ${date}`;
    taskDate.classList.add('taskDate');
    upperTaskContainer.appendChild(taskDate);

    let taskProject = document.createElement('div');
    taskProject.textContent = `Project: ${project}`;
    taskProject.classList.add('taskProject');
    lowerTaskContainer.appendChild(taskProject);

    let taskPriority = document.createElement('div');
    taskPriority.textContent = `Priority: ${priority}`;
    taskPriority.classList.add('taskPriority');

    function taskColor () {
        if (priority.toLowerCase() === 'low') {
            console.log('yellow')
            taskContainer.style.cssText = "border-left-color:yellow"
            lowerTaskContainer.appendChild(taskPriority);
        } else {
            console.log('red')
            taskContainer.style.cssText = "border-left-color:red"
            lowerTaskContainer.appendChild(taskPriority);
        }
    }

    taskColor();

    let expandTask = document.createElement('button');
    expandTask.classList.add('expandButton');
    expandTask.textContent = "Info";
    upperTaskContainer.appendChild(expandTask)

    let a = "off";

    expandTask.addEventListener('click', function (e) {
        if (a === "off"){
            taskContainer.appendChild(lowerTaskContainer)
            a = "on"
        } else if (a === 'on') {
            lowerTaskContainer.remove()
            a = "off"
        }
    })

    let taskStatus = document.createElement('button')
    taskStatus.classList.add('taskStatus');
    taskStatus.textContent = `Delete`
    upperTaskContainer.appendChild(taskStatus)

    taskStatus.addEventListener('click', function () {
        taskStatus.textContent = ''
        status = "Closed"
    })
}