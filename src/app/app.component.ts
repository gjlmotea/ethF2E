import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChipsModule, FormsModule, StepsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ethF2E';
  value: any;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Prompt',
        routerLink: 'prompt'
      },
      {
        label: 'Transfer',
        routerLink: 'transfer'
      },
      {
        label: 'Result',
        routerLink: 'result'
      }
    ];
  }
}
