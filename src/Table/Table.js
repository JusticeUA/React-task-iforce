import React from "react";



export default props => (
    <table className="table">
         <thead>
            <tr>
            <th onClick={props.onSort.bind(null, 'id')}>
                ID 
                {props.sortField === 'id' ? <small>{props.sort} </small> : null}  {/*audit, for sorting logo */}
            </th>
            <th >imageUrl</th>
            <th onClick={props.onSort.bind(null, 'name')}>
                Name
                 {props.sortField === 'name' ? <small>{props.sort} </small> : null}
                </th>
            <th onClick={props.onSort.bind(null, 'count')}>
                Count
            {props.sortField === 'count' ? <small>{props.sort} </small> : null}</th>
            <th onClick={props.onSort.bind(null, 'weight')}>
                Weight
            {props.sortField === 'weight' ? <small>{props.sort} </small> : null}</th>
            <th>Comments</th>
            </tr>
         </thead>
         <tbody>
             {props.data.map(item =>(
                 <tr key={item.id + item.weight} onClick={props.onRowSelect.bind(null, item)}>
                     <td>{item.id}</td>
                     <td ><img src={item.imageUrl} ></img></td>
                     <td>{item.name}</td>
                     <td>{item.count}</td>
                     <td>{item.weight}</td>
                     <td>{item.comments}</td>
                 </tr>
             ))}
         </tbody>
    </table>
)