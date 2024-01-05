import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  scrollPosition: number = 0;
  listener!: any;

  ngOnInit() {
    document.addEventListener('scroll', this.#eventHandler);
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', this.#eventHandler);
  }

  #eventHandler = () => this.togglePicture();

  private togglePicture(): void {
    const img = document.getElementById('profilePicture');
    if (window.scrollY > this.scrollPosition) img!.style.display = 'none';
    if (window.scrollY === 0) img!.style.display = 'inline';
    this.scrollPosition = window.scrollY;
  }
}
