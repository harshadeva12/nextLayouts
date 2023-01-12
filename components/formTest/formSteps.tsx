import React, { useState } from "react";
import FormStepper from "./FormStepper"


const FormSteps = () => {
  const [step, setStep] = React.useState(0)

	//handle step change
	const handleStep = (step: number) => {
		setStep(step)
	}
  return (
    <>
      <div>
      
        {
						/** When the step is 0 , show main screen */
						step === 0 && (
              <button className="btn btn-primary" onClick={() => handleStep(1)}>
              Sign In
            </button>
						)
					}
        {
						/** if the stepper is higher than 0, render stepper */
						step > 0 && <FormStepper onStepChange={handleStep} step={step}/>
					}
      </div>
    </>
  );
};
export default FormSteps
