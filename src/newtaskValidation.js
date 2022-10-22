const name = document.querySelector('.name');
const date = document.querySelector('.date');
const project = document.querySelector('.project');
const priority = document.querySelector('.priority');

export function completeFormValidation() {
    const name = document.querySelector('.name');
    const date = document.querySelector('.date');
    const project = document.querySelector('.project');
    const priority = document.querySelector('.priority');

   if (name.value === "" || date.value === "" || project.value === "" || priority.value === '') {
        alert("You must fill out all fields to create task")
    } else {
        return "pass"
    }
}

export function priorityFormValidation() {
    const name = document.querySelector('.name');
    const date = document.querySelector('.date');
    const project = document.querySelector('.project');
    const priority = document.querySelector('.priority');

    let a = priority.value.toLowerCase()
    if (a !== 'high' && a !== 'low') {
        alert("Priority must be either high or low");
    }
    else {
        return "pass"
    }

}