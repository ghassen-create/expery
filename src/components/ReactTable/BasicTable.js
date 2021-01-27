import React,{useMemo} from 'react';
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {CULUMNS} from './Culumns'
import '../ReactTable/Table.css'

export const BasicTable=()=>{
    
    const culumns= useMemo(()=> CULUMNS,[])
    const data =useMemo(()=>MOCK_DATA,[])
    
    
    const{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,footerGroups }= useTable(
        {
            columns:culumns,
            data:data
        }
    )
    
    return(
        <table {...getTableProps()}>
         <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
       
        <tfoot>
        {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
        </table>
    )
}
export default BasicTable;