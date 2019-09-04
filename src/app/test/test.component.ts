import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

/*
 Stuctural Directives 
  Let us add or remove HTML elements from the DOM

  -ngIf
  -ngSwitch
  -ngFor
*/

@Component({
  selector: 'app-test',
  template: `
    
   <h2 *ngIf ="displayName; else elseBlock"> 
     Codevolution 
   </h2>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>

 

    <div  *ngIf = "displayName; then thenBlock; else elseBlock1">  </div>
    <ng-template #thenBlock>
       <h2> Codevolution  </h2>
    </ng-template>


    <ng-template #elseBlock1>
       <h2> Hidden  </h2>
    </ng-template>


    <div [ngSwitch] = "color">
      <div *ngSwitchCase ="'red'"> Your picked red color </div>
      <div *ngSwitchCase ="'blue'"> Your picked blue color </div>
      <div *ngSwitchCase ="'green'"> Your picked green color </div>
      <div *ngSwitchDefault> Pick again </div>
    </div>

    <div *ngFor ="let color of colors; index as i">
      <h2> {{i}} {{color}} </h2>
    </div>

    <div *ngFor ="let color of colors; first as f">
      <h2> {{f}} {{color}} </h2>
    </div>

    <div *ngFor ="let color of colors; last as l">
    <h2> {{l}} {{color}} </h2>
   </div>

   <div *ngFor ="let color of colors; odd as o">
    <h2> {{o}} {{color}} </h2>
   </div>


   <div *ngFor ="let color of colors; even as e">
    <h2> {{e}} {{color}} </h2>
   </div>


   <h2>  {{ "Hello" + name }} </h2>

   <button (click) = "fireEvent()"> Send Event </button>
  `,

  // <h2>  {{ "Hello" + parentData }} </h2>
  styles: []
})
export class TestComponent implements OnInit {

  public color ="blue";
  displayName =false;
  public colors = ["red", "blue", "green", "yellow"];


  // @Input() public parentData;

  @Input('parentData') public name; // alias  

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit("Hey Codevolution");
  }

}
