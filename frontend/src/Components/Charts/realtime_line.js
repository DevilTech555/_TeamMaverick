 import React, { Component } from 'react';
 import Chart from 'react-apexcharts';
 import ApexCharts from 'apexcharts'
  export default  class realtime extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: data.slice()
        },
        {
          data:dat.slice()
        }
      ],
        options: {
          chart: {
            id: 'realtime',
            height: 350,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 1000
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          theme:{
            mode:'dark'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          colors:["#1ac0c6","#facd60"],
          title: {
            text: 'BAGGAGE HANDLE',
            align: 'left'
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            range: XAXISRANGE,
           
          },
          yaxis: {
            max: 100
          },
          legend: {
            show: false
          },
        },
      
      
      };
    }
  
    componentDidMount() {
      window.setInterval(() => {
        getNewSeries(lastDate, {
          min: 10,
          max: 90
        })
        
        ApexCharts.exec('realtime', 'updateSeries', [{
          data: data
        }])
      }, 1000)
    }
  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options}
 series={this.state.series}
  type="line"  height={400} width={700} />
</div>


      );
    }
  }

  // const domContainer = document.querySelector('#app');
  // ReactDOM.render(React.createElement(realtime), domContainer);
