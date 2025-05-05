import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MdDashboard, 
  MdRestaurantMenu, 
  MdReceiptLong, 
  MdPeopleAlt,
  MdSettings,
  MdTableRestaurant
} from 'react-icons/md';

const Sidebar = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState(2);
  
  const sidebarItems = [
    { id: 2, icon: MdRestaurantMenu, label: 'Menu', title: 'Menu' },
    { id: 5, icon: MdTableRestaurant, label: 'Tables', title: 'Tables' },
    { id: 3, icon: MdReceiptLong, label: 'Orders', title: 'Orders' },
    { id: 4, icon: MdPeopleAlt, label: 'Customers', title: 'Customers' },
    { id: 6, icon: MdSettings, label: 'Settings', title: 'Settings' },
  ];
  
  return (
    <div className="bg-white h-full py-4 w-16 flex flex-col items-center border-r border-gray-200">
      <div className="mb-8 mt-2">
        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
          <MdDashboard className="text-white text-xl" />
        </div>
      </div>
      
      <div className="flex flex-col items-center space-y-6 flex-1">
        {sidebarItems.map((item) => (
          <div 
            key={item.id}
            className="relative"
            title={item.title}
            onClick={() => {
              setActiveItem(item.id);
              if (onNavigate) onNavigate(item.label);
            }}
          >
            {activeItem === item.id && (
              <motion.div
                layoutId="sidebar-indicator"
                className="absolute -left-4 top-1/2 -translate-y-1/2 h-8 w-1 bg-primary-500 rounded-r-md"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <button 
              className={`w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 ${
                activeItem === item.id ? 'text-primary-500' : 'text-gray-500'
              }`}
            >
              <item.icon className="text-xl" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-xs font-medium text-gray-600">CS</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;