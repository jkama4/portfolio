import { Component } from '@angular/core';
import { ExperienceCards } from '../../components/experience-cards/experience-cards';
import { EducationCards } from '../../components/education-cards/education-cards';
import { ProjectsCards } from '../../components/projects-cards/projects-cards';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCards, EducationCards],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

}
