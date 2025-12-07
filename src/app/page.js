import React, { Fragment } from 'react'

import AboutCompany from '@/components/AboutCompany';
import Hero from '@/components/Hero';

import Servicess from '@/components/Services';
import Portfolios from '@/components/Portfolios';

import Client from '@/components/Client';
import LovedByClients from '@/components/LovedByClients';
import Blog from '@/components/Blogs';




const page = () => {
  return (
    <div className='bg-[#f8fafc]'>
      <Hero />
      <AboutCompany />
      <Client />
      <Servicess />
      <Portfolios />
      <Blog />
      <LovedByClients />
    </div>
  )
}

export default page;