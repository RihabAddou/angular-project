import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Task],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
}