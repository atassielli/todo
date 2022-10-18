export default function mainbody() {
    let mainbodySection = document.querySelector('.mainBody');

    let mainbodyTitle = document.createElement('div');
    mainbodyTitle.textContent = "Tasks";
    mainbodyTitle.classList.add('sectionTitle');
    mainbodySection.appendChild(mainbodyTitle);

    let mainbodyContent = document.createElement('div');
    mainbodyContent.classList.add('content');
    mainbodySection.appendChild(mainbodyContent);
}