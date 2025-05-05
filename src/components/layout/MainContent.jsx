import CategoryList from '../categories/CategoryList';
import MenuHeader from '../menu/MenuHeader';
import MenuGrid from '../menu/MenuGrid';

const MainContent = () => {
  return (
    <div className="p-2 sm:p-4 flex-1 overflow-hidden flex flex-col">
      <CategoryList />
      <div className='overflow-y-auto scrollbar-hide'>
        <MenuHeader />
        <MenuGrid />
      </div>
    </div>
  );
};

export default MainContent;