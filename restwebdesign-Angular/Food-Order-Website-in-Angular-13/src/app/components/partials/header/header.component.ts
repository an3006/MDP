import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;

  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  ngOnInit(): void {
  }

  navigateToOriginalApp() {
    // Navigate to the external URL of your original app's home page
    window.location.href = 'http://127.0.0.1:5501/index.html';
  }
}
