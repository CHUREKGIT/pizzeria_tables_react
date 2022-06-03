const PeopleAmount = (props) => {
    return (
        <div className='row g-4 align-items-center pt-2'>
               <div className='col-auto'>People:</div>
               <div className='col-auto'>
                <input value={props.status == 'Cleaning' || props.status == "Free" ? "0":props.people}  onChange={props.onChange}/>
               </div>
               <div className='col-auto'> 
                /
               </div>
               <div className='col-auto'> 
               <input value={props.peopleMax} onChange={props.onChangeMax}/>
               </div>
           </div>
    )
}
export default PeopleAmount

