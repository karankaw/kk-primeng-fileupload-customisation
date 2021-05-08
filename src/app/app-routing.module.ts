import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FileUploadDemoComponent } from './components/fileupload/fileuploaddemo.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: FileUploadDemoComponent }])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
