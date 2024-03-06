import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainSectionComponent } from '../../shared/main-section/main-section.component';
import { ProjectsSectionComponent } from '../../shared/projects-section/projects-section.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainSectionComponent, ProjectsSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
