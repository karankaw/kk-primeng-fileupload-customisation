import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDemoComponent } from './fileuploaddemo.component';
import { FileUploadDemoRoutingModule } from './fileuploaddemo-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
  imports: [
    CommonModule,
    FileUploadDemoRoutingModule,
    FileUploadModule,
    ToastModule,
    ButtonModule,
    TabViewModule,
    AppDemoActionsModule,
    AppCodeModule
  ],
  declarations: [FileUploadDemoComponent]
})
export class FileUploadDemoModule {}
