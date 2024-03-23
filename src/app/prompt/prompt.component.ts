import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    ChipsModule
  ],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss'
})
export class PromptComponent {
  value: any;
  constructor() {
  }

}
