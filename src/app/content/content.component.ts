import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  links;
  images;

  constructor() { 
    this.links = [
      { name: 'Link 1'},
      { name: 'Link 2'},
      { name: 'Link 3'}
    ]

    this.images = {
      "man": {
        heading: 'Man Image',
        description: 'Image of a man.',
        path: 'assets/images/man.jpg'
      },
      "wizard": {
        heading: 'Wizard Image',
        description: 'Image of a wizard.',
        path: 'assets/images/wizard.jpg'
      },
      "beast": {
        heading: 'Beast Image',
        description: 'Image of a beast.',
        path: 'assets/images/beast.jpg'
      }
    }
  }

  ngOnInit() {
  }

}
