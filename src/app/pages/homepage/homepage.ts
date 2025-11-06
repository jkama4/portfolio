import { Component } from '@angular/core';
import { Marquee } from '../../components/marquee/marquee';
import { RouterLink } from '@angular/router';
import { Cards } from '../../components/cards/cards';
import { Navpill } from '../../components/navpill/navpill';

@Component({
  selector: 'app-homepage',
  imports: [Marquee, Cards],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
