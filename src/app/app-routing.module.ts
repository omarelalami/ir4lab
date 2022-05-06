import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [{ path: 'technologies',
component: TechnologiesComponent
},
{ path: 'services',
component: ServicesComponent
},
{ path: '',
component: HomeComponent
},
{ path: 'about',
component: AboutUSComponent
},
{ path: 'projects',
component: ProjectsComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
