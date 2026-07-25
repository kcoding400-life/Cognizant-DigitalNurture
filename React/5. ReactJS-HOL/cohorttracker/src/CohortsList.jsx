// src/CohortsList.jsx
import React from "react";
import CohortDetails from "./CohortDetails";

const cohorts = [
  {
    name: "INTADMDF10 -.NET FSD",
    startDate: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose",
  },
  {
    name: "ADM21JF014 - Java FSD",
    startDate: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith",
  },
  {
    name: "CDBJF21025 - Java FSD",
    startDate: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe",
  },
];

const CohortsList = () => (
  <div>
    <h2>Cohorts Details</h2>
    {cohorts.map((c, i) => (
      <CohortDetails key={i} cohort={c} />
    ))}
  </div>
);

export default CohortsList;
