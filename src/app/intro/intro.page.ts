import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
  
    title:"Más",
    subtitle:"Ludwig van Beethoven",
    img:"assets/images/music4.jpg",
    description:"La música constituye una revelación más alta que ninguna filosofía.",
    icon:"musical-notes-outline",
  
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}


