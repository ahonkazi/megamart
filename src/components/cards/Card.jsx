import style from './card.module.scss';
import { ImStarFull, ImStarHalf } from 'react-icons/im'
import { FaCartPlus } from 'react-icons/fa6'
import { AiFillEye, AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link';
import product_image from '../../assets/product_image.jpg';
export const ProductCard = () => {
    return (
        <div className={`product-card  xs:max-w-[100%]  ${style.ProductCardStyle} bg-white rounded-[10px] pb-2.5`}>
            <div className={`product-img cursor-pointer relative ${style.productImgWrapper}`}>
                <img src={product_image.src} alt="" className='rounded-[10px] w-full' />
                <div className={`${style.OverLay2} py-3 px-4 w-full h-full flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                </div>
                <div className={`${style.OverLay} z-[20] py-3 overflow-hidden px-4 w-full h-full flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                    <div className="overlay-top flex justify-end flex-col items-end gap-2">
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-Dark bg-white rounded-full`}><AiOutlineHeart /> </button>
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-Dark bg-white rounded-full`}><AiOutlineEye /> </button>

                    </div>
                    <div className="overlay-bottom overflow-hidden w-full flex items-center justify-center">
                        <button className={`${style.FadeUp} bg-Light px-4 rounded-md text-Primary font-Secondary text-sm font-medium py-2 w-full`}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between xs:justify-center xs:gap-4">
                <div className="">
                    <div className="product-info px-3">
                        <Link href={'/products/a4tech-gaming-keyboard'}>
                            <h2 className="title hover:text-Primary text-Secondary font-Base text-sm mt-[14px] text-ellipsis">Uiisii C100 Super Bass Stereo In Ear Headphone - Black ...</h2>
                        </Link>
                        <p className="price text-Danger pt-2 font-medium text-lg"><span className=''>৳ </span>1400</p>
                        <p className='text-xs font-Base text-Dark'><strike><span>$</span>280</strike> <span className='ml-2'>-</span> <span>50%</span> </p>
                    </div>
                    <div className="product-footer flex-col xs:flex-row  px-2 mt-1 flex justify-between sm:items-center">
                        <p className='flex items-center'>
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarHalf className='text-Warning text-sm' />
                        </p>

                    </div>
                </div>

            </div>
        </div>

    )
}




export const ProductCardVertical = () => {
    return (
        <div className={`product-card flex  xs:max-w-[100%]  ${style.ProductCardStyle} bg-white rounded-[10px]`}>
            <div className={`product-img cursor-pointer relative ${style.productImgWrapper}`}>
                <img src={product_image.src} alt="" className='rounded-[10px] h-full w-full' />
                <div className={`${style.OverLay2} py-3 px-4 w-full h-full flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                </div>
                <div className={`${style.OverLay} z-[20] py-3 overflow-hidden px-4 w-full h-full flex justify-between flex-col  absolute top-0  rounded-[10px]`}>
                    <div className="overlay-top flex justify-end flex-col items-end gap-2">
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-Dark bg-white rounded-full`}><AiOutlineHeart /> </button>
                        <button className={`${style.SlideRight} w-7 h-7 flex items-center justify-center text-lg text-Dark bg-white rounded-full`}><AiOutlineEye /> </button>

                    </div>
                    <div className="overlay-bottom overflow-hidden w-full flex items-center justify-center">
                        <button className={`${style.FadeUp} bg-Light px-4 rounded-md text-Primary font-Secondary text-sm font-medium py-2 w-full`}>Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col pb-2 justify-between xs:justify-center xs:gap-4">
                <div className="">
                    <div className="product-info px-3">
                        <Link href={'/products/a4tech-gaming-keyboard'}>
                            <h2 className="title hover:text-Primary text-Secondary font-Base text-sm mt-[14px] text-ellipsis">Uiisii C100 Super Bass Stereo In Ear Headphone - Black ...</h2>
                        </Link>
                        <p className="price text-Danger pt-2 font-medium text-lg"><span className=''>৳ </span>1400</p>
                        <p className='text-xs font-Base text-Dark'><strike><span>$</span>280</strike> <span className='ml-2'>-</span> <span>50%</span> </p>
                    </div>
                    <div className="product-footer flex-col xs:flex-row  px-2 mt-1 flex justify-between sm:items-center">
                        <p className='flex items-center'>
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarFull className='text-Warning text-sm' />
                            <ImStarHalf className='text-Warning text-sm' />
                        </p>

                    </div>
                </div>

            </div>
        </div>

    )
}


export const BlogCard = () => {
    return (
        <div className="bg-white  rounded-lg  p-5 overflow-hidden">
            <div className="photo">
                <img src="https://staticecp.uprinting.com/9871/350x350/UP_HP-Content_2.png" alt="" />
            </div>
            <div className="py-4">
                <div className="text-xs font-bold uppercase text-Primary tracking-widest mb-2">Business Card</div>
                <Link href={'/blogs/details'} className="text-sm md:text-base duration-300 hover:text-Primary font-medium font-Base text-Secondary leading-snug mb-2">How to Hang Posters Without Damaging the Wall or Poster</Link>
            </div>

        </div>

    )
}