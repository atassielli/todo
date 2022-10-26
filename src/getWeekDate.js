export default function getWeekDate () {
    const date = new Date();

    let todayDay = date.getDate();
    let todayMonth = date.getMonth() +1;
    let todayYear = date.getFullYear();

    let todayFullDate = `${todayYear}-${todayMonth}-${todayDay}`

    let weekDay = date.getDate() +7;
    let weekMonth = date.getMonth() +1;
    let weekYear = date.getFullYear();

    let weekFullDate = `${weekYear}-${weekMonth}-${weekDay}`

    console.log(todayFullDate)
    console.log(weekFullDate)
    return todayFullDate
}