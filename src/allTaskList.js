import {taskLog} from './newTaskCreation.js'
import visibleTaskList from './visibleTaskList.js'

export default function displayAllTasks () {
    for (let i = 0; i < taskLog.allTasks.length; i++) {
        console.log(taskLog.entireTaskList)
        visibleTaskList(`${taskLog.this.name}`)
    }
}