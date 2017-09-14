import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }

 // Get all posts from the API
  getAllTasks() {
    return this.http.get('/tasks/tasks')
      .map(res => res.json());
  }

  addtask(newTask){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/tasks/task', JSON.stringify(newTask),{headers : headers})
    .map(res=>res.json());
  }

  deleteTask(id)
  {
return this.http.delete('/tasks/task/'+id).map(res=>res.json())
  }
}
