import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  isSuccessful: boolean = false;
  txId = '';

  constructor(
    private route:ActivatedRoute,
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params)
    let data = this.route.snapshot.params;
    setTimeout(() => {
      data = {status: '1n', txid: '0x12345678900x12345678900x12345678900x12345678900x12345678900x12345678900x12345678900x1234567890'};
      this.isSuccessful = data['status'] === '1n';
      this.txId = data['txid'];
    }, 1000)

  }

}
