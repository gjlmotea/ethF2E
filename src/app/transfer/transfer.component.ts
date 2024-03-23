import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    FieldsetModule,
    PanelModule
  ],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent {
  value: any;

}
