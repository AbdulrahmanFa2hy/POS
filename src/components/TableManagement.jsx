import { useSelector, useDispatch } from 'react-redux';
import { selectTables, selectSelectedTables, selectTable, deselectTable } from '../store/tableSlice';
import { MdCheckCircle, MdError, MdAccessTime, MdClose } from 'react-icons/md';

const statusColors = {
  available: 'bg-green-100 text-green-600',
  reserved: 'bg-red-100 text-red-600',
  filled: 'bg-orange-100 text-orange-600',
  soon: 'bg-yellow-100 text-yellow-600',
};

const statusLabels = {
  available: 'Available',
  reserved: 'Booked',
  filled: 'Filled',
  soon: 'Available Soon',
};

const TableManagement = () => {
  const tables = useSelector(selectTables);
  const selectedTables = useSelector(selectSelectedTables);
  const dispatch = useDispatch();

  const handleTableClick = (id) => {
    if (selectedTables.includes(id)) {
      dispatch(deselectTable(id));
    } else {
      dispatch(selectTable(id));
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-6 overflow-auto">
      <div className="mb-6">
        {/* <h1 className="text-2xl font-bold mb-2">Choose a Table</h1> */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-400 mr-1" /> Available</span>
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-400 mr-1" /> Reserved</span>
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-orange-400 mr-1" /> Filled</span>
          <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-1" /> Available Soon</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mb-8">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`relative flex flex-col items-center justify-center border-2 rounded-2xl p-4 cursor-pointer transition-all duration-200 h-32 w-full
              ${selectedTables.includes(table.id) ? 'border-primary-400 ring-2 ring-primary-200' : 'border-gray-200'}
              ${table.status === 'available' ? '' : 'opacity-80'}`}
            onClick={() => handleTableClick(table.id)}
          >
            <div className={`absolute top-2 right-2 text-lg ${statusColors[table.status]}`}>{
              table.status === 'available' ? <MdCheckCircle /> :
              table.status === 'reserved' ? <MdError /> :
              table.status === 'filled' ? <MdClose /> :
              <MdAccessTime />
            }</div>
            <div className={`text-2xl font-bold mb-2 ${selectedTables.includes(table.id) ? 'text-primary-600' : 'text-gray-700'}`}>{table.name}</div>
            <div className={`text-xs px-2 py-1 rounded-full ${statusColors[table.status]}`}>{statusLabels[table.status]}</div>
            {table.status === 'soon' && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">
                {Math.floor(table.timer / 60)}m {table.timer % 60}s
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableManagement; 