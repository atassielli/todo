export default function getMonthDate () {
    const date = new Date();

    let month = date.getMonth() +1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}`
    return fullDate
}