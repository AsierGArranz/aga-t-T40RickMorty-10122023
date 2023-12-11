import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: 'app-home', component: HomeComponent},
    {path: 'app-characters', component: CharactersComponent},
    {path: 'app-profile', component: ProfileComponent},
    // // {path: '**', component: PageNotFoundComponent},

];
