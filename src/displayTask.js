
export default function displayTask(name, date, project, priority, status) {
    let content = document.querySelector('.content');

    let taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    content.appendChild(taskContainer);

    let taskName = document.createElement('div');
    taskName.textContent = `${name}`;
    taskName.classList.add('taskName');
    taskContainer.appendChild(taskName);

    let taskDate = document.createElement('div');
    taskDate.textContent = `Due Date: ${date}`;
    taskDate.classList.add('taskDate');
    taskContainer.appendChild(taskDate);

    let taskProject = document.createElement('div');
    taskProject.textContent = `Project: ${project}`;
    taskProject.classList.add('taskProject');
    taskContainer.appendChild(taskProject);

    let taskPriority = document.createElement('div');
    taskPriority.textContent = `Priority: ${priority}`;
    taskPriority.classList.add('taskPriority');

    function taskColor () {
        if (priority.toLowerCase() === 'low') {
            console.log('yellow')
            taskContainer.style.cssText = "border-left-color:yellow"
            taskContainer.appendChild(taskPriority);
        } else {
            console.log('red')
            taskContainer.style.cssText = "border-left-color:red"
            taskContainer.appendChild(taskPriority);
        }
    }

    taskColor();

    let taskStatus = document.createElement('button')
    taskStatus.classList.add('taskStatus');
    taskStatus.textContent = `Delete`
    taskContainer.appendChild(taskStatus)

    taskStatus.addEventListener('click', function () {
        taskStatus.textContent = ''
        status = "Closed"
    })
}