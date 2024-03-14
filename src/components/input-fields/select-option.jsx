"use client"

import { getCookie, setCookie } from "cookies-next";
import { useEffect, useRef, useState } from "react";
import { MdChevronRight } from "react-icons/md";

export const SelectBorder = ({ data = [], fieldName = 'selectOffsetTop', selectedData = null, setSeletedData }) => {
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
            if (e.target.offsetTop !== null) {
                setStatus(false);
            }

            setCookie(fieldName, e.target.offsetTop)
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
            <div ref={selectRef} className="input-item mt-2 relative">
                <button onClick={(e) => { setStatus(!status); getOffsetTop(e) }} type='button' className={`border  ${status ? 'border-Primary' : 'border-gray-300'} text-Dark  flex justify-between items-center text-start py-3 ${status ? 'rounded-t' : 'rounded'} outline-none text-sm md:text-base 2xl:text-lg w-full px-4 text-Gray`}><span >{selectedData ? selectedData : ''}</span> <span><MdChevronRight className={`duration-300 ${status ? '-rotate-90' : 'rotate-90'}`} /></span> </button>
                <div ref={scrollerRef} style={{ scrollbarWidth: 'thin' }} className={`bg-gray-50 z-[10] shadow-1 absolute w-full ${selectTop ? 'bottom-full' : ''}  rounded-b overflow-y-auto max-h-[200px]`}>

                    {
                        status && (
                            <ul ref={ulRef}>
                                {
                                    data?.map((item, index) =>
                                        <li ref={parseInt(item) === parseInt(selectedData) ? selectedItemRef : null} key={index} onClick={(e) => { handleSelect(e, item) }} className={`hover:bg-gray-100 ${parseInt(selectedData) === parseInt(item) ? 'bg-gray-200' : ''} duration-200 text-start cursor-pointer border-t py-3 outline-none w-full px-4 text-Gray text-sm md:text-base 2xl:text-lg`}>{item}</li>
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
