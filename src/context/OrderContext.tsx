import React, { createContext, useState, useEffect } from 'react';

// Define the shape of our Order data
export interface OrderItem {
  id: string;
  status: 'Pending' | 'In Progress' | 'Delivered';
  amount: number;
  date: string;
  address: string;
  items: string[];
}

interface OrderContextType {
  orders: OrderItem[];
  loading: boolean;
  fetchOrders: () => Promise<void>;
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

const MOCK_DATA: OrderItem[] = [
  { id: 'ORD-2026-001', status: 'Delivered', amount: 85.50, date: '2026-01-01', address: '123 Expo Lane, San Francisco, CA', items: ['Wireless Mouse', 'Mechanical Keyboard'] },
  { id: 'ORD-2026-002', status: 'In Progress', amount: 1200.00, date: '2026-01-03', address: '456 Native Blvd, New York, NY', items: ['Monitor Stand', '27-inch 4K Monitor'] },
  { id: 'ORD-2026-003', status: 'Pending', amount: 45.00, date: '2026-01-04', address: '789 Router St, Austin, TX', items: ['USB-C Multi-port Hub'] },
];

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      // Simulating network latency
      await new Promise(resolve => setTimeout(resolve, 1500));
      setOrders(MOCK_DATA);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, loading, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};