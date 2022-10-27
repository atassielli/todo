export default class Task {
    constructor(name, date, project, priority, status) {
        this.name = name;
        this.date = date;
        this.month = date.slice(0,7)
        this.project = project;
        this.priority = priority;
        this.status = status;
    }
}
