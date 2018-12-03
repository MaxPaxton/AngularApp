import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Video } from './video-details/Video';
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


  rentVideo(video): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      console.log('we made it to the service' + video.title);
    return this.http.put('http://localhost:3000/api/videos/' + video._id, JSON.stringify(video), httpOptions).pipe(
      tap( rentVideo => console.log(`updated video = ${JSON.stringify(rentVideo)} `))
    );
  }
}
