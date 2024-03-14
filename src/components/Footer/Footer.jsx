"use client"
import React from 'react'
import logo from './_assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Footer = () => {
  const date = new Date();
  return (
    <div className="lg:pl-[60px]">
      <footer className=' bg-Dark site-container'>
        <div className="wrapper  py-section flex justify-between flex-col gap-y-4 lg:flex-row">
          <div className="info__ 2xl 2xl:w-[414px] lg:w-[332px]">
            <div className="logo">
              <Image className='w-[100px] lg:w-[150px] 2xl:w-auto' src={logo} alt='logo' />
            </div>
            <p className='text-white 2xl:mt-8 lg:mt-6 mt-4 2xl:text-lg lg:text-base text-sm'>
              Industrial, manufacturing, management,  and smart building project consultancy with 23 years of experience and awards

            </p>
            {/* social icons */}
            <div className="2xl:mt-10 mt-6">
              <SocialIcon />
            </div>
          </div>
          <div className="products__">
            <ProductList />
          </div>
          <div className="features__">
            <FeatureList />
          </div>
          <div className="company__ ">
            <CompanyInfo />
          </div>
        </div>
        <div className="px-1">
          <div className="copyrights__ site-container py-4 mt-wrapper border-t border-gray-200">
            <p className='text-white text-center'>
              &copy; Fonebox {date.getFullYear()}. All rights reserved
            </p>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer













// icon
const SocialIcon = () => {
  return (
    <ul className='flex items-center gap-2'>
      <li className='text-white duration-200 hover:text-CoralLight'>
        <Link href={''}>
          <svg className='2xl:w-[32px] w-[24px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.999 9.43593C15.1894 9.43593 14.3877 9.5954 13.6398 9.90522C12.8918 10.215 12.2122 10.6691 11.6397 11.2416C11.0672 11.8141 10.6131 12.4937 10.3033 13.2417C9.99348 13.9897 9.83401 14.7913 9.83401 15.6009C9.83401 16.4105 9.99348 17.2122 10.3033 17.9602C10.6131 18.7081 11.0672 19.3878 11.6397 19.9602C12.2122 20.5327 12.8918 20.9868 13.6398 21.2966C14.3877 21.6065 15.1894 21.7659 15.999 21.7659C17.6341 21.7659 19.2022 21.1164 20.3583 19.9602C21.5145 18.8041 22.164 17.236 22.164 15.6009C22.164 13.9659 21.5145 12.3978 20.3583 11.2416C19.2022 10.0855 17.6341 9.43593 15.999 9.43593ZM15.999 19.6059C14.9367 19.6059 13.9179 19.1839 13.1667 18.4327C12.4155 17.6816 11.9935 16.6628 11.9935 15.6004C11.9935 14.5381 12.4155 13.5193 13.1667 12.7681C13.9179 12.0169 14.9367 11.5949 15.999 11.5949C17.0612 11.5949 18.0799 12.0169 18.831 12.768C19.5821 13.5191 20.004 14.5377 20.004 15.5999C20.004 16.6621 19.5821 17.6808 18.831 18.4319C18.0799 19.183 17.0612 19.6049 15.999 19.6049V19.6059ZM23.845 9.20893C23.845 9.39764 23.8078 9.5845 23.7356 9.75885C23.6634 9.93319 23.5576 10.0916 23.4241 10.225C23.2907 10.3585 23.1323 10.4643 22.9579 10.5365C22.7836 10.6088 22.5967 10.6459 22.408 10.6459C22.2193 10.6459 22.0324 10.6088 21.8581 10.5365C21.6838 10.4643 21.5253 10.3585 21.3919 10.225C21.2585 10.0916 21.1526 9.93319 21.0804 9.75885C21.0082 9.5845 20.971 9.39764 20.971 9.20893C20.971 8.82782 21.1224 8.46231 21.3919 8.19282C21.6614 7.92333 22.0269 7.77193 22.408 7.77193C22.7891 7.77193 23.1546 7.92333 23.4241 8.19282C23.6936 8.46231 23.845 8.82782 23.845 9.20893ZM27.377 7.74793C27.0694 6.9586 26.6027 6.241 26.0059 5.63974C25.4091 5.03848 24.695 4.56643 23.908 4.25293L23.867 4.23893C22.9378 3.88625 21.9547 3.6968 20.961 3.67893H20.952C19.668 3.62293 19.262 3.60693 16.005 3.60693C12.748 3.60693 12.332 3.60693 11.059 3.67893C10.0421 3.6975 9.03629 3.8938 8.08701 4.25893L8.14701 4.23893C7.35732 4.54577 6.63929 5.01196 6.03764 5.60844C5.436 6.20492 4.96365 6.91892 4.65001 7.70593L4.63501 7.74793C4.28249 8.67708 4.0937 9.6603 4.07701 10.6539V10.6629C4.01901 11.9449 4.00201 12.3519 4.00201 15.6089C4.00201 18.8649 4.00201 19.2799 4.07601 20.5559C4.09601 21.5529 4.28401 22.5369 4.63501 23.4719C4.9431 24.2611 5.41009 24.9786 6.00701 25.5798C6.60393 26.1811 7.31803 26.6532 8.10501 26.9669L8.14701 26.9809C9.00701 27.3289 10.003 27.5459 11.046 27.5809H11.06C12.344 27.6369 12.751 27.6549 16.007 27.6549C19.263 27.6549 19.68 27.6549 20.954 27.5809C21.9717 27.5614 22.9783 27.3655 23.929 27.0019L23.869 27.0219C24.6579 26.7139 25.3752 26.2471 25.9763 25.6506C26.5775 25.054 27.0498 24.3404 27.364 23.5539L27.379 23.5119C27.7294 22.579 27.9185 21.5933 27.938 20.5969C27.995 19.3149 28.012 18.9079 28.012 15.6509C28.012 12.3939 28.012 11.9799 27.938 10.7039C27.9232 9.67216 27.7262 8.65113 27.356 7.68793L27.376 7.74793H27.377ZM25.753 20.4579C25.745 21.2425 25.5995 22.0196 25.323 22.7539L25.339 22.7079C25.1394 23.2214 24.836 23.6882 24.4479 24.0791C24.0597 24.47 23.5951 24.7767 23.083 24.9799L23.056 24.9899C22.3451 25.2564 21.5931 25.3965 20.834 25.4039H20.829C19.563 25.4629 19.205 25.4769 15.957 25.4769C12.707 25.4769 12.375 25.4769 11.084 25.4039C10.308 25.3952 9.53951 25.2496 8.81401 24.9739L8.85901 24.9889C8.34361 24.791 7.87472 24.4885 7.48183 24.1006C7.08894 23.7127 6.78054 23.2478 6.57601 22.7349L6.56601 22.7079C6.30215 21.997 6.16212 21.2462 6.15201 20.4879V20.4829C6.09501 19.2159 6.08201 18.8589 6.08201 15.6109C6.08201 12.3609 6.08201 12.0289 6.15201 10.7369C6.16201 9.92693 6.31201 9.15593 6.58201 8.44193L6.56701 8.48793C6.76804 7.9682 7.07592 7.49645 7.47073 7.10319C7.86554 6.70993 8.3385 6.40391 8.85901 6.20493C9.56944 5.93935 10.3206 5.79926 11.079 5.79093H11.084C12.352 5.73293 12.708 5.71693 15.957 5.71693C19.206 5.71693 19.54 5.71693 20.829 5.79093C21.6058 5.79945 22.3749 5.94502 23.101 6.22093L23.056 6.20493C23.5695 6.40469 24.0364 6.70809 24.4274 7.09624C24.8185 7.48438 25.1254 7.94894 25.329 8.46093L25.339 8.48793C25.589 9.14793 25.739 9.91093 25.753 10.7079V10.7129C25.811 11.9809 25.825 12.3369 25.825 15.5869C25.825 18.8349 25.825 19.1839 25.768 20.4589H25.753V20.4579Z" fill="currentColor" />
          </svg>
        </Link>
      </li>
      <li className='text-white duration-200 hover:text-CoralLight'>
        <Link href={''}>
          <svg className='2xl:w-[32px] w-[24px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.863 27.5961V16.6681H21.549L22.097 12.3891H17.863V9.66413C17.863 8.42913 18.207 7.58413 19.979 7.58413H22.224V3.76913C21.1295 3.64992 20.029 3.5935 18.928 3.60013H18.935C15.676 3.60013 13.439 5.59013 13.439 9.24113V12.3811H9.776V16.6601H13.446V27.5961H17.863Z" fill="currentColor" />
          </svg>
        </Link>
      </li>
      <li className='text-white duration-200 hover:text-CoralLight'>
        <Link href={''}>
          <svg className='2xl:w-[32px] w-[24px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.177 10.263C26.195 10.496 26.195 10.728 26.195 10.96C26.195 18.06 20.791 26.241 10.915 26.241C7.87199 26.241 5.04499 25.36 2.66699 23.829C3.10629 23.8774 3.54806 23.8997 3.98999 23.896C6.50699 23.896 8.82199 23.032 10.655 21.584L10.632 21.601C9.51791 21.5805 8.43761 21.215 7.53996 20.5548C6.64231 19.8947 5.9715 18.9724 5.61999 17.915L5.60999 17.877C5.94099 17.927 6.27499 17.96 6.62399 17.96C7.10499 17.96 7.58899 17.893 8.03899 17.777C5.56499 17.265 3.73199 15.103 3.73199 12.514V12.44C4.47623 12.8546 5.30771 13.0879 6.15899 13.121C5.42271 12.6315 4.81879 11.9677 4.40095 11.1886C3.98312 10.4094 3.76431 9.5391 3.76399 8.65498V8.64898C3.76399 7.65198 4.02899 6.73698 4.49399 5.93998C7.15699 9.19598 11.094 11.325 15.532 11.558L15.569 11.56C15.4831 11.1555 15.4385 10.7434 15.436 10.33V10.327C15.436 8.9033 16.0015 7.53793 17.0082 6.53124C18.0149 5.52454 19.3803 4.95898 20.804 4.95898H20.807C22.353 4.95898 23.749 5.60698 24.731 6.65498C25.9514 6.41978 27.1209 5.97161 28.186 5.33098L28.139 5.35698C27.7385 6.58829 26.9082 7.63435 25.8 8.30398L25.776 8.31698C26.867 8.19381 27.9327 7.90412 28.936 7.45798L28.868 7.48498C28.1397 8.54435 27.2409 9.47565 26.208 10.241L26.176 10.263H26.177Z" fill="currentColor" />
          </svg>
        </Link>
      </li>
      <li className='text-white duration-200 hover:text-CoralLight'>
        <Link href={''}>
          <svg className='2xl:w-[32px] w-[24px]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.56099 6.27882C9.56099 6.66188 9.48554 7.0412 9.33895 7.3951C9.19235 7.74901 8.97749 8.07058 8.70662 8.34145C8.43575 8.61232 8.11418 8.82718 7.76028 8.97377C7.40637 9.12037 7.02706 9.19582 6.64399 9.19582C6.26092 9.19582 5.88161 9.12037 5.5277 8.97377C5.1738 8.82718 4.85223 8.61232 4.58136 8.34145C4.31049 8.07058 4.09563 7.74901 3.94903 7.3951C3.80244 7.0412 3.72699 6.66188 3.72699 6.27882C3.72699 5.50518 4.03432 4.76323 4.58136 4.21619C5.1284 3.66914 5.87035 3.36182 6.64399 3.36182C7.41763 3.36182 8.15958 3.66914 8.70662 4.21619C9.25366 4.76323 9.56099 5.50518 9.56099 6.27882ZM12.316 11.4068V27.5918H17.341V19.5878C17.341 17.4758 17.739 15.4308 20.357 15.4308C22.94 15.4308 22.972 17.8448 22.972 19.7208V27.5928H28V18.7168C28 14.3568 27.061 11.0068 21.965 11.0068C19.519 11.0068 17.879 12.3488 17.208 13.6198H17.14V11.4068H12.316ZM4.12599 11.4068H9.15999V27.5918H4.12699L4.12599 11.4068Z" fill="currentColor" />
          </svg>
        </Link>
      </li>
    </ul>
  )
}

const ProductList = () => {
  const products = [{
    title: 'Power Solutions, BBT', path: ''
  },
  { title: 'Distribution Systems', path: '' },
  { title: 'Transformers, Generators', path: '' },
  { title: 'Building Automation (BAS)', path: '' },
  { title: 'IoT, ICT, Telecom Solutions', path: '' },
  { title: 'Design, Build, Engineering', path: '' },
  { title: 'Industrial Processes, CAM', path: '' },
  ]
  return (

    <ListMaker data={products} title={'Products'} />

  )
}

const FeatureList = () => {
  const features = [{
    title: 'Enterprise', path: ''
  },
  { title: 'Customer Service', path: '' },
  { title: 'Media & Entertainment', path: '' },
  { title: 'Marketing', path: '' },
  { title: 'Analytics', path: '' },
  { title: 'Professional Services', path: '' },
  ]

  return (

    <ListMaker data={features} title={'Features'} />

  )
}
const CompanyInfo = () => {
  const info = [{
    title: 'About us', path: 'about'
  },
  { title: 'Careeres', path: 'careeres' },
  { title: 'Blogs', path: '/blogs' },
  { title: 'Contact', path: '/info/contact' }
  ]

  return (

    <ListMaker data={info} title={'Company'} />

  )
}


const ListMaker = ({ data, title }) => {
  const pathName = usePathname()
  const handlePath = (currentPath) => {

  }
  return (
    <div className="">
      <p className='list-title text-white 2xl:text-[32px] lg:text-[24px] text-lg font-medium'>{title}</p>
      <ul className='flex flex-wrap lg:flex-nowrap lg:flex-col gap-0.5 lg:gap-1 2xl:gap-2 lg:mt-4 mt-2 2xl:mt-6'>
        {
          data.map((item, index) =>
            <li key={index} className='text-white text-sm lg:text-base duration-300 hover:text-CoralLight'>
              <Link onClick={() => handlePath(item.path)} href={item.path}>{item.title}</Link>
            </li>

          )
        }
      </ul>
    </div>
  )
}