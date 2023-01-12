import React from "react";
import { Steps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import FormStepperHeader from "./FormStepperHeader";
import StepOne from './stepOne'

type FormStepperProps = {
  onStepChange: Function;
  step: number;
};

const FormStepper: React.FC<FormStepperProps> = ({ onStepChange, step }) => {
  //data state
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    password: "",
    jobtitle: "",
    education: "",
    location: "",
    newOffers: false,
    shareProfile: false,
  });
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  //handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _tempObject = { ...data } as any;
    _tempObject[e.target.name] = e.target.value;
    setData(_tempObject);
  };

  //handle checkbox for profile
  const handleShareProfileChange = () => {
    const _tempObject = { ...data };
    _tempObject.shareProfile = !_tempObject.shareProfile;
    setData(_tempObject);
  };
  //handle checkbox for offer
  const handleOfferChange = () => {
    const _tempObject = { ...data };
    _tempObject.newOffers = !_tempObject.newOffers;
    setData(_tempObject);
  };

  //handle signup
  const handleSignup = () => {
    console.log("Data", data);
  };
  return (
    <div className="form-stepper">
      {/* <FormStepperHeader step={step} /> */}
      <Steps
        type="navigation"
        className="site-navigation-steps"
        current={step}
        items={[
          { title: "Step 1" },
          { title: "Step 2" },
          { title: "Step 3" },
        ]}
      />
      <div className="form-stepper__body">
        {/* Basic info form i.e step 1 */}
        {step === 1 && (
           <div style={{padding:'100px'}}>
           <h2>Where do you require cleanng</h2>
         <Form
           name="basic"
           wrapperCol={{
             span: 14,
           }}
           initialValues={{
             remember: true,
           }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           autoComplete="off"
         >
           <Form.Item
             name="username"
             rules={[
               {
                 required: true,
                 message: "Please input your username!",
               },
             ]}
           >
             <Input  placeholder="Your name"/>
           </Form.Item>
   
           <Form.Item
             name="address"
             rules={[
               {
                 required: true,
                 message: "Please input your address!",
               },
             ]}
           >
             <Input placeholder="address"/>
           </Form.Item>
   
           <Form.Item
           name="email"
           rules={[
             {
               type: 'email',
             },
           ]}
         >
           <Input placeholder="email"/>
         </Form.Item>
   
         <Form.Item
           name="phone"
           rules={[
             {
               required: true,
               message: 'Please input your phone number!',
             },
           ]}
         >
          {/* ccc */}
           <Input />
         </Form.Item>
         <Form.Item>
         <Button type="primary" htmlType="submit"
            onClick={() => onStepChange(step + 1)}>
            Next
          </Button>
          </Form.Item>
         </Form>
       </div>
        )}
        {/* Background form i.e step 2 */}
        {step === 2 && (
          <div className="form-stepper__step2">
            <h2>Background</h2>
            <div className="input-group">
              <label htmlFor="jobtitle">Job title</label>
              <input
                value={data.jobtitle}
                type="text"
                name="jobtitle"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="education">Education</label>
              <input
                value={data.education}
                type="text"
                required
                name="education"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="location">Location</label>
              <input
                value={data.location}
                type="text"
                required
                name="location"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {/* Final  form i.e step 3 */}
        {step === 3 && (
          <div className="form-stepper__step3">
            <h2>Finalizing</h2>
            <div className="input-group check-group">
              <input
                type="checkbox"
                name="newOffer"
                checked={data.newOffers}
                onChange={handleOfferChange}
              />
              <label htmlFor="jobtitle">Send me new job offers</label>
            </div>
            <div className="input-group check-group">
              <input
                type="checkbox"
                name="shareProfile"
                checked={data.shareProfile}
                onChange={handleShareProfileChange}
              />
              <label htmlFor="jobtitle">Share my profile to companies</label>
            </div>
          </div>
        )}
      </div>
      <div className="form-stepper__action">
        {step > 1 && (
          <button
            className="btn btn-secondary"
            onClick={() => onStepChange(step - 1)}
          >
            Back
          </button>
        )}

        {step < 3 ? (
          <button
            className="btn btn-primary"
            onClick={() => onStepChange(step + 1)}
          >
            Next
          </button>
        ) : step === 3 ? (
          <button className="btn btn-primary" onClick={handleSignup}>
            Signup
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormStepper;
