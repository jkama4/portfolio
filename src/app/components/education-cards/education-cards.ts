import { Component } from '@angular/core';

interface Study {
  degree: string;
  school: string;
  department?: string;
  period: string;
  note?: string;
  url?: string;
  logo?: string;
  link?: { label: string; href: string };
}

@Component({
  selector: 'app-education-cards',
  imports: [],
  templateUrl: './education-cards.html',
})
export class EducationCards {
  protected readonly studies: Study[] = [
    {
      degree: 'MSc Data Science',
      school: 'University of Amsterdam',
      logo: '/assets/images/uva_logo.png',
      period: 'Sep 2026 – Present',
      url: 'https://www.uva.nl/en/programmes/masters/data-science/data-science.html',
    },
    {
      degree: 'BSc Artificial Intelligence',
      school: 'Vrije Universiteit Amsterdam',
      logo: '/assets/images/vu_logo.png',
      department: 'Computer Science Department',
      period: 'Sep 2023 – Jul 2026',
      url: 'https://vu.nl/en/education/bachelor/artificial-intelligence',
      link: {
        label: 'Report card',
        href: 'https://github.com/jkama4/curriculum-vitae/blob/main/vu_grades.pdf',
      },
    },
    {
      degree: 'BSc Applied Mathematics',
      school: 'TU Delft',
      logo: '/assets/images/tudelft_logo.png',
      department: 'Physics and Mathematics Department',
      period: 'Sep 2022 – Feb 2023',
      note: 'Not completed',
      url: 'https://www.tudelft.nl/en/onderwijs/opleidingen/bachelors/tw/bachelor-of-applied-mathematics',
    },
    {
      degree: 'High School (VWO)',
      school: 'Kennemer College',
      logo: '/assets/images/kennemer_logo.png',
      department: 'Profile: Nature & Technology (N&T)',
      period: '2016 – 2022',
    },
  ];
}
