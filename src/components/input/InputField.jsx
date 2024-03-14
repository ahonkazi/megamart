"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { GrFormCheckmark } from "react-icons/gr"
import { FaRegEyeSlash } from "react-icons/fa"
import { IoEyeOutline } from "react-icons/io5"
import { MdChevronRight } from "react-icons/md"
import { BiCheck } from "react-icons/bi"
import { getCookie, setCookie } from "cookies-next"
export const InputPasswordMidGray = ({ label, value, setValue }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="">
            <span className="text-sm text-Dark md:text-base 2xl:text-lg">{label} <span className="text-Coral">*</span></span>

            <div className="border border-gray-200 relative mt-2 rounded">
                <input onChange={(e) => setValue(e.target.value)} type={`${show ? 'text' : 'password'}`} value={value} className="text-Dark text-sm md:text-base 2xl:text-lg bg-transparent outline-none  px-4 py-2.5 md:py-3 w-full" />
                <button onClick={() => setShow(!show)} className="absolute px-4 h-full right-0 top-[50%] -translate-y-[50%]">
                    {show && (
                        <FaRegEyeSlash />
                    )}
                    {!show && (
                        <IoEyeOutline />
                    )}
                </button>
            </div>
        </div>
    )
}
export const InputMidGray = ({ label, type = 'text', required = true, placeholder = '', value, setValue }) => {
    return (
        <div className="">
            <span className="text-sm text-Dark md:text-base 2xl:text-lg">{label} {required && (<span className="text-Coral">*</span>)}</span>

            <div className="border border-gray-200 mt-2 rounded">
                <input placeholder={placeholder} onChange={(e) => setValue(e.target.value)} type={type} value={value} className="text-Dark text-sm md:text-base 2xl:text-lg bg-transparent outline-none  px-4 py-2.5 md:py-3 w-full" />

            </div>
        </div>
    )
}

export const SelectMidGray = ({ data = [], label, fieldName = 'selectOffsetTop', required = true, selectedData = null, setSeletedData }) => {
    const [status, setStatus] = useState(false);
    const [selectTop, setSelectTop] = useState(false);
    const selectedItemRef = useRef()
    const selectRef = useRef()
    const lastRef = useRef()
    const ulRef = useRef()
    const [getY, setY] = useState(0)
    const scrollerRef = useRef()
    const [selectedItem, setSelectedItem] = useState(null);
    useEffect(() => {
        setY(selectRef.current?.offsetTop)

    }, [])

    const getOffsetTop = (e) => {
        if (window.innerHeight - (getY - window.scrollY) < 260) {
            if ((getY + window.scrollY) > 170) {
                setSelectTop(true)
            } else {
                setSelectTop(false)
            }

        } else {
            setSelectTop(false)
        }
    }
    const handleSelect = (e, item) => {
        {
            setSeletedData(item);
            setSelectedItem(e.target.offsetTop);
            setCookie(fieldName, e.target.offsetTop)
            if (e.target.offsetTop) {
                setStatus(false);
            }
        }
    }
    useEffect(() => {
        if (selectedData === null) {
            if (ulRef.current) {
                setCookie(fieldName, parseInt(ulRef.current.clientHeight / 2), { SameSite: true })

            }
        } else {
            if (selectedItemRef.current) {
                setCookie(fieldName, selectedItemRef.current.offsetTop, { SameSite: true })

            }
        }

        if (selectedItemRef.current) {
            setSelectedItem(selectedItemRef.current.offsetTop);
            scrollerRef.current.scrollTop = selectedItemRef.current.offsetTopp;
            setCookie(fieldName, selectedItemRef.current.offsetTop, { SameSite: true })
        }
        scrollerRef.current.scrollTop = getCookie(fieldName);
        if (selectedItem) {
            scrollerRef.current.scrollTop = getCookie(fieldName);

        }

    }, [selectedItem, status])



    return (
        <div className="">
            <span className="text-sm text-Dark md:text-base 2xl:text-lg">{label} {required && (<span className="text-Coral">*</span>)}</span>

            <div ref={selectRef} className="input-item mt-2 relative">
                <button onClick={(e) => { setStatus(!status); getOffsetTop(e) }} type='button' className={`border border-gray-200  flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none text-sm md:text-base 2xl:text-lg w-full px-4 text-Dark`}><span >{selectedData ? selectedData : label}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
                <div ref={scrollerRef} style={{ scrollbarWidth: 'thin' }} className={`bg-gray-50 z-[10] shadow-1 absolute w-full ${selectTop ? 'bottom-full' : ''}  rounded-b overflow-y-auto max-h-[200px]`}>

                    {
                        status && (
                            <ul ref={ulRef}>
                                {
                                    data?.map((item, index) =>
                                        <li ref={parseInt(item) === parseInt(selectedData) ? selectedItemRef : null} key={index} onClick={(e) => { handleSelect(e, item) }} className={`hover:bg-gray-100 ${parseInt(selectedData) === parseInt(item) ? 'bg-gray-200' : ''} duration-200 text-start cursor-pointer border-t py-3 outline-none w-full px-4 text-Dark text-sm md:text-base 2xl:text-lg`}>{item}</li>
                                    )

                                }
                            </ul>
                        )
                    }

                </div>
                <span ref={lastRef}></span>
            </div>
        </div >

    )
}

export const Radio = ({ label, required = false, currentRadio, setCurrentRadio, index }) => {
    return (
        <div className="flex items-center gap-x-3">
            <div className="w-[15px] h-[15px] sm:w-[20px] border-[3px] sm:border-[4px] sm:h-[20px] rounded-full bg-Blue">

            </div>
            <span className="text-sm text-Dark md:text-base 2xl:text-lg">{label} {required && (<span className="text-Coral">*</span>)}</span>

        </div>
    )
}


export const InputGrayBorder = ({ required = false, type = 'text', placeholder = '', value, setValue }) => {
    return (

        <div className="border-[1.5px] border-[#4C4C4C] rounded">
            <input required={required} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} type={type} value={value} className="text-Dark text-sm md:text-base 2xl:text-lg bg-transparent outline-none  px-4 py-2.5 md:py-3 w-full" />

        </div>
    )
}

export const InputPasswordMidBorder = ({ placeholder, value, setValue, required = false }) => {
    const [show, setShow] = useState(false)
    return (

        <div className="border-[1.5px] border-[#4C4C4C] relative rounded">
            <input required={required} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} type={`${show ? 'text' : 'password'}`} value={value} className="text-Dark text-sm md:text-base 2xl:text-lg bg-transparent outline-none  px-4 py-2.5 md:py-3 w-full" />
            <button onClick={() => setShow(!show)} className="absolute px-4 h-full right-0 top-[50%] -translate-y-[50%]">
                {show && (
                    <FaRegEyeSlash />
                )}
                {!show && (
                    <IoEyeOutline />
                )}
            </button>
        </div>
    )
}


export const CheckboxCoralSmall = ({ currentState, setCurrentState }) => {
    return (
        <button onClick={() => setCurrentState(!currentState)} className={`w-4 ${currentState ? 'bg-Coral' : ''} duration-300 flex text-lg items-center justify-center text-white border border-Coral h-4  rounded-sm`}>
            <BiCheck className={`${currentState ? 'opacity-100' : 'opacity-0'} duration-300`} />
        </button>
    )
}

export const SelectMidGraySearch = ({ data = [], label, required = true, selectedData, setSeletedData, inputValue, setInputValue, keyUpFunction = () => console.log('typing...') }) => {
    const [status, setStatus] = useState(false);
    const [selectTop, setSelectTop] = useState(false);
    const selectRef = useRef()
    const lastRef = useRef()
    const [getY, setY] = useState(0)
    useEffect(() => {
        setY(selectRef.current?.offsetTop)
    }, [])

    const getOffsetTop = (e) => {
        if (window.innerHeight - (getY - window.scrollY) < 260) {
            if ((getY + window.scrollY) > 170) {
                setSelectTop(true)
            } else {
                setSelectTop(false)
            }

        } else {
            setSelectTop(false)
        }
    }
    return (
        <div className="">
            <span className="text-sm text-Dark md:text-base 2xl:text-lg">{label} {required && (<span className="text-Coral">*</span>)}</span>

            <div ref={selectRef} className="input-item mt-2 relative">
                <button onClick={(e) => { setStatus(!status); getOffsetTop(e) }} type='button' className={`border border-gray-200  flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none text-sm md:text-base 2xl:text-lg w-full px-4 text-Dark`}><input className="bg-transparent w-full outline-none" placeholder={selectedData} value={inputValue} onKeyUp={(e) => { data ? keyUpFunction() : setSeletedData(e.target.value) }} onChange={(e) => setInputValue(e.target.value)} /> <span><MdChevronRight className={`duration-300 shrink-0 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
                <AnimatePresence>
                    {status && (
                        <motion.ul style={{ scrollbarWidth: 'thin' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`bg-gray-50 z-[10] shadow-1 absolute w-full ${selectTop ? 'bottom-full' : ''} max-h-[200px] rounded-b overflow-y-auto`}>
                            {
                                data?.map((item, index) =>
                                    <li key={index} onClick={() => { setSeletedData(item); setStatus(false); setInputValue(item) }} className="hover:bg-gray-100 duration-200 text-start cursor-pointer border-t py-3 outline-none w-full px-4 text-Dark text-sm md:text-base 2xl:text-lg">{item}</li>
                                )

                            }
                        </motion.ul>
                    )}
                </AnimatePresence>
                <span ref={lastRef}></span>
            </div>
        </div>

    )
}
