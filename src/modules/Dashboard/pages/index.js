// import React, { useEffect, useState } from "react";
// import { MainServices } from "../services/MainServices";

import FrontDoorPage from "../../../component/FrontDoor/pages";

const DashBoardPage = function () {
  // const services = new MainServices();
  // const [mainContent, setMainContent] = useState();

  // useEffect(() => {
  //   services
  //     .getMainData()
  //     .then((res) => {
  //       setMainContent(res["choices"]);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // });

  // console.log("main content", mainContent);

  return (
    <div>
      <FrontDoorPage/>
      {/* {mainContent && mainContent.length > 0 && mainContent.map((res)=>{
        console.log("content", res)
        return(<div>mainContent:{res["text"]}</div>)
      })}
      <div>TescoF</div> */}
    </div>
  );
};

export default DashBoardPage;
