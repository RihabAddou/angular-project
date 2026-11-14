import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  title = 'TaskFlow';
  canDelete = true;

  rename() {
    this.title = 'My tasks';
  }

  delete() {
    this.title = '';
    this.canDelete = false;
  }
}