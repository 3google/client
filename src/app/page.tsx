'use client';

import React from 'react';
import MainBox from '../components/main/MainBox';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="mainbody-box">
        <MainBox />
      </div>
    </Layout>
  );
}
