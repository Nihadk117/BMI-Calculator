import "./App.css";
import Form from "./COMPONENETS/Form";
import Bmiscore from "./COMPONENETS/Bmiscore";
import Bmilist from "./COMPONENETS/Bmilist";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);
  const [changeWeight, setchangeWeight] = useState({ weight: "", type: "" });
  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [bmiRange, setbmiRange] = useState({
    underweight: { low: "" },
    normal: { low: "", high: "" },
    overweight: { low: "", high: "" },
    obesityone: { low: "", high: "" },
    obesitytwo: { low: "", high: "" },
    obesitythree: { high: "" },
  });
  const onFormSub = (w, h) => {
    let b = calBmi(w, h);
    setBmi(b);
    let btype = weightType(b);
    setBmiType(btype);
    const range = {
      underweight: { low: clacweight(18.5, h) },
      normal: { low: clacweight(18.5, h), high: clacweight(24.9, h) },
      overweight: { low: clacweight(25, h), high: clacweight(29.9, h) },
      obesityone: { low: clacweight(30, h), high: clacweight(34.9, h) },
      obesitytwo: { low: clacweight(35, h), high: clacweight(39.9, h) },
      obesitythree: { high: clacweight(40, h) },
    };
    setbmiRange(range);
    setchangeWeight(weightChange(b, w, range));
    setshow(true);
  };
  const clacweight = (b, h) => (b * h * h).toFixed(2);
  const calBmi = (w, h) => (w / (h * h)).toFixed(2);
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };
  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { weight: 0, type: "normal" };
      return changeObj;
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 mx-2">
          <Form getData={onFormSub} />
        </div>
        {show && (
          <div className="row justify-content-center mt-5 mx-5">
            <div className="col-12 col-sm-6 mb-5">
              <Bmiscore
                bmiNo={bmi}
                type={bmiType}
                changeWeight={changeWeight}
              />
            </div>
            <div className="col-12 col-sm-6">
              <Bmilist range={bmiRange} bm={bmi} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
