import { Component, EventEmitter, Output } from '@angular/core';
import { SECTIONS } from '../../sections/sections';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Output()
  readonly selected = new EventEmitter<void>()
  sections = SECTIONS;
}
