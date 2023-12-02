import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  totalPrice: number = 0;

  constructor(private cartService: CartService, private http: HttpClient) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      this.calculateTotalPrice();
    });
  }
 
  ngOnInit(): void {
   
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  
  calculateTotalPrice() {
    if (this.cart && this.cart.items) {
      this.totalPrice = this.cart.items.reduce((total, cartItem) => {
        return total + cartItem.price;
      }, 0);
      
    } else {
      this.totalPrice = 0;
    }
  }

  
  sendTotalPriceToServer() {
  
    const cartItemsWithQuantities: { name: string, quantity: number }[] = this.cart.items.map((cartItem) => ({
      name: cartItem.food.name,
      quantity: cartItem.quantity
    }));
  
    const data = {
      totalPrice: this.totalPrice,
      cartItems: cartItemsWithQuantities,
    };
  
    this.http.post('http://localhost:5000/api/update-final-amount', data)
      .subscribe((response) => {
        console.log('Total price and cart items updated:', response);
      }, (error) => {
        console.error('Error updating total price and cart items:', error);
      });
  }
   
    proceedToCheckout() {
     
      this.sendTotalPriceToServer();
      
      
    }
 }
