import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task.model';

@Component({
    selector: 'journal-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.scss']
})
export class DailyComponent {
    constructor(public taskService: TaskService)
    {
    }

    public createTask()
    {
        let taskExample: Task = {
            description: "TESTE"
        };

        this.taskService.saveTask(taskExample).subscribe(x => {

        }, err => {

        });
    }
}
