import { Component, OnInit } from '@angular/core';
import { VideoDataService} from '../video-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { CustomerDataServiceService } from '../customer-data-service.service';
import { Video } from './Video';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  providers: [CustomerDataServiceService]
})
export class VideoDetailsComponent implements OnInit {

  video$: Object;
  customers$;
  videos: Video[];
  rentObject$: Object;

  constructor( private data: VideoDataService, private route: ActivatedRoute,
     private customer: CustomerDataServiceService, private router: Router ) {
    this.route.params.subscribe( params => this.video$ = params.id);
   }

  ngOnInit() {
    this.data.getVideoDetails(this.video$).subscribe(
      data => this.video$ = data
    );
    this.customer.getUsers().subscribe(
      data => {
      this.customers$ = data;
      console.log(data);
    });
  }

  onRent(video) {
    const _video = {
      _id: video._id,
      title: video.title,
      rating: video.rating,
      lenght: video.lenght,
      genre: video.genre,
      rent: 'not available'
    };
    this.data.rentVideo(_video).subscribe(data => {
      video.rent = 'not available';
      console.log('on rent function called');
      this.refresh();
     });
  }

  refresh() {
    this.router.navigate(['/']);
    this.ngOnInit();
  }

}


