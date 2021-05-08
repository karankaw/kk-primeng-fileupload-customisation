import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FileUploadDemoComponent } from './components/fileupload/fileuploaddemo.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
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
