import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedCategory } from '../../store/orderSlice';
import { MdSearch } from 'react-icons/md';
import { categories } from '../../data/categories';

const MenuHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const selectedCategory = useSelector(selectSelectedCategory);
  
  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  
  return (
    <div className="flex items-center justify-between mb-4 ml-2">
      <h2 className="text-xl font-semibold text-gray-800">
        {currentCategory ? `${currentCategory.name} Menu` : 'Menu'}
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Your Menu Here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm w-64"
        />
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>
    </div>
  );
};

export default MenuHeader;