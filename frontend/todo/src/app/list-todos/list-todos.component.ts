import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(private todoDataService: TodoDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('nazmul').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodo('nazmul', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} is Successfull !`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }

}
