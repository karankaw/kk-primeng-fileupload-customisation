import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FileUploadDemoModule } from './components/fileupload/fileuploaddemo.module';
import { FileUploadDemoComponent } from './components/fileupload/fileuploaddemo.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FileUploadDemoModule
  ],
  declarations: [AppComponent,FileUploadDemoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
