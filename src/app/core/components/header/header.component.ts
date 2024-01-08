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
    // console.log('fixing')
    // const header = document.getElementById('home-header') as HTMLHeadingElement;
    // if (window.scrollY > this.scrollPosition) header.style.position = 'fixed'
    // if (window.scrollY === 0) header.style.position = 'initial'
    // this.scrollPosition = window.scrollY;
  }
}

