import React from "react";
import SurveyBody from "../components/SurveyBody";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Survey",
    toolbar: () => <p style={{ color: "white" }}>AKTCL_Rally</p>,
    main: () => <SurveyBody />,
  },
];

export default routes;
