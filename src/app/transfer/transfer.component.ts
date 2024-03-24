import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [
    ButtonModule,
    FormsModule,
    InputTextModule,
    FieldsetModule,
    PanelModule,
    ReactiveFormsModule
  ],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent {
  value: any;

  form: FormGroup = this.fb.group({
    networkFrom: ['', [Validators.required]],
    addressFrom: ['', [Validators.required]],
    networkTo: ['', [Validators.required]],
    addressTo: ['', [Validators.required]],
    amount: ['', [Validators.required]],
  });

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.data)
  }

  submit() {

  }
}
