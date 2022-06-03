import { Link } from 'react-router-dom';

const TableList = props => {

    return (
  <div className='container'>
    <div className="card">
        <h5 className="card-header">Table {props.id}</h5>
        <div className="card-body">
          <h5 className="card-title">Status: {props.status}</h5>
          <Link key={props.id} to={"/table/"+props.id}><button className="btn btn-primary">SHOW MORE</button></Link>
        </div>
    </div>
</div>  
    
    )

}

export default TableList;