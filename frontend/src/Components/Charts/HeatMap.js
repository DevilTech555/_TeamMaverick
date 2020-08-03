 import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import '../../index.css';
 class HeatMap extends Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [
            {
                name: 'Sun',
                data: [10,23,-3,57,94,54,95,28,45,23]
              },{
                name: 'Mon',
                data:[54,95,28,45,23,10,23,-23,57,94]
              },
              {
                name: 'Tue',
                data: [14,57,94,54,95,28,23,-14,45,23]
              },
              {
                name: 'Wed',
                data:  [58,57,-3,45,23,94,54,95,28,23]
              },
              {
                name: 'Thu',
                data: [11,23,-28,45,23,34,57,94,54,95]
              },
              {
                name: 'Fri',
                data:[16,95,28,45,23,23,-8,57,94,54]
              },
              {
                name: 'sat',
                data: [54,95,28,45,23,10,23,-10,57,94]
              },
             
             
            ],
            options: {
              chart: {
                height: 350,
                type: 'heatmap',
              },
              plotOptions: {
                heatmap: {
                  shadeIntensity: 0.5,
                  radius: 0,
                  useFillColorAsStroke: true,
                  colorScale: {
                    ranges: [{
                        from: -30,
                        to: 45,
                        name: 'low',
                        color: '#76ff03'
                      },
                      
                      {
                        from: 46,
                        to: 100,
                        name: 'extreme',
                        color: '#f44336'
                      }
                    ]
                  }
                }
              },
              dataLabels: {
                enabled: false
              },
              toolbar: {
        show: false
      },
              theme:{
                mode:'dark'
              },
              stroke: {
                width: 1
              },
              title: {
                text: 'HeatMap Chart ',
                style:{
                  fontSize:'20px',
                }
              },
            },
          
          
          };
        }

      

       render() {
        return (
            <div id="chart">
                <Chart
              
                    options={this.state.options}
                    series={this.state.series}
                    type='heatmap'
                    height={500}
                    width={830}
                  
                />
            </div>
        )
    }
}

export default HeatMap;