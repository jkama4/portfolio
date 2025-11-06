import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navpill } from './components/navpill/navpill';
import { PageFooter } from './components/page-footer/page-footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navpill, PageFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}

