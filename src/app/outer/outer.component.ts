import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
  named:string = '';
  @Input() name:string[];
  @Output() eventFromOuter = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  eventFromInner(passed:string){
    this.named = passed;
    this.eventFromOuter.emit(this.named);
  }
}
