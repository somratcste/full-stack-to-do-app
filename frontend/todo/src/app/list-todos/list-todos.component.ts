import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.todoDataService.retrieveAllTodos('nazmul').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

}
