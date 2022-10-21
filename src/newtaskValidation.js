export default function newtaskValidation() {
    const name = document.querySelector('.name');
    const date = document.querySelector('.date');
    const project = document.querySelector('.project');
    const priority = document.querySelector('.priority');

    if (name.value === "" || date.value === "" || project.value === "" || priority.value === '') {
        alert("You must fill out all fields to create task")
    } else {
        return
    }

    let a = priority.value.toLowerCase()
    if (a !== 'high' && a !== 'low') {
        alert("Priority must be either high or low");
    }
    else {
        return
    }


}