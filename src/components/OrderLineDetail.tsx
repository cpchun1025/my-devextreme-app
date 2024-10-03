// src/components/OrderLineDetail.tsx
import React, { useState, useEffect } from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { fetchOrderLines } from '../services/api'; // Import API service
import { Order, OrderLine } from '../services/api'; // Import types

interface OrderLineDetailProps {
  data: { data: Order };
}

const OrderLineDetail: React.FC<OrderLineDetailProps> = ({ data }) => {
  const [orderLines, setOrderLines] = useState<OrderLine[]>([]);
  const orderID = data.data.OrderID;

  useEffect(() => {
    const loadOrderLines = async () => {
      const lines = await fetchOrderLines(orderID);
      setOrderLines(lines);
    };
    loadOrderLines();
  }, [orderID]);

  return (
    <DataGrid dataSource={orderLines} showBorders={true}>
      <Column dataField="Description" caption="Description" />
      <Column dataField="Quantity" caption="Quantity" />
      <Column dataField="UnitPrice" caption="Unit Price" format={{ type: 'currency' }} />
    </DataGrid>
  );
};

export default OrderLineDetail;