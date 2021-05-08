import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadDemoRoutingModule } from './fileuploaddemo-routing.module';
import { FileUploadDemoComponent } from './fileuploaddemo.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadDemoRoutingModule,
    FileUploadModule,
    ToastModule,
    ButtonModule,
    TabViewModule
  ],
  declarations: [FileUploadDemoComponent]
})
export class FileUploadDemoModule {}
