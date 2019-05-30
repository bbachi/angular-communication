import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('child') childComp: ChildComponent;

  ngAfterViewInit() {
    this.childComp.title = 'title coming from parent';
  }

  ngOnInit() {
  }

}
