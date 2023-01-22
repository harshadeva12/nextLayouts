import React, { useState } from "react";
import FormStepper from "./FormStepper";
import Increment from "../increment";
import { count } from "console";
import { stat } from "fs";
import { useSelector } from 'react-redux'


const FormSteps = () => {

  const [step, setStep] = React.useState(-1);

	//handle step change
	const handleStep = (step: number) => {
		setStep(step)
	}
  return (
    <>
      <div>
      
        {
						/** When the step is 0 , show main screen */
						step === -1 && (
              <button className="btn btn-primary" onClick={() => handleStep(0)}>
              Sign In
            </button>
						)
					}
        {
						/** if the stepper is higher than 0, render stepper */
						step > -1 && <FormStepper onStepChange={handleStep} step={step}/>
					}
      </div>
    </>
  );
};
export default FormSteps
