import React from "react";

function Bmilist({ range, bm }) {
  console.log(bm);
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 fw-bold">Type</div>
            <div className="col-3 fw-bold">BMI</div>
            <div className="col-5 fw-bold">Weight</div>
          </div>
        </li>
        <li
          className={
            bm <18.5
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Underweight</div>
            <div className="col-3">&lt; 18.5</div>
            <div className="col-5">&lt; {range.underweight.low} kg</div>
          </div>
        </li>
        <li
          className={
            18.5 < bm && bm < 24.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Normal</div>
            <div className="col-3">18.5-24.9</div>
            <div className="col-5">
              {range.normal.low + " kg-" + range.normal.high + " kg"}
            </div>
          </div>
        </li>
        <li
          className={
            24.9< bm && bm < 29.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Overweight</div>
            <div className="col-3">25-29.9</div>
            <div className="col-5">
              {range.overweight.low} kg-{range.overweight.high} kg
            </div>
          </div>
        </li>
        <li
          className={
            29.9 < bm && bm < 34.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Obesity Class I</div>
            <div className="col-3">30-34.9</div>
            <div className="col-5">
              {range.obesityone.low} kg-{range.obesityone.high} kg
            </div>
          </div>
        </li>
        <li
          className={
            34.9< bm && bm < 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Obesity Class II</div>
            <div className="col-3">35-39.9</div>
            <div className="col-5">
              {range.obesitytwo.low} kg-{range.obesitytwo.high} kg
            </div>
          </div>
        </li>
        <li
          className={
            bm > 39.9
              ? "border border-danger border-3 list-group-item"
              : "list-group-item"
          }
        >
          <div className="row">
            <div className="col-4">Obesity Class III</div>
            <div className="col-3">&gt; 40</div>
            <div className="col-5">&gt;{range.obesitythree.high}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Bmilist;
