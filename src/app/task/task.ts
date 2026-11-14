import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { TitleColorPipe } from '../pipes/title-color-pipe';

@Component({
  selector: 'app-task',
  imports: [UpperCasePipe, DatePipe, TitleColorPipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  tasks = [
    { id: 1, title: 'Angular Task', dueDate: '2026-11-20' },
    { id: 2, title: 'Mail', dueDate: '2026-11-25' },
  ];
}