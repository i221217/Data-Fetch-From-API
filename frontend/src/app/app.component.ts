import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service'; // ✅ import your service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {} // ✅ inject your service here

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.apiService.getPosts()
      .subscribe({
        next: (data) => {
          console.log('Posts fetched:', data); // Check the fetched data in console
          if (data && Array.isArray(data)) {
            this.posts = data; // If data is directly an array, assign it
          } else {
            console.warn('No posts found in data.');
            this.posts = []; // If no posts are found, set it to empty
          }
          console.log('Posts array:', this.posts); // Ensure posts are set
        },
        error: (error) => {
          console.error('Error fetching posts:', error);
        }
      });
  }
  
  
  
  
}