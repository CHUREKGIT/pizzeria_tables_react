import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById, edtable } from '../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import serverUpdate from '../common/serverUpade';
import { useNavigate } from 'react-router-dom';
import StatusInput from '../features/StatusInput';
import PeopleAmount from '../features/PeopleAmount';
import BillInput from '../features/BillInput';

const TablesPage = () => {
    const { tableId }  = useParams();
    const navigate = useNavigate()
    const table = useSelector(state => getTableById(state, tableId));
    const [statusState, setStatus] = useState(table.status);
    const [people, setValueAmount] = useState(table.peopleAmount);
    const [peopleMax, setValueAmountMax] = useState(table.maxPeopleAmount);
    const [bill, setValueBill] = useState(table.bill);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        serverUpdate(tableId, statusState, people, peopleMax, bill);
        dispatch(edtable({ statusState,people,peopleMax,bill,tableId: tableId }));
        navigate('/')
    }
    function checkValuePeople(amount){
        if (amount > 10 || amount < 0 ){
            return setValueAmount(0)
        }
        if (amount > peopleMax){
           return setValueAmount(peopleMax)
        }
       return setValueAmount(amount)
    }
    function checkMaxValuePeople(amount){
        if (amount > 10 || amount < 0 ){
            return setValueAmountMax(0)
        }
        if (amount < people){
           return setValueAmount(amount)
        }
       return setValueAmountMax(amount)
    }
    return (
       <div>
           <div className='pt-2'>
           <h1>Table {table.id}</h1>
           </div>
           <form onSubmit={handleSubmit}>
                <StatusInput status ={table.status} onChange={e => setStatus(e.target.value)} />
                <PeopleAmount status ={statusState} people={people} peopleMax={peopleMax} onChange={e => checkValuePeople(e.target.value)} onChangeMax={e => checkMaxValuePeople(e.target.value)}/>  
           {statusState == 'Busy'? <BillInput bill={table.bill} onChange={e => setValueBill(e.target.value)}/>: null }
           <div className='pt-2'>
               <button className="btn btn-primary">UPDATE</button>
           </div>
           </form>
       </div> 
    )
}
export default TablesPage