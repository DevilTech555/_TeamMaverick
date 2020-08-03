import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080/";
// import ApexCharts from 'apexcharts'
export default class Line extends Component {

  //  getter = async ()=>{
  //     await fetch('http://localhost:5000/',{method:'GET'})
  //     .then((res)=> res.json())
  //     .then(async (doc)=>{
  //        console.log(doc)
  //        let newseries = []
  //        let prediciton ={
  //           name:'prediction',
  //           data:[]
  //         }
  //         let demand = {
  //           name:'demand',
  //           data:[]
  //         }
  //         doc.data.map(element=>{
  //         prediciton.data.push([element.timestamp,Math.round(element.yhat)]);
  //         demand.data.push([element.timestamp],element.no_of_pass);
  //      });
  //       newseries.push(prediciton);
  //       newseries.push(demand);
  //       console.log(newseries);
  //       this.setState({series:newseries},()=>{
  //         console.log(this.state);
  //       });

  //     })
  //     .catch((err)=> console.log(err))
  //   }
  getData = async ()=>{
    let rawData = await fetch('http://localhost:5000/')
    let data = await rawData.json()
    console.log(data);
    let newseries = []
    let prediciton ={
       name:'prediction',
       data:[]
     }
     let demand = {
       name:'demand',
       data:[]
     }
     data.data.map(element=>{
     prediciton.data.push([element.timestamp,Math.round(element.yhat)]);
     demand.data.push([element.timestamp,element.no_of_pass]);
  });
   newseries.push(prediciton);
   newseries.push(demand);
   console.log(newseries);
   this.setState({series:newseries},()=>console.log(this.state));
}
    constructor(props) {
      super(props);

      this.state = {
      
        series: [],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: 7,
            curve: 'smooth'
          },
          theme:{
              mode:'dark'
          },
          xaxis: {
            type: 'datetime'
          },
          title: {
            text: 'Social Media',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#fff'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          markers: {
            size: 4,
            colors: ["#ffff"],        
             hover: {
              size: 7,
            }
          },
          yaxis: {
            min: -10,
            max: 40,

            title: {
              text: 'Engagement',
              style:{
                  color:"#fff"
              }
            },
          }
        },
      };  
    }

    componentDidMount(){
      this.getData();
    }


    render() {
      return (
        

  <div id="chart">
    {
      this.state.series.length == 0?null:(
        <Chart options={this.state.options} series={this.state.series} type="line"  height={500} width={850} />
      )
    }
  </div>
      );
    }
}