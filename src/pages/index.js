"use client"
import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { BellAlertIcon,ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import Demo1 from '../../public/Demo1.webp';
import Demo2 from '../../public/Demo 2.webp';
import Demo3 from '../../public/Demo 3.webp';
import Demo4 from '../../public/Demo 4.webp';
import Live from '../../public/LivePreview.webp';
import Month from '../../public/MonthPreview.webp';
import Payment from '../../public/PaymentPage.webp';
import CoverImg from '../../public/CoverImage.webp';

import { motion, AnimatePresence } from 'framer-motion';
const index = () => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const stats = [
    { id: 1, name: 'People Benefits', value: '4.5 Billion' },
    { id: 2, name: 'Saves', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  const features1 = [
    {
      name: 'Real-time Monitoring:',
      description:
        'Smart meters offer real-time insights into energy consumption, allowing users to track usage patterns and make informed decisions about their energy habits.        .',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Privacy Concerns:',
      description: 'Smart meters collect granular energy consumption data, raising privacy concerns about how this data is used and protected.      ',
      icon: LockClosedIcon,
    },
    {
      name: 'Energy Efficiency:',
      description: 'With detailed information about when and how energy is being used, consumers can identify areas for energy efficiency improvements, ultimately leading to cost savings      ',
      icon: ServerIcon,
    },
  ]

  const features2 = [
    {
      name: 'Demand Response:',
      description:
        'Smart meters facilitate demand response programs where consumers can voluntarily reduce energy usage during peak demand periods, contributing to grid stability.        ',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Data Security:',
      description: 'Ensuring the security of data transmission and storage is crucial to prevent unauthorized access and potential breaches.      ',
      icon: LockClosedIcon,
    },
    {
      name: 'Accurate Billing:',
      description: 'Automated readings ensure accurate billing based on actual consumption rather than estimations, promoting fair and transparent transactions.      ',
      icon: ServerIcon,
    },
  ]

  const features3 = [
    {
      name: 'Integration with Renewable Energy:',
      description:'These meters pave the way for easy integration of renewable energy sources like solar panels, enabling consumers to track energy generation and consumption.      ',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Impact on Utility Providers:      ',
      description: 'For utility companies, smart meters streamline operations and enhance customer service. ',
      icon: LockClosedIcon,
    },
    {
      name: 'Impact on Consumers:',
      description: 'Smart meters empower consumers with knowledge about their energy consumption habits. Armed with this information, individuals can adjust their behavior to optimize energy usage, reduce costs, and minimize their carbon footprint. By adopting energy-efficient practices, consumers can contribute to a more sustainable future.      ',
      icon: ServerIcon,
    },
  ]
  return (
    <div>
      <Navbar/>




    {/* Header */}

    <div className=" min-h-screen w-full bg-gradient-to-b from-white via-green-200 to-white grid place-items-center p-10 font-header grid-cols-4 relative z-10">
        <div className="mesh1 hidden md:block opacity-80 w-96 h-96 absolute top-6 right-10 z-8 blur-3xl "></div>

        <div className=" flex flex-col items-start col-span-4 sm:col-span-2 gap-6 relative z-10 opacity-100">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: "tween" }}
            className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            <p className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[45px] font-bold text-black">
            Boost your productivity.
            </p>
            <p className="text-3xl xl:text-[45px] font-bold">
              <span className="text-5xl  lg:text-[50px] xl:text-[55px] font-[800] bg-clip-text text-transparent bg-green-700">
              Start using our app today.
              </span>
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-900">
            This enables you to get on top of your electricity bill, reduce your carbon footprint, make your home safer, monitor elderly relatives, and much more…
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          
            className="flex items-center justify-center gap-3 mt-4"
          >
            <button className="bg-green-600 text-white text-normal md:text-xl font-semibold p-2 sm:p-3 md:p-4 rounded-md  hover:bg-green-700">
              Contact Us
            </button>
            <button className="border border-green-600 p-2 sm:p-3 md:p-4 text-normal md:text-xl font-semibold text-green-900 rounded-md  hover:bg-green-700 hover:text-white">
              <a href="/Request">Request Demo</a>
              
            </button>
          </motion.div>
        </div>
        <motion.div
          layout
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
          AnimatePresence
         
          className="relative sm:col-span-2 col-span-4  sm:mr-[-30px] "
        >
          <Image
            className=" relative z-10"
            src={CoverImg}
            
          />
        </motion.div>
        {/* <Image className="absolute" src="/oil.png" width={1000} height={500} /> */}
      </div>

     {/* Next content */}
     <div className='relative'>
    <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center py-10' >How Does it Work ?</h1>
    <p className='max-w-7xl mx-auto px-10 text-center pb-10 text-lg leading-8 text-gray-600 '>Each device possesses a unique electrical signature, visible with every use. This data is utilized daily to offer you fresh, practical observations. HomeGuard possesses the ability to swiftly identify these device signatures, eliminating the need for user calibration. </p>

    </div>

    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 sm:gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none md:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Daily Review</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better Run-Time Web Page on a Live period</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Host live  sessions where viewers can see  about smart meters, energy efficiency, and how to interpret the data they provide in our web apps. </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features1.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/Live"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
              Watch Demo
              </a>
             
            </div>
            </div>
          </div>
          <Image
            src={Live}
            alt="Product screenshot"
            className="w-[19rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            
          />
        </div>
      </div>
    </div>


    <div className="relative overflow-hidden  bg-white py-5  sm:py-8">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 sm:gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none md:grid-cols-2">
        <Image
            src={Month}
            alt="Product screenshot"
            className="w-[18rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0"/>
            
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Month-Review</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow Control Over a Month Period</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Creating Monthly content related to monitoring home appliances using a smart meter can be a great way to educate your audience about energy consumption, efficiency, and cost-saving strategies.
             
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features2.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/Month"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Watch Demo
              </a>
             
            </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>

    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 sm:gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none md:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Payment-Review</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Payment process </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              The digital revolution has transformed the way we pay for electricity, offering a plethora of options tailored to different preferences and lifestyles. Whether you're tech-savvy or prefer traditional methods, the array of payment choices ensures that managing your electric meter payments can be both seamless and hassle-free
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features3.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/Payment"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Watch Demo
              </a>
             
            </div>
            </div>
          </div>
          <Image
            src={Payment}
            alt="Product screenshot"
            className="w-[19rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            
          />
        </div>
      </div>
    </div>


     {/* Next content */}
    <div className='relative'>
    <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center py-10' >Upcoming Updates</h1>
    <p className='max-w-7xl mx-auto px-10 text-center pb-10 text-lg leading-8 text-gray-600 '>Converting Web-2 into Web-3 project using intergration of Blockchain,Api's, Web3 Libraries and their frameworks and Application based on Flutter which is user friendly and runs on both IOS and Android. </p>
                    </div>

                    {/* demo content */}

                    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
           

        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={Demo1}
              alt="jhi"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="justify-center">
            <div>
              <h3 className="text-lg font-medium mx-auto text-center text-gray-700">
               Tools and Technologies
              </h3>
            
            </div>
           
          </div>
        </div>

        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={Demo2}
              alt="jhi"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="  justify-center">
            <div>
              <h3 className="text-lg font-medium mx-auto text-center text-gray-700">
               Appliances
              </h3>
            
            </div>
           
          </div>
        </div>

        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={Demo3}
              alt="jhi"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="  justify-center">
            <div>
              <h3 className="text-lg font-medium mx-auto text-center text-gray-700">
               Customer Service
              </h3>
            
            </div>
           
          </div>
        </div>

        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={Demo4}
              alt="jhi"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="  justify-center">
            <div>
              <h3 className="text-lg font-medium mx-auto text-center text-gray-700">
               24/7 Message Query
              </h3>
            
            </div>
           
          </div>
        </div>

      
    </div>
      </div>
    </div>                

    <div className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>


          {/* POSTAL CODE */}

          <div className="relative isolate overflow-hidden bg-gradient-to-b from-white via-green-200 to-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Checkout here <span className='text-md'>&#128071;</span> </h2>
            <p className="mt-4 text-lg leading-8 text-gray-800">
            Buy Today, Ships Next Business day with <span className='font-bold text-slate-800'>Free Delivery</span>  included
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                
                type="text"
               
               
                className="min-w-0 flex-auto rounded-md border-2 bg-white/5 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your Postcode"
              />
              <button
                type="submit"
                onClick={() => setOpen(true)}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get a Quote
              </button>

              <Transition.Root show={open} as={Fragment}>
              
              <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <BellAlertIcon className="h-6 w-6 text-black" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Delivery status
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-800">
                        Thank you for your Interest. Product will be shift between 5 - 6 Business days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Submit
                  </button>
                  
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">Our Vision</dt>
              <dd className="mt-2 leading-7 text-gray-800">
              Enhancing individuals' everyday experiences by empowering all to make informed energy decisions. Taking care of our planet commences with your actions.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-black">Our Mission</dt>
              <dd className="mt-2 leading-7 text-gray-800">
              We offer an integrated solution ecosystem that is effortlessly embraced by individuals across the board.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#090814] to-[#ebdcfd] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div> 


            {/* Demo */}

         



    </div>
  )
}

export default index
