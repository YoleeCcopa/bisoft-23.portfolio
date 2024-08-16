import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// CUSTOM COMPONENT
import { LandingComponent } from './pages/landing/landing.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { MissionComponent } from './pages/mission/mission.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'about-me', 
        component: AboutMeComponent
    },
    {
        path: 'home', 
        component: LandingComponent
    },
    {
        path: 'mission', 
        component: MissionComponent
    },
    {
        path: 'proyect', 
        component: ProyectsComponent
    },
    {
        path: 'skill', 
        component: SkillsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouter { }