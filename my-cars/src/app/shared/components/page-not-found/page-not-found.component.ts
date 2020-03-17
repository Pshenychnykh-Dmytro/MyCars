import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }
  private _pageNotFoundName: string;

  public initRandomPageNotFoundName(){
    let random = +Math.abs(Math.floor(Math.random() * 10) - 5);
    if(random===0)
      random++;
    this._pageNotFoundName = `assets/img/page-not-found${random}.gif`;    
  }
  
  public pageNotFoundName(): string{
    return this._pageNotFoundName;
  }


  ngOnInit(): void {
    this.initRandomPageNotFoundName();
    console.log(this._pageNotFoundName);
  }

}
