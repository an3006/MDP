from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/update-final-amount', methods=['POST'])
def update_final_amount():
    data = request.get_json()


    
    received_total_price = data.get('totalPrice')
    
 
    cart_items = data.get('cartItems')
    

    print('Received Total Price:', received_total_price)


    print('Received Cart Items:', cart_items)



    response_data = {
        'message': 'Final amount and cart items updated successfully',
        'receivedTotalPrice': received_total_price, 
        'receivedCartItems': cart_items 
    }

    return jsonify(response_data), 200

if __name__ == '__main__':
    app.run(debug=True)
