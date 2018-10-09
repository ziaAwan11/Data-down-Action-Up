import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  names = ['Riaz','Fayyaz','Zia'];
  named:string = '';
  constructor() { }

  ngOnInit() {
  }
  eventFromOuter(passed:string){
    this.named = passed;
  }

}
