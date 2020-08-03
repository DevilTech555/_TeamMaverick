//importing express
const router = require("express").Router();

//importing logger
const serverLog = require('../logger');

//importing chart options skeleton
const donut  = require("../Meta/donut.json");

//importing DB module
const db = require("../db");

//donut chart route code
router.get("/:air/res_donut", (req, res) => {

  const dates = req.query.date;
  const airport = req.params.air;
  serverLog.info(`REQUESTED Response donut chart requested with Airport=${airport}, `+
                 `Date=${dates}, `+
                 `Type=${req.query.type}`
                );

  db.getDB()
    .collection(airport)
    .find({ date: dates, type: req.query.type})
    .project({_id: 0, ["general.all_responses"]:1})
    .toArray((err, documents) => {
      {
        if (err){
          serverLog.error(`Donut chart DATABASE ERROR with Airport=${airport}, `+
                          `Date=${dates}, `+
                          `Type=${req.query.type} -> ${err}`
                         );
          res.status(500).send(err);
        }
        else if(Object.keys(documents).length==0){
          serverLog.warn(`Donut chart DATA NOT FOUND with Airport=${airport}, `+
                          `Type=${req.query.type}, `+
                          `Date=${dates}`
                         );
          res.status(404).send("404 data not found");  
        }
        else {
          this.state = {
        

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        // series: [44, 55, 41, 17, 15],
        // options: {
        //   chart: {
        //     type: 'donut',
        //   },
        //   responsive: [{
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: 200
        //       },
        //       legend: {
        //         position: 'bottom'
        //       }
        //     }
        //   }]
        // },
      
      
      };
    }
  }

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
</div>



      );
    }
  }

  const domContainer = document.querySelector('#app');
  ReactDOM.render(React.createElement(ApexChart), domContainer);
