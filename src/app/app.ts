import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Task } from './task/task';
import { Courses } from './courses/courses';
import { Catalogue } from './catalogue/catalogue';
import { Panier } from './panier/panier';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Task, Courses, Catalogue, Panier],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('test');
}