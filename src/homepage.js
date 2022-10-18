let webpage = document.querySelector('.webpage');
import gitIcon from '/src/gitIcon.png'

export default function homePage () {
    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'ToDoo';
    webpage.appendChild(header);

    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    webpage.appendChild(sidebar);

    let mainBody = document.createElement('div');
    mainBody.classList.add('mainBody');
    webpage.appendChild(mainBody);

    let footer = document.createElement('div');
    footer.classList.add('footer');
    webpage.appendChild(footer)
    
    let footerText = document.createElement('div');
    footerText.classList.add('footerText');
    footerText.textContent = 'Created by Anthony Tassielli 2022';
    footer.appendChild(footerText);

    let footerIcon = document.createElement('img');
    footerIcon.classList.add('footerIcon');
    footerIcon.src = gitIcon;
    footer.appendChild(footerIcon)

}