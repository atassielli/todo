export let projectLibrary = []

export function checkProjectList(value, index, self) {
    return self.indexOf(value) === index
}

export function generateProjectList() {
    let projectNames = document.createElement('div')
    projectNames.classList.add('projecNames')
    projectNames.textContent = ''

    let filterList = projectLibrary.filter(checkProjectList)
    console.log(filterList)
    filterList.forEach(function(item){
        createProject(item);
    })
}


export default function createProject(project) {
    let sidebar = document.querySelector('.sidebar')

    let projectNames = document.querySelector('.projectNames')

    let newProject = document.createElement('button')
    newProject.classList.add('sidebarButton')
    newProject.classList.add('projectList')
    newProject.textContent = project
    projectNames.appendChild(newProject)
    sidebar.appendChild(projectNames)
}