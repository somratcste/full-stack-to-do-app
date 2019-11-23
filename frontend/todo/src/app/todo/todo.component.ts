import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    this.id = this.route.snapshot.params.id;
    this.todoDataService.retrieveTodo('nazmul', this.id).subscribe(
      data => {
        this.todo = data;
      }
    );
  }

  saveTodo() {
    this.todoDataService.updateTodo('nazmul', this.id, this.todo)
      .subscribe(
        data => {
          this.router.navigate(['/todos']);
        }
      );
  }

}
