import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cards } from '../../components/cards/cards';
import { Marquee } from '../../components/marquee/marquee';

@Component({
  selector: 'app-homepage',
  imports: [Marquee, Cards, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  protected readonly toolGroups = [
    { label: 'Programming Languages', items: 'Python, R, Rust' },
    { label: 'Web Frameworks', items: 'Django, Angular, FastAPI' },
    { label: 'AI / ML Frameworks', items: 'PyTorch, Scikit-learn, Hugging Face' },
    { label: 'Data and Tools', items: 'Pandas, NumPy, PostgreSQL, SQLAlchemy, Docker, Git, Celery' },
    { label: 'Other', items: 'LM Studio, Ollama' },
  ];
}
