// src/App.tsx
import React, { useState, useEffect } from 'react';
import DataGrid, { Column, MasterDetail, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css'; // Apply DevExtreme theme
import { fetchOrders } from './services/api'; // Import API service
import { Order } from './services/api'; // Import types
import OrderLineDetail from './components/OrderLineDetail'; // Import the detail component

const App: React.FC = () => {
  const [ordersData, setOrdersData] = useState<Order[]>([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const orders = await fetchOrders();
        setOrdersData(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    loadOrders();
  }, []);

  return (
    <div className="App">
      <h2>Master-Detail Grid Example (With FastAPI)</h2>
      <DataGrid dataSource={ordersData} keyExpr="OrderID" showBorders={true}>
        <Paging defaultPageSize={5} />

        {/* Master Grid Columns */}
        <Column dataField="OrderID" caption="Order ID" />
        <Column dataField="OrderDate" caption="Order Date" dataType="date" />
        <Column dataField="ExpectedDeliveryDate" caption="Expected Delivery Date" dataType="date" />
        <Column dataField="CustomerPurchaseOrderNumber" caption="Customer PO Number" />
        <Column dataField="IsUndersupplyBackordered" caption="Backordered" dataType="boolean" />

        {/* Detail Row Configuration */}
        <MasterDetail enabled={true} component={OrderLineDetail} />
      </DataGrid>
    </div>
  );
};

export default App;