import './App.css';
import React , {useState,useEffect} from 'react';
import Patient from './patients/Patient';

function App() { 

  const [data,setdata] = useState([]);  

  useEffect(()=> {    

    fetch("http://localhost:8085/api/patients/", {  
      method : 'GET'
    })
      .then(res => res.json() .then( data => {  
        if (res.status >= 200 && res.status <= 299) {    
             setdata(data);
        }
      } 
      ));
   },[])  

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

  return (
    <div className="App">  
        <div className="container"> 
            <div className="dash"> DASHBOARD </div>         
        </div>  
          {<Patient Data={data} />} 
          <div className="container"> 
            <div className="dash"> CHARTS </div>         
        </div>   
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default App;
