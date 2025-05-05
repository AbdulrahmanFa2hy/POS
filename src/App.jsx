import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
import OrderPanel from './components/order/OrderPanel';
import TableManagement from './components/TableManagement';
import { useState } from 'react';

// Placeholder components for new routes
const Orders = () => <div className="flex-1 flex items-center justify-center text-2xl font-bold">Orders Page</div>;
const Customers = () => <div className="flex-1 flex items-center justify-center text-2xl font-bold">Customers Page</div>;
const Settings = () => <div className="flex-1 flex items-center justify-center text-2xl font-bold">Settings Page</div>;

function App() {
  const [page, setPage] = useState('Menu');

  let Content = null;
  if (page === 'Menu') Content = <MainContent />;
  else if (page === 'Tables') Content = <TableManagement />;
  else if (page === 'Orders') Content = <Orders />;
  else if (page === 'Customers') Content = <Customers />;
  else if (page === 'Settings') Content = <Settings />;

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar onNavigate={setPage} />
      <div className="flex flex-1 overflow-hidden">
        {Content}
        {page === 'Menu' && (
          <div className="w-80 ">
            <OrderPanel />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;