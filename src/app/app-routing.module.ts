import { useAnimation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [{ path: 'technologies',
component: TechnologiesComponent
},
{ path: 'services',
component: ServicesComponent
},
{ path: '',
component: AppComponent

},
{ path: 'contact',
component: ContactUsComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
