import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherViewComponent } from './components/another-view/another-view.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: 'another/:id',
    component: AnotherViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
