import { useSelector } from 'react-redux';
import TableList from '../features/TableList';


const TablesPage = () => {
    const tables = useSelector(state => state.tables);
    return (
       <div className='container p-4'> 
       <h1>All Tables</h1>
        {tables.map(table => (
            <TableList key={table.id} id={table.id} status={table.status}/>
          ))}
       
        </div>
    )
}

export default TablesPage