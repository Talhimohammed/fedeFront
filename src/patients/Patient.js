
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid'; 

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'sex', headerName: 'Sex', width: 130 },
    { field: 'cp', headerName: 'Cp', width: 130 },
    {
      field: 'thalach',
      headerName: 'Thalach',
      type: 'number',
      width: 130,
    }, 
    { field: 'exang', headerName: 'Oldpeak', width: 130 }, 
    { field: 'slope', headerName: 'Slope', width: 130 } , 
    { field: 'ca', headerName: 'Ca', width: 130 } ,  
    { field: 'target', headerName: 'Target', width: 130 } 
    
  
  ];  

  const rows = [ 

    { id: 1, sex: 'Snow', cp : 'Jon', 'thalach' : 35  , 'exang' : 2 , 'oldpeak' : 3 , 'sloope' : 4 , 'ca' : 1 ,'target' : 0 },
    { id: 2, sex: 'Snow', cp : 'Jon', 'thalach' : 35  , 'exang' : 2 , 'oldpeak' : 3 , 'sloope' : 4 , 'ca' : 1 ,'target' : 0 },
    { id: 3, sex: 'Snow', cp : 'Jon', 'thalach' : 35  , 'exang' : 2 , 'oldpeak' : 3 , 'sloope' : 4 , 'ca' : 1 ,'target' : 0 }
  
    
]; 


  

function Patient(props) {
    return (
        <div> 
            <div style={{ height: 400, width: '100%' }}>
             { props.Data ? <DataGrid rows={props.Data} columns={columns} pageSize={5} checkboxSelection /> : "no"  }
            </div>  
        </div>
    )
}

export default Patient ; 
