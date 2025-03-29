import { Component } from '@angular/core';
import { CardComponent } from '../../UI/card/card.component';
import { APIServiceService } from '../../apiservice.service';

@Component({
  selector: 'app-product',
  imports: [CardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  products: any[] = [];
constructor(private apiservice:APIServiceService) { }
ngOnInit()
{this.apiservice.getproduct().subscribe((data:any)=>{this.products=data;
  
})
}
  
}


