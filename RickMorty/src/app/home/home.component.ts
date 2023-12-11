import { Component, OnInit } from '@angular/core';

import { CharactersComponent } from '../characters/characters.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharactersComponent, ProfileComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

}
