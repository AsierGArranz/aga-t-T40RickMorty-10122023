import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HomeComponent, CharactersComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RickMorty';
  saludo = 'hola'
}
