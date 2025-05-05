import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { addToOrder, selectSelectedCategory, selectOrderItems, decreaseQuantity } from '../../store/orderSlice';
import { menuItems } from '../../data/menuItems';
import { MdAdd, MdRemove } from 'react-icons/md';

const MenuGrid = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);
  const orderItems = useSelector(selectOrderItems);
  
  const filteredItems = menuItems.filter(item => item.categoryId === selectedCategory);
  
  const getOrderQuantity = (itemId) => {
    const found = orderItems.find((order) => order.id === itemId);
    return found ? found.quantity : 0;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-2" style={{ maxHeight: 'calc(100vh - 220px)' }}>
      {filteredItems.map((item) => {
        const quantity = getOrderQuantity(item.id);
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[250px] sm:min-h-[300px]"
          >
            <div className="relative h-36 sm:h-40 overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-gray-800 mb-1 text-base sm:text-lg md:text-xl">{item.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500 h-8 overflow-hidden">{item.description}</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                  ${item.price.toFixed(1)}
                </span>
                <div className="flex items-center gap-1">
                  {quantity > 0 && (
                    <>
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 border border-gray-300 hover:bg-gray-300 transition-colors"
                        aria-label={`Decrease ${item.name}`}
                      >
                        <MdRemove />
                      </button>
                      <span className="mx-1 text-xs sm:text-sm font-semibold w-5 text-center">
                        {quantity}
                      </span>
                    </>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => dispatch(addToOrder(item))}
                    className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white shadow-button"
                    aria-label={`Add ${item.name}`}
                  >
                    <MdAdd />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MenuGrid;