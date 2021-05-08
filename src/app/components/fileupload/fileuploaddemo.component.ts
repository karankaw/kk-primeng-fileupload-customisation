import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './fileuploaddemo.html',
  providers: []
})
export class FileUploadDemoComponent {
  uploadedFiles: any[] = [];

  constructor() {}
}
