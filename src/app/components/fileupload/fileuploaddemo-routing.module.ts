import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileUploadDemoComponent } from './fileuploaddemo.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: FileUploadDemoComponent }])
  ],
  exports: [RouterModule]
})
export class FileUploadDemoRoutingModule {}
