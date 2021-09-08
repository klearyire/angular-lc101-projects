import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   allButtons: string[] = [
      inactiveG: false,
      inactiveS: false,
      inactiveC: false
   ]

   constructor() { }

   ngOnInit() { }

   // activate(string: string) boolean {
   //    if (inactiveG === true || inactiveS === true || inactiveC === true) {

   //    }
   // }

}
