export default function newtaskValidation() {
    const priority = document.querySelector('.priority');

    let a = priority.value.toLowerCase()
    console.log(a)
    if (a !== 'high' && a !== 'low') {
        alert("Priority must be either high or low");
    }
    else {
        return
    }
}