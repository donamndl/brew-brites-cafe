import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
from bson import ObjectId

# 1. Setup
load_dotenv()
app = Flask(__name__)
CORS(app) # This allows your React app to connect

# 2. Connect to MongoDB
client = MongoClient(os.getenv("MONGO_URI"))
db = client.cafe_db
orders_collection = db.orders

@app.route('/')
def home():
    return "Cafe Backend is Running!"

# 3. Route to Receive Orders
@app.route('/api/orders', methods=['POST'])
def create_order():
    try:
        data = request.json
        
        # Create the order object
        new_order = {
            "customer_name": data.get('customer_name'),
            "customer_email": data.get('customer_email'),
            "items": data.get('items'),
            "total": data.get('total'),
            "status": "pending"
        }
        
        # Save to MongoDB
        result = orders_collection.insert_one(new_order)
        
        return jsonify({
            "success": True, 
            "message": "Order placed!", 
            "order_id": str(result.inserted_id)
        }), 201
        
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)