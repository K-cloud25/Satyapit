import React from 'react';
import './Table.css';

export default function Table(props){
    if(string.length >= 150){
        return string.slice(0,100) + "..."    
      }else{
        return string 
      }



const onRowClick = (e) =>{
    props.TableComponent(e.target.id)
  }
  
const TableRow = ({item,index}) => (

    <tr value={index} onClick={(e)=>{onRowClick(e)}}>
      <td id={index} >{index}</td>
      <td id={index} >{item.id}</td>
      <td id={index} >{titleCheck(item.title)}</td>
      <td id={index} >{item.date}</td>
      <td id={index} >{item.src}</td>
      <td id={index} >{item.pr_per_cent}</td>
    </tr>
)

return(
    <>
        <table id='table'>
            <thead>
                <th>Sr. No.</th>
                <th>ID</th>
                <th>Title</th>
                <th>Date</th>
                <th>Source</th>
                <th>Match percent</th>
            </thead>
            <tbody>
                {props.data.map((item, index) => <TableRow item={item} index={index} key={index} />)}
            </tbody>
        </table>
    </>
)
}