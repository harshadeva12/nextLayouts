import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
import StepOne from './stepOne';
import stepTwo from './stepTwo';

const wizard = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', current);
    switch (value) {
      case 0:
        //  window.location.replace('/');
        <StepOne/>
        break;
      case 1:
        console.log('11:');
        break;
      default:
    }
    setCurrent(value);
  };
  const description = 'This is a description.';
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />

    </>
  );
};
export default wizard;