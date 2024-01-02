import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public fun(): string{
    return "'Marvellous Infosystems'";
  }
     originalString: string = 'MARVELLOUS INFOSYSTEMS';
     bindingString: string = this.originalString;

     convertToUpperCase()
     {
      this.bindingString = this.originalString.toUpperCase();
     }
           
     convertToLowerCase()
     {
      this.bindingString = this.originalString.toLocaleLowerCase();
     }
  
title = "'Marvellous Infosystems'";
}
