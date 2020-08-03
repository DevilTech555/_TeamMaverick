import React from "react";
import Line from "./Charts/line";
import Realtime from "./Charts/realtime_line";
import CustomizedSnackbars from "./SnackBar";



import '../index.css'

export default function Page() {

  return (
    <React.Fragment>
      <div className="i-data">
      <div className="i-1"><Line/></div>
      <div className="i-1"><Realtime/></div>
      </div>
      <CustomizedSnackbars/>
    </React.Fragment>
  );
}
