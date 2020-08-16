import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary/InputFullSalary";

import { calculateSalaryFrom } from "./helpers/salary";
import ProportionBar from "./components/ProportionBar";
import InputReadOnly from "./components/InputReadOnly/InputReadOnly";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salary: 1000,
    };
  }

  handleSalaryChange = (newValue) => {
    this.setState({ salary: newValue });
  };

  render() {
    const { salary } = this.state;

    const salaryObj = calculateSalaryFrom(salary);

    const {
      baseINSS,
      baseIRPF,
      discountINSS,
      discountIRPF,
      percentINSS,
      percentIRPF,
      netSalary,
      percentNetSalary,
    } = salaryObj;

    return (
      <div className="container">
        <h1>React Salary</h1>
        <div className="row">
          <InputFullSalary
            currentValue={salary}
            onSalaryChange={this.handleSalaryChange}
          />
        </div>
        <ProportionBar
          inss={percentINSS}
          irpf={percentIRPF}
          netSalary={percentNetSalary}
        />
        <div className="row">
          <InputReadOnly label="INSS Base" value={baseINSS} />
          <InputReadOnly
            label="INSS Discount"
            value={discountINSS}
            percentage={percentINSS}
            color={"color-inss"}
          />
          <InputReadOnly label="IRPF Base" value={baseIRPF} />
          <InputReadOnly
            label="IRPF Discount"
            value={discountIRPF}
            percentage={percentIRPF}
            color={"color-irpf"}
          />
          <InputReadOnly
            label="Net Salary"
            value={netSalary}
            percentage={percentNetSalary}
            color={"color-salary"}
          />
        </div>
      </div>
    );
  }
}
