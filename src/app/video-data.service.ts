import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) {
    console.log('Video Data Service Initialized...');
  }

  getVideos() {
    return this.http.get('http://localhost:3000/api/videos');
  }

  getVideoDetails(videoId) {
    return this.http.get('http://localhost:3000/api/videos/' + videoId);
  }
}
