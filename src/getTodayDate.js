export default function getTodayDate () {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`
    return fullDate
}