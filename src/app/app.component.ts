import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToDo} from './todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'ToDo App';

  todoValue: string = " ";
  list: ToDo[] = [];

  ngOnInit() {
    this.todoValue = "";
    this.list = [];
  }

  addItem() {
    if(this.todoValue !== "") {
      const newItem: ToDo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }
}


