import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../store/orderSlice';
import { MdAdd, MdRemove } from 'react-icons/md';

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-start py-3 border-b border-gray-100 last:border-0"
    >
      <div className="h-16 w-16 rounded-lg bg-gray-100 overflow-hidden mr-3 flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <h3 className="font-medium text-gray-800">{item.name}</h3>
          <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(1)}</span>
        </div>
        
        <div className="text-xs text-gray-500 mb-2">
          {item.quantity}x
        </div>
        
        <div className="text-xs text-gray-500">
          Dont Add Vegetables
        </div>
      </div>
      
      
    </motion.div>
  );
};

export default OrderItem;