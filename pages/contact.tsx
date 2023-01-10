import React from "react";
import { Drawer, Menu } from "antd";
import type { ReactElement } from 'react'
import NestedLayout from '../components/second-layout'
import type { NextPageWithLayout } from './_app'


const Contact: NextPageWithLayout = () => {
    return <h3>Contact page</h3>
  }
  

  Contact.getLayout = function getLayout(page: ReactElement) {
    return (
        <NestedLayout>{page}</NestedLayout>
    )
  }

export default Contact;
