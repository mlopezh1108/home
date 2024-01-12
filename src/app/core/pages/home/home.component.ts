import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('main')
  private readonly ref!: ElementRef;

  ngAfterViewInit(): void {
    window.onscroll = function (e) {
      console.log('Hola');
    };
    // this.ref.nativeElement.addEventListener('scroll', function () {
    //   const button = document.getElementById('start-btn')!;
    //   console.log(window.pageYOffset)
    //   window.scrollY > 100 ?
    //   button.classList.add('hidden'):
    //   button.classList.remove('hidden');

    //   console.log('Scroll!!');
    // });
  }
}
