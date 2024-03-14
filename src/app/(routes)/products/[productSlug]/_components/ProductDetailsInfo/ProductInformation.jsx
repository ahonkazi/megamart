"use client"
import { RatingStar } from '@/components/icons/Icon'
import { SelectBorder } from '@/components/input-fields/select-option';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'next-share';
import React, { useState } from 'react'

export default function ProductInformation() {
  const [quantity, setQuantity] = useState(1);
  let stock = 50;
  const handleSub = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  const handleAdd = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }

  }

  return (
    <div className='w-full'>
      <p className='text-Primary font-medium  text-sm md:text-base 2xl:text-xl leading-[160%]'>Product details</p>
      <TitleAndRating />
      <PriceAndStock stock={stock} />
      <ShortDescription />
      <div className="w-fit flex items-center gap-4 mt-6 2xl:mt-[40px]">
        <ProductQuantityController handleAdd={handleAdd} handleSub={handleSub} stock={stock} setQuantity={setQuantity} quantity={quantity} />
        <AddToCart />
      </div>
      <ProductExtraInformation />
    </div>
  )
}



const ProductQuantityController = ({ handleAdd, handleSub, stock, setQuantity, quantity }) => {
  return (
    <div className="quantity w-fit py-1 md:py-2 2xl:py-4 border px-4 rounded 2xl:px-[22px] border-gray-300 flex items-center">
      <button onClick={handleSub} className='px-2'>
        <svg className='w-[18px] 2xl:w-[20px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16675 10H15.8334" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="">
        <input className='text-lg 2xl:text-xl border text-center max-w-[60px] border-l border-r border-gray-300 border-y-0 text-Gray' onChange={(e) => { e.target.value < 0 ? setQuantity(1) : e.target.value > stock ? setQuantity(50) : setQuantity(e.target.value) }} value={quantity} type="text" />

      </div>
      <button onClick={handleAdd} className='px-2'>
        <svg className='w-[18px] 2xl:w-[20px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4.16666V15.8333" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.16675 10H15.8334" stroke="#4C4C4C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </div>
  )
}


const AddToCart = () => {
  return (

    <button className='bg-Primary flex items-center text-sm md:text-base gap-2 2xl:gap-[10px] px-6 2xl:text-lg 2xl:py-4 2xl:px-16 py-2.5 rounded text-white'>
      <svg className='w-[16px] 2xl:w-[18px]' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.375 10.6875C6.375 12.1275 7.56 13.3125 9 13.3125C10.44 13.3125 11.625 12.1275 11.625 10.6875" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.60758 1.5L3.89258 4.2225" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.3926 1.5L14.1076 4.2225" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.5 5.8875C1.5 4.5 2.2425 4.3875 3.165 4.3875H14.835C15.7575 4.3875 16.5 4.5 16.5 5.8875C16.5 7.5 15.7575 7.3875 14.835 7.3875H3.165C2.2425 7.3875 1.5 7.5 1.5 5.8875Z" stroke="white" strokeWidth="1.5" />
        <path d="M2.625 7.5L3.6825 13.98C3.9225 15.435 4.5 16.5 6.645 16.5H11.1675C13.5 16.5 13.845 15.48 14.115 14.07L15.375 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span>Add to cart</span>
    </button>

  )
}

const TitleAndRating = () => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="title leading-[130%]  text-Dark text-2xl md:text-[36px] mt-1.5 md:mt-2 2xl:mt-[12px] 2xl:text-[48px]">Custom Gift Bags</h1>
      <div className="flex items-center">
        <RatingStar rating={5} />
      </div>
    </div>
  )
}
const PriceAndStock = ({ stock }) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="title leading-[130%] font-medium text-Danger text-xl md:text-[28px] mt-2 md:mt-3 2xl:mt-[28px] 2xl:text-[40px]">100$</h1>
      <p className='text-Primary font-medium text-sm md:text-base 2xl:text-xl leading-[160%]'>{stock} in stock</p>

    </div>
  )
}


const ShortDescription = () => {
  return (
    <p className='text-Dark mt-2 md:mt-3 text-sm md:text-base 2xl:mt-[28px] 2xl:text-[20px]'>
      Circuit and Load Protection products protect solenoids, relay coils and more. They are DIN Rail mountable for quick installation and excellent for high-density configurations. We offer electronic circuit protection modules, solid-state overload relays and surge protectors and filters.
    </p>
  )
}

const ProductExtraInformation = () => {
  const [size, setSize] = useState(null)
  const [metarial, setMetarial] = useState(null)
  const [lamination, setLamination] = useState(null)
  const [colour, setColour] = useState(null)
  return (
    <div className="mt-5 2xl:mt-[30px]">
      <ul className='flex flex-col gap-4 2xl:gap-[24px]'>
        <div className="select-variations lg:w-[60%]">
          <div className="flex items-center gap-x-4">
            <p className='text-Dark shrink-0  font-medium min-w-[90px] lg:min-w-[120px]'>Size :</p>
            <div className="w-full">
              <SelectBorder data={[`Mini Bag (3'' W x 2'' D x 4" H)`, `Square Bag (5.25" W x 3" D x 5.25" H)`]} setSeletedData={setSize} selectedData={size} />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <p className='text-Dark shrink-0  font-medium min-w-[90px] lg:min-w-[120px]'>Metarial :</p>
            <div className="w-full">
              <SelectBorder data={[`Mini Bag (3'' W x 2'' D x 4" H)`, `Square Bag (5.25" W x 3" D x 5.25" H)`]} setSeletedData={setMetarial} selectedData={metarial} />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <p className='text-Dark shrink-0  font-medium min-w-[90px] lg:min-w-[120px]'>Lamination :</p>
            <div className="w-full">
              <SelectBorder data={[`Mini Bag (3'' W x 2'' D x 4" H)`, `Square Bag (5.25" W x 3" D x 5.25" H)`]} setSeletedData={setLamination} selectedData={lamination} />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <p className='text-Dark shrink-0  font-medium min-w-[90px] lg:min-w-[120px]'>Colour :</p>
            <div className="w-full">
              <SelectBorder data={[`Mini Bag (3'' W x 2'' D x 4" H)`, `Square Bag (5.25" W x 3" D x 5.25" H)`]} setSeletedData={setColour} selectedData={colour} />
            </div>
          </div>


        </div>
        <li className='flex items-center gap-1'>
          <p className='2xl:text-lg text-sm md:text-base text-Gray'><span className='text-Blue font-medium 2xl:font-semibold'>Share:</span></p>
          <ShareToSocialMedia />
        </li>
      </ul>
    </div>
  )
}

const ShareToSocialMedia = () => {
  return (
    <ul className='flex items-center gap-1'>
      <li className=''>
        <FacebookShareButton
          url={'https://fonebox-frontend.vercel.app'}
          quote={'Fonebox is the best place to purchase automation software and products'}

        >
          <span className="w-7 h-7 rounded-full bg-[#40D7E1] flex items-center justify-center">
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.54238 13.8236C1.54238 13.921 1.62743 14 1.7322 14H4.43761C4.54238 14 4.62713 13.921 4.62713 13.8236V6.94477H6.58858C6.68688 6.94477 6.76898 6.87449 6.77752 6.78344L6.96616 4.71078C6.97528 4.60797 6.88817 4.51965 6.77693 4.51965H4.62713V3.04937C4.62713 2.70457 4.9279 2.42512 5.29871 2.42512H6.81018C6.91525 2.42512 7 2.34609 7 2.24875V0.176367C7 0.0790234 6.91525 0 6.81018 0H4.25633C2.7575 0 1.54238 1.12875 1.54238 2.52137V4.51965H0.189817C0.0850499 4.51965 0 4.59867 0 4.69602V6.7684C0 6.86602 0.0850499 6.94477 0.189817 6.94477H1.54238V13.8236Z" fill="white" />
            </svg>
          </span>
        </FacebookShareButton>
      </li>
      <li className=''>
        <TwitterShareButton
          url={'https://fonebox-frontend.vercel.app'}
          quote={'Fonebox is the best place to purchase automation software and products'}

        >
          <span className="w-7 h-7 rounded-full bg-[#55ACEE] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.56058 12.2559C9.51367 12.2559 12.2223 8.15246 12.2223 4.59422C12.2223 4.47768 12.2199 4.36161 12.2147 4.24619C12.7404 3.86606 13.1974 3.39169 13.5579 2.85174C13.0754 3.06629 12.5561 3.21053 12.0115 3.27579C12.5674 2.94228 12.9943 2.41494 13.1956 1.7863C12.6753 2.09476 12.0991 2.31886 11.4857 2.4399C10.9943 1.91649 10.2947 1.58917 9.52001 1.58917C8.03302 1.58917 6.82703 2.79508 6.82703 4.28159C6.82703 4.49301 6.85071 4.69849 6.89686 4.89562C4.65883 4.78301 2.67419 3.71155 1.3462 2.08216C1.11504 2.48004 0.981635 2.94236 0.981635 3.43567C0.981635 4.3698 1.45705 5.19469 2.17991 5.67708C1.73813 5.66352 1.32316 5.54224 0.960365 5.34037C0.959963 5.35169 0.959963 5.36268 0.959963 5.37472C0.959963 6.67887 1.88815 7.76775 3.12046 8.01449C2.89412 8.07605 2.65597 8.1092 2.41036 8.1092C2.23714 8.1092 2.06827 8.09218 1.9042 8.06064C2.24702 9.13057 3.24118 9.90915 4.4198 9.93098C3.49811 10.6534 2.33707 11.0837 1.07522 11.0837C0.858187 11.0837 0.643638 11.0712 0.432861 11.0463C1.62464 11.8102 3.0398 12.256 4.56066 12.256" fill="white" />
            </svg>
          </span>
        </TwitterShareButton>
      </li>

      <li className=''>
        <InstapaperShareButton
          url={'https://fonebox-frontend.vercel.app'}
          quote={'Fonebox is the best place to purchase automation software and products'}

        >
          <span className="w-7 h-7 rounded-full bg-[#FF2B2B] flex items-center justify-center">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.03153 9.25988C4.66403 11.1871 4.21504 13.035 2.88504 14.0002C2.47461 11.087 3.48797 8.89921 3.95829 6.57664C3.15602 5.22585 4.05481 2.50789 5.74711 3.17781C7.82934 4.0014 3.94407 8.19894 6.55239 8.72312C9.27582 9.27027 10.3873 3.99785 8.69887 2.28339C6.25871 -0.192582 1.59606 2.22679 2.16946 5.77164C2.30891 6.63816 3.20442 6.90121 2.52739 8.09695C0.965512 7.75078 0.499575 6.51921 0.559457 4.87722C0.655981 2.18933 2.97446 0.307535 5.30004 0.0472224C8.24086 -0.281996 11.0009 1.12675 11.3821 3.89339C11.8114 7.01578 10.0546 10.3974 6.91004 10.1543C6.05746 10.0881 5.69981 9.66566 5.03153 9.25988Z" fill="white" />
            </svg>
          </span>
        </InstapaperShareButton>
      </li>
      <li className=''>
        <LinkedinShareButton
          url={'https://fonebox-frontend.vercel.app'}
          quote={'Fonebox is the best place to purchase automation software and products'}

        >
          <span className="w-7 h-7 rounded-full bg-[#40D7E1] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_174_934)">
                <path d="M2.02185 0.710999C1.05943 0.710999 0.430176 1.34298 0.430176 2.17362C0.430176 2.98592 1.04068 3.63592 1.98492 3.63592H2.00319C2.98444 3.63592 3.59511 2.98592 3.59511 2.17362C3.57676 1.34298 2.98444 0.710999 2.02185 0.710999Z" fill="white" />
                <path d="M0.597412 4.79141H3.41099V13.2562H0.597412V4.79141Z" fill="white" />
                <path d="M10.3165 4.59311C8.79872 4.59311 7.78094 6.01937 7.78094 6.01937V4.79178H4.96729V13.2566H7.78078V8.5295C7.78078 8.27643 7.79913 8.02377 7.87347 7.8428C8.07686 7.33748 8.53973 6.81397 9.31702 6.81397C10.3351 6.81397 10.7423 7.59022 10.7423 8.72817V13.2566H13.5557V8.403C13.5557 5.80299 12.1675 4.59311 10.3165 4.59311Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_174_934">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </LinkedinShareButton>
      </li>

    </ul>
  )
}