const BillInput = (props) => {
    return (
        <div className='row g-2 align-items-center pt-2'>
               <div className='col-auto'>Bill:</div>
               <div className='col-auto'> 
               <input placeholder={props.bill} onChange={props.onChange}/>$
               </div>
           </div>
    )
}
export default BillInput

