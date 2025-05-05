import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { 
  selectOrderItems, 
  selectOrderTotal, 
  selectTax, 
  selectFinalTotal 
} from '../../store/orderSlice';
import OrderItem from './OrderItem';
import PaymentOptions from './PaymentOptions';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeIn' } },
};

const OrderPanel = () => {
  const orderItems = useSelector(selectOrderItems);
  const orderTotal = useSelector(selectOrderTotal);
  const tax = useSelector(selectTax);
  const finalTotal = useSelector(selectFinalTotal);
  
  return (
    <div className="bg-white h-full rounded-lg border border-gray-200 p-2 sm:p-4 flex flex-col w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        {/* <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Invoice</h2> */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Cashier" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-xs sm:text-sm">Courtney Henry</p>
            <p className="text-xs text-gray-500">Cashier ID 80914</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 bg-primary-100 text-primary-600 rounded text-xs sm:text-sm font-medium">
            Save
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <AnimatePresence initial={false}>
          {orderItems.length > 0 ? (
            orderItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <OrderItem item={item} />
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }}
              className="flex flex-col items-center justify-center h-40 sm:h-64 text-gray-400"
            >
              <p>No items in order</p>
              <p className="text-xs sm:text-sm">Add items from the menu</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {orderItems.length > 0 && (
        <div className="mt-3 sm:mt-4  pt-3 sm:pt-2">
          {/* <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Payment Summary</h3> */}
          <div className="space-y-2 mb-3 sm:mb-4">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-gray-600">Sub Total</span>
              <span className="font-medium text-gray-800">${orderTotal.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium text-gray-800">${tax.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base pt-2 border-t">
              <span className="font-medium text-gray-700">Total Payment</span>
              <span className="font-semibold text-gray-900">${finalTotal.toFixed(1)}</span>
            </div>
          </div>
          
          <PaymentOptions />
          
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 sm:py-3 rounded-lg mt-3 sm:mt-4 transition-colors text-sm sm:text-base">
            Place An Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderPanel;