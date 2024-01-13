import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatSidenavModule
  ],
})
export class CoreModule { }
