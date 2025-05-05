import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCategory, selectSelectedCategory } from '../../store/orderSlice';
import { categories } from '../../data/categories';

const CategoryList = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);
  
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {categories.map((category) => (
        <motion.div
          key={category.id}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => dispatch(setSelectedCategory(category.id))}
          className={`flex items-center p-3 rounded-xl cursor-pointer border transition-all duration-200 ${
            selectedCategory === category.id 
              ? 'bg-primary-50 border-primary-200' 
              : 'bg-white border-gray-100 hover:border-gray-200'
          }`}
        >
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
            selectedCategory === category.id 
              ? 'bg-primary-100 text-primary-600' 
              : 'bg-gray-100 text-gray-700'
          }`}>
            <category.icon className="text-xl" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{category.name}</h3>
            <p className="text-xs text-gray-500">{category.count} Menu in Stock</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryList;