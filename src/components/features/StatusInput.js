
const StatusInput = (props) => {

    const status = ["Busy", "Cleaning", "Free"]
    const index = status.indexOf(props.status)
    status.splice(index,1)

    return (
        <div className='row g-2 align-items-center pt-2'>
            <div className='col-auto'>Status:
            </div>
                <div className='col-auto'> 
                <select class="form-select" aria-label="Default select example" onChange={props.onChange}>
                    <option selected>{props.status}</option>
                        {status.map(stat => <option>{stat}</option>)}
                </select> 
            </div>
        </div>
    )
}
export default StatusInput

