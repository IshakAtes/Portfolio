import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PolicysComponent } from './policys/policys.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'policys', component: PolicysComponent },
    { path: 'imprint', component: ImprintComponent },
    // { path: '**', redirectTo: '' },
];
