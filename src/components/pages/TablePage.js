import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getTableById, edtable } from '../../redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// komunikacja z serverem - filmik z koddili
// wyśrodkuj copywright
// po update przechodzimy na home
// jak status "busy" to nie widać inputów
// zamianić na komponenty -> inputy?
// http://localhost:3131/tables

const TablesPage = () => {
    const { tableId }  = useParams();
    const table = useSelector(state => getTableById(state, tableId));

    const [statusState, setStatus] = useState(table.status);
    const [people, setValueAmount] = useState(table.peopleAmount);
    const [peopleMax, setValueAmountMax] = useState(table.maxPeopleAmount);
    const [bill, setValueBill] = useState(table.bill);

    const status = ["Busy", "Cleaning", "Free"]
    const index = status.indexOf(table.status)
    status.splice(index,1)

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(edtable({ statusState,people,peopleMax,bill,tableId: tableId }));
    }

    return (
       <div>
           <div className='pt-2'>
           <h1>Table {table.id}</h1>
           </div>
           <form onSubmit={handleSubmit}>
           <div className='row g-2 align-items-center pt-2'>
               
               <div className='col-auto'>Status:</div>
               <div className='col-auto'> 
                <select class="form-select" aria-label="Default select example" onChange={e => setStatus(e.target.value)}>
                    <option selected>{table.status}</option>
                    {status.map(stat => <option>{stat}</option>)}
                </select> 
               </div>
           </div>
           <div className='row g-4 align-items-center pt-2'>
               <div className='col-auto'>People:</div>
               <div className='col-auto'> 
                <input placeholder={table.peopleAmount} onChange={e => setValueAmount(e.target.value)}/>
               </div>
               <div className='col-auto'> 
                /
               </div>
               <div className='col-auto'> 
               <input placeholder={table.maxPeopleAmount} onChange={e => setValueAmountMax(e.target.value)}/>
               </div>
           </div>
           <div className='row g-2 align-items-center pt-2'>
               <div className='col-auto'>Bill:</div>
               <div className='col-auto'> 
               <input placeholder={table.bill} onChange={e => setValueBill(e.target.value)}/>$
               </div>
           </div>
           <div className='pt-2'>
               <button className="btn btn-primary">UPDATE</button>
           </div>
           </form>
       </div> 
    )
}

export default TablesPage