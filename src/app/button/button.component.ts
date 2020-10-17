import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  click = new EventEmitter();

  onClick() {
    this.click.emit(null);
  }
}
