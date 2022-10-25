export default function displayTask(name, date, project, priority) {
    let content = document.querySelector('.content');

    let taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    content.appendChild(taskContainer);

    let taskName = document.createElement('div');
    taskName.textContent = `${name}`;
    taskName.classList.add('taskName');
    taskContainer.appendChild(taskName);

    let taskDate = document.createElement('div');
    taskDate.textContent = `${date}`;
    taskDate.classList.add('taskDate');
    taskContainer.appendChild(taskDate);

    let taskProject = document.createElement('div');
    taskProject.textContent = `${project}`;
    taskProject.classList.add('taskProject');
    taskContainer.appendChild(taskProject);

    let taskPriority = document.createElement('div');
    taskPriority.textContent = `${priority}`;
    taskPriority.classList.add('taskPriority');
    taskContainer.appendChild(taskPriority);
}