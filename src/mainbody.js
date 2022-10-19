export default function mainbody() {
    let mainbodySection = document.querySelector('.mainBody');

    let mainbodyTitle = document.createElement('div');
    mainbodyTitle.textContent = "Tasks";
    mainbodyTitle.classList.add('sectionTitle');
    mainbodyTitle.classList.add('.mainbodyTitle');
    mainbodySection.appendChild(mainbodyTitle);

    let mainbodyContent = document.createElement('div');
    mainbodyContent.classList.add('content');
    mainbodyContent.classList.add('mainbodyContent');
    mainbodySection.appendChild(mainbodyContent);

    let newTask = document.createElement('button');
    newTask.textContent = 'New Task';
    newTask.classList.add('newTask');
    mainbodySection.appendChild(newTask);
}