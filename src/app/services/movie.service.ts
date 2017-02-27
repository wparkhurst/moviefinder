import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apikey: string;

  constructor(private _jsonp:Jsonp){
    this.apikey = '2922ea0474864d6d6f2915248d980cdc';
    console.log('MovieService Initialized...');
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey);
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-09-26&primary_release_date.lte=2016-10-30&api_key='+this.apikey);
      .map(res => res.json());
  }
}
