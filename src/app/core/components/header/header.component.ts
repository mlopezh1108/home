import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SECTIONS } from '../../sections/sections';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output()
  readonly menu = new EventEmitter<void>()

  sections = SECTIONS;
  html?: HTMLHtmlElement;
  dark = true;

  ngOnInit(): void {
    this.html = document.getElementsByTagName('html')[0];
  }

  changeColor() {
    this.dark = !this.dark;
    this.dark
      ? this.html?.classList.add('dark-theme')
      : this.html?.classList.remove('dark-theme');
  }
}
