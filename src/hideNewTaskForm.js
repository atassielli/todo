export default function hideNewTaskForm() {
    const form = document.querySelector('.taskform');
    form.textContent = ''
    form.style.cssText = "display: none"
}