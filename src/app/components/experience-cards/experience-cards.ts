import { Component } from '@angular/core';

interface Job {
  role: string;
  company: string;
  team?: string;
  period: string;
  url?: string;
  logo?: string;
  paragraphs: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience-cards',
  imports: [],
  templateUrl: './experience-cards.html',
})
export class ExperienceCards {
  protected readonly jobs: Job[] = [
    {
      role: 'AI Engineer',
      company: 'DataLane B.V.',
      team: 'Agentic AI Team',
      period: 'Aug 2026 – Present',
      url: 'https://www.datalane.nl/',
      logo: '/assets/images/datalane_logo.png',
      paragraphs: [
        'Supporting the delivery of AI and machine learning solutions in client and internal ' +
          'projects. My focus is on building, testing, and optimising ML use cases in the Celonis ' +
          'ML Workbench, which includes data preparation, feature engineering, model validation, ' +
          'and performance tuning.',
      ],
      tags: ['Machine Learning', 'Celonis', 'Feature Engineering', 'Agentic AI'],
    },
    {
      role: 'Data Scientist (Internship)',
      company: 'Pro-Act IT',
      period: 'Apr 2026 – Jul 2026',
      url: 'https://pro-act.nl/',
      logo: '/assets/images/proact_logo.png',
      paragraphs: [
        'Pro-Act IT delivers IT specialists to governmental organisations in the Netherlands, ' +
          'such as the Tweede Kamer, hospitals, and universities. As an intern, I explored where ' +
          'AI could benefit the company.',
        'As a result, I built data engineering pipelines, made a start on replacing their ' +
          'current ATS, and built a proof-of-concept semantic search system using a RAG architecture.',
      ],
      tags: ['RAG', 'Semantic Search', 'Data Pipelines', 'Python'],
    },
    {
      role: 'Software Engineer',
      company: 'Kompas Network B.V.',
      team: 'AI Research and Development',
      period: 'Jan 2024 – Feb 2026',
      url: 'https://www.kompaspublishing.nl/',
      logo: '/assets/images/kompas_logo.png',
      paragraphs: [
        'I developed APIs that use existing data to generate new insights or structured outputs. ' +
          'The largest was the contextual tagging service, used by hundreds of thousands of users ' +
          'daily. It classifies articles with multiple topics from the IAB, Google, and Meta ' +
          'taxonomies through vector search: topics are chosen by their semantic distance to an ' +
          "article's text. It also lets Kompas staff search for popular topics and returns similar articles.",
        'A background task queue keeps the database up to date. If someone visits a page that has ' +
          'not been classified yet, the queue gives it priority so it is ready for the next visitor.',
      ],
      tags: ['FastAPI', 'Vector Search', 'PostgreSQL', 'Celery', 'Docker'],
    },
  ];
}
