import { Component } from '@angular/core';

@Component({ //involves same logic as C# Attributes, by declaring this, we tell the program AppComponent is a component
  selector: 'app-root', //thanks to this selector, we can show this component through the index.html file's <app-root> tag.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
