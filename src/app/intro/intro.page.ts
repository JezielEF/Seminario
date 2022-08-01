import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
  
    title:"Bienvenido a MusicApp",
    subtitle:"Kurt Cobain",
    img:"assets/images/music1.jpg",
    description:"La música es sinónimo de libertad, de tocar lo que quieras y como quieras, siempre que sea bueno y tenga pasión, que la música sea el alimento del amor.",
    icon:"musical-notes-outline",
  
    },

    {
  
      title:"Más",
      subtitle:"Luciano Pavarotti",
      img:"assets/images/music2.jpg",
      description:"Pienso que una vida dedicada a la música es una vida bellamente empleada, y es a eso a lo que he dedicado la mía.",
      icon:"musical-notes-outline",
    
    },

    {
  
      title:"Más",
      subtitle:"Magdalena Martínez",
      img:"assets/images/music3.jpg",
      description:"La música es el arte más directo, entra por el oído y va al corazón.",
      icon:"musical-notes-outline",
    
    },

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


