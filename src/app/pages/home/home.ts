import { Component } from '@angular/core';
import { Skills } from './../../components/skills/skills';
import { About } from './../../components/about/about';
import { Hero } from './../../components/hero/hero';
import { Projects } from './../../components/projects/projects';
import { Formation } from './../../components/formation/formation';
import { Experience } from './../../components/experience/experience';
import { Languages } from './../../components/languages/languages';
import { Clients } from './../../components/clients/clients';
import { Contact } from './../../components/contact/contact';
import { Time } from './../../components/time/time';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Skills,
    Formation,
    Time,
    Hero,
    Clients,
    Contact,
    About,
    Experience,
    Languages,
    Projects,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
