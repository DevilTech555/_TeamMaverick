import React, { Component } from 'react';
import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts'
export default class Line extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Likes',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
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
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
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
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          markers: {
            size: 4,
            colors: "#fff",        
             hover: {
              size: 7,
            }
          },
          yaxis: {
            min: -10,
            max: 40,
            color:"#fff",
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

  

    render() {
      return (
        

  <div id="chart">
<Chart options={this.state.options} series={this.state.series} type="line"  height={500}
                    width={850} />
</div>
      );
    }
}