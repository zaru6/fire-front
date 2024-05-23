import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  fileName: string = '';
  file?: File;
  private apiUrl = 'http://localhost:8080/api/upload/csv';

  constructor(private http: HttpClient) {}

  onUploadClick() {
    const fileInputElement = this.fileInput.nativeElement as HTMLInputElement;
    fileInputElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.fileName = this.file.name;
    }
  }

  onSubmit() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file, this.file.name);

      const token = localStorage.getItem("token");
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token // Add the token here
        }),
        reportProgress: true,
        observe: 'events' as const
      };

      this.http.post(this.apiUrl, formData, httpOptions).subscribe({
        next: (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total || 1; // Fallback to 1 to avoid division by zero
            const percentDone = Math.round(100 * event.loaded / total);
            console.log(`File is ${percentDone}% uploaded.`);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!');
          }
        },
        error: (err: HttpErrorResponse) => {
          console.error('Upload failed:', err.message);
        }
      });
    }
  }
}
