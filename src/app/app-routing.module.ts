import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'setup',
        loadChildren: () =>
          import('./components/fileupload/fileuploaddemo.component').then(
            m => m.FileUploadDemoComponent
          )
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
