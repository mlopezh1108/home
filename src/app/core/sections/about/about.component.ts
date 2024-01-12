import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  studies = [
    {
      title: 'Ing. en Sistemas Computacionales',
      subtitle: 'Instituto Politécnico Nacional',
      date: 'Diciembre 2020',
    },
    {
      title: 'Consultor Java',
      subtitle: 'CertificaTic',
      date: 'Curso 240 Hrs 2018',
    },
    {
      title: 'Principios S.O.L.I.D.',
      subtitle: 'Udemy',
      date: 'Curso 6.5 Hrs 2023',
    },
    {
      title: 'Angular: De cero a experto',
      subtitle: 'Udemy',
      date: 'Curso 50 Hrs 2023',
    },
  ];
}
