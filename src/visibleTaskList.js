export default function visibleTaskList (a) {
    let container = document.querySelector('.mainbodyContent');

    let test = document.createElement('div');
    test.textContent = `${a}`;
    test.classList.add('test');
    container.appendChild(test);
}