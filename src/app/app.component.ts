import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5197/api/User').subscribe({
      next: (response) => ((this.users = response), console.log(this.users)),
      error: (error) => console.log,
      complete: () => console.log('Solicitud completa'),
    });
  }

  title: string = 'DoctorApp';
  users: any;
}
