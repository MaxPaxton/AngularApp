import { Component, OnInit } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Video } from '../Video';

@Component({
  selector: 'app-admin-video-create',
  templateUrl: './admin-video-create.component.html',
  styleUrls: ['./admin-video-create.component.css']
})
export class AdminVideoCreateComponent implements OnInit {

  video$: Object;
  videos: Video[];
  rentObject$: Object;

  constructor(private data: VideoDataService, private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => this.video$ = params.id);
  }

  ngOnInit() {
  }

  onCreate(event){
    const target  = event.target;
    const newVideo = {
      title: target.querySelector('#title').value,
      rating: target.querySelector('#rating').value,
      lenght: target.querySelector('#length').value, // dat typo doe
      genre: target.querySelector('#genre').value,
      rent: target.querySelector('#rent').value,
      director: target.querySelector('#director').value
    };
    this.data.createVideo(newVideo).subscribe(data => {
      console.log('create function called');
    });
    this.router.navigate(['/admin-videos'])
  }

}
