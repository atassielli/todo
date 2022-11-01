export default function sidebar() {
    let sidebarSection = document.querySelector('.sidebar');

    let sidebarTitle = document.createElement('div');
    sidebarTitle.classList.add('sectionTitle');
    sidebarTitle.textContent = "Navigation";
    sidebarSection.appendChild(sidebarTitle);

    let taskButton = document.createElement('button');
    taskButton.classList.add('sidebarButton');
    taskButton.classList.add('taskButton')
    taskButton.textContent = "Tasks";
    sidebarSection.appendChild(taskButton);

    let todayButton = document.createElement('button');
    todayButton.classList.add('sidebarButton');
    todayButton.classList.add('todayButton');
    todayButton.textContent = "Today";
    sidebarSection.appendChild(todayButton);

    let monthButton = document.createElement('button');
    monthButton.classList.add('sidebarButton');
    monthButton.classList.add('monthButton');
    monthButton.textContent = "This Month";
    sidebarSection.appendChild(monthButton);

    let projectButton = document.createElement('button');
    projectButton.classList.add('sidebarButton');
    projectButton.classList.add('projectButton')
    projectButton.textContent = "Projects";
    sidebarSection.appendChild(projectButton);

}