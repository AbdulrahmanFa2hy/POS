import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdCreditCard, MdPayment } from 'react-icons/md';
import { FaPaypal } from 'react-icons/fa';

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState('credit');
  
  const options = [
    { id: 'credit', label: 'Credit Card', icon: MdCreditCard },
    { id: 'paypal', label: 'PayPal', icon: FaPaypal },
    { id: 'cash', label: 'Cash', icon: MdPayment },
  ];
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {options.map((option) => (
        <motion.button
          key={option.id}
          whileHover={{ y: -2 }}
          whileTap={{ y: 1 }}
          onClick={() => setSelectedOption(option.id)}
          className={`py-2 rounded-lg flex flex-col items-center justify-center transition-all ${
            selectedOption === option.id 
              ? 'bg-primary-50 border-primary-200 border' 
              : 'bg-gray-50 border-gray-200 border'
          }`}
        >
          <option.icon 
            className={`text-xl mb-1 ${
              selectedOption === option.id ? 'text-primary-500' : 'text-gray-500'
            }`} 
          />
          <span 
            className={`text-xs font-medium ${
              selectedOption === option.id ? 'text-primary-700' : 'text-gray-700'
            }`}
          >
            {option.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default PaymentOptions;