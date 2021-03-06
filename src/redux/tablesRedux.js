import { API_URL } from "../config";

//selectors
export const getTableById = ({tables}, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

export const edtable = payload => ({type: EDIT_TABLE, payload});
export const updateTable = payload => ({type:UPDATE_TABLE, payload }); 
export const fetchTable = () => {
  return (dispatch) => {
    fetch(API_URL+'/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTable(tables)))
  }
};

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
        return statePart.map(table => (table.id === action.payload.tableId) ? {...table, status: action.payload.statusState, peopleAmount:action.payload.people, maxPeopleAmount:action.payload.peopleMax, bill:action.payload.bill } : table);
    case UPDATE_TABLE:
        return [...action.payload]
    default:
      return statePart;
  };
};
export default tablesReducer;