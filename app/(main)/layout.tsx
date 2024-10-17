'use client';

import ReactLenis from 'lenis/react';
import React, { ReactElement } from 'react';
import Footer from '../Layout/Footer';
import Nav from '../Layout/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: ReactElement;
};

const MainLayout = ({ children }: Props): ReactElement => {
  return (
    <ReactLenis root>
      <div>
        <ToastContainer />
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default MainLayout;
