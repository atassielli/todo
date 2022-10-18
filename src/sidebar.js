export default function sidebar() {
    let sidebarSection = document.querySelector('.sidebar');

    let sidebarTitle = document.createElement('div');
    sidebarTitle.classList.add('sectionTitle');
    sidebarTitle.textContent = "Navigation";
    sidebarSection.appendChild(sidebarTitle);

    let taskButton = document.createElement('button');
    taskButton.classList.add('sidebarButton');
    taskButton.textContent = "Tasks";
    sidebarSection.appendChild(taskButton);

    let todayButton = document.createElement('button');
    todayButton.classList.add('sidebarButton');
    todayButton.textContent = "Today";
    sidebarSection.appendChild(todayButton);

    let weekButton = document.createElement('button');
    weekButton.classList.add('sidebarButton');
    weekButton.textContent = "This Week";
    sidebarSection.appendChild(weekButton);

    let projectButton = document.createElement('button');
    projectButton.classList.add('sidebarButton');
    projectButton.textContent = "Projects";
    sidebarSection.appendChild(projectButton);

}