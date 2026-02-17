import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
})
export class CardComponent {

  @Input()  title!: string;
  @Input()  subtitle!: string;
  @Input()  description!: string;
  @Input()  date!: string;
  

}
