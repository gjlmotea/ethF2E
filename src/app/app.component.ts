import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChipsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ethF2E';
  value: any;
}
