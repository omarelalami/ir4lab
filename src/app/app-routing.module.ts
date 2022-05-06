import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [{ path: 'landing',
component: TechnologiesComponent
},
{ path: 'services',
component: ServicesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
