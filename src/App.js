import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from './components/Table';


const App = () => {
    const [dataTable,setDataTable] = useState([]);
    console.log(dataTable);

    useEffect(()=>{
        axios('http://192.168.43.178:3000/all')
        .then(res=>setDataTable(res.data))
        .catch(err=>console.log(err))
    },[]);

    const column =[
        {heading:'id',value:'id'},
        {heading:'name',value:'FirstName'},
        {heading:'country',value:'Country'},
        {heading:'vaccinated',value:'vaccinated'},
        {heading:'Age',value:'Age'}
    ]
    return (
        <div>
            <h1>
            Webpack React Experiement with Axios Rest
        </h1>
        <Table data={dataTable} column={column}/>
        </div>  
    )
}
export default App
