function serverUpdate (id, status, peopleAmount, maxPeopleAmount, bill){

    const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          status: status,
          peopleAmount: peopleAmount,
          maxPeopleAmount: maxPeopleAmount,
          bill: bill
        }),
      };
      
      fetch('http://localhost:3131/tables/'+id, options)

}
export default serverUpdate