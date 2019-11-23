import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Todo} from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: any;

  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoDataService.retrieveTodo('nazmul', this.id).subscribe(
        data => {
          this.todo = data;
        }
      );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      this.todoDataService.createTodo('nazmul', this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['todos']);
          }
        );
    } else {
      this.todoDataService.updateTodo('nazmul', this.id, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos']);
          }
        );
    }
  }

}
