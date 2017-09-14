import { Component, OnInit } from '@angular/core';
import {TasksService} from '../tasks.service'
import {Task} from '../../Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
// instantiate posts to an empty array
  tasks : Task[];
  title: string;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
     // Retrieve posts from the API
    this.taskService.getAllTasks().subscribe(task => {
      this.tasks = task;
    });
  }

  addtask(event){
    event.preventDefault();
    var newTask = {
      title : this.title,
      isDone : false
    }

    this.taskService.addtask(newTask).subscribe(task=>{
      this.tasks.push(task);
      this.title = '';
    });
  }

  deleteTask(id)
  {
    var tasks = this.tasks;
     this.taskService.deleteTask(id).subscribe(data=>{
     if(data.n == 1){
       for(var i=0;i< tasks.length; i++)
       {
         if(tasks[i]["_id"] == id)
         {
           tasks.splice(i,1)
         }
       }
     }
    });
  }
}
