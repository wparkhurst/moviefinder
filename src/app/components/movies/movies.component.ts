import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent  {
  popularList:Array<Object>;
  theatersList:Array<Object>;

  constructor(private _movieService: MovieService){
    this._movieService.getPopular().subscribe(res => {
      // console.log(res._body.results);
      this.popularList = res._body.results;
    });
    this._movieService.getInTheaters().subscribe(res => {
      // console.log(res._body.results);
      this.theatersList = res._body.results;
    });
  }
}
