import { 
  MdBreakfastDining, 
  MdRestaurantMenu, 
  MdDinnerDining, 
  MdRamenDining,
  MdIcecream,
  MdLocalDrink
} from 'react-icons/md';
import { GiSushis } from 'react-icons/gi';

export const categories = [
  {
    id: 1,
    name: 'Breakfast',
    icon: MdBreakfastDining,
    count: 12,
  },
  {
    id: 2,
    name: 'Lunch',
    icon: MdRestaurantMenu,
    count: 12,
  },
  {
    id: 3,
    name: 'Dinner',
    icon: MdDinnerDining,
    count: 12,
  },
  {
    id: 4,
    name: 'Soup',
    icon: MdRamenDining,
    count: 12,
  },
  {
    id: 5,
    name: 'Desserts',
    icon: MdIcecream,
    count: 12,
  },
  {
    id: 6,
    name: 'Side Dish',
    icon: GiSushis,
    count: 12,
  },
  {
    id: 7,
    name: 'Appetizer',
    icon: GiSushis,
    count: 12,
  },
  {
    id: 8,
    name: 'Beverages',
    icon: MdLocalDrink,
    count: 12,
  },
];