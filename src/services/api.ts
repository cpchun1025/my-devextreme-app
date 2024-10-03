// src/services/api.ts

export interface Order {
    OrderID: number;
    OrderDate: string;
    ExpectedDeliveryDate: string;
    CustomerPurchaseOrderNumber: string;
    IsUndersupplyBackordered: boolean;
  }
  
  export interface OrderLine {
    OrderLineID: number;
    OrderID: number;
    Description: string;
    Quantity: number;
    UnitPrice: number;
  }
  
  const API_URL = 'http://localhost:8000';
  
  // Fetch orders data from the FastAPI backend
  export const fetchOrders = async (): Promise<Order[]> => {
    const response = await fetch(`${API_URL}/orders`);
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    return await response.json();
  };
  
  // Fetch order lines data from the FastAPI backend for a specific order
  export const fetchOrderLines = async (orderID: number): Promise<OrderLine[]> => {
    const response = await fetch(`${API_URL}/orders/${orderID}/lines`);
    if (!response.ok) {
      throw new Error('Failed to fetch order lines');
    }
    return await response.json();
  };