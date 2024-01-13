import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sections = [
    { href: '#studies', icon: 'school', title: 'Formación' },
    { href: '#skills', icon: 'extension', title: 'Habilidades' },
    // { href: '#projects', icon: 'code', title: 'Proyectos' },
    { href: '#contact', icon: 'contact_page', title: 'Contacto' },
  ];
}
