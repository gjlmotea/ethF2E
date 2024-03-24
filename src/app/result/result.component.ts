import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  constructor(
    private messageService: MessageService,
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.data)
  }

}
