export default function newtask () {
    let container = document.querySelector('.mainbodyContent');

    container.textContent = ''

    let form = document.createElement('form');

    let getName = document.createElement('input');
    getName.setAttribute('type', 'text');
    form.appendChild(getName);

    let getDate = document.createElement('input');
    getDate.setAttribute('type', 'date');
    form.appendChild(getDate);

    let getProject = document.createElement('input');
    getProject.setAttribute('type', 'text');
    form.appendChild(getProject);

    let getPriority = document.createElement('input');
    getPriority.setAttribute('type', 'text');
    form.appendChild(getPriority);

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    form.appendChild(submit);

    container.appendChild(form);
}