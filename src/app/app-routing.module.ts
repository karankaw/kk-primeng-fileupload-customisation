import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
       {path: '', component: HomeComponent},
        {path: '/fileUploadDemo',
        loadChildren: () =>
          import('./components/fileupload/fileuploaddemo.module').then(
            m => m.FileUploadDemoModule
          )
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
