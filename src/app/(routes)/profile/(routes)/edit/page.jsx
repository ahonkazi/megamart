"use client"
import React, { useEffect, useState } from 'react'
import profileAvatar from './assets/profile.jpg'
import Image from 'next/image'
import { IoCamera } from 'react-icons/io5'
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { range } from '@/utils/Library'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import PageWrapper from '@/layouts/PageWrapper'
import { ButtonPrimary } from '@/components/buttons/Buttons'
import { SelectMidGray, SelectMidGraySearch, InputMidGray } from '@/components/input/InputField'
const EditDetails = () => {
    const [selectedRadio, setSelectedRadio] = useState('Others')
    const radioOptions = ['Others', 'Male', 'Female']
    const [loading, setLoading] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState(null)
    const [country, setCountry] = useState(null)
    const [city, setCity] = useState(null)
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)
    const [profilePic, setProfilePic] = useState(null);
    const [day, setDay] = useState(null)
    const [updatating, setUpdatating] = useState(false)
    const [searchcountryName, setSearchCountryName] = useState('')
    const [searchCityName, setSearchCityName] = useState('')
    const [profile, setProfile] = useState(profileAvatar.src)
    const searchCountry = async () => {
        if (searchcountryName) {
            await axios.get(`https://restcountries.com/v3.1/name/${searchcountryName}?fields=name`).then((res) => {
                setCountryList(res.data)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            await axios.get(`https://restcountries.com/v3.1/all?fields=name`).then((res) => {
                setCountryList(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }



    return (

        <PageWrapper title='Fonebox | Edit profile'>

            <div className="mt-section">
                {
                    loading ?
                        <div className="lg:w-[150px]  lg:h-[150px] w-[100px] h-[100px] rounded-full bg-gray-100">


                        </div> :
                        <div className="lg:w-[150px]  lg:h-[150px] w-[100px] h-[100px] rounded-full border-[3px] border-Coral relative">

                            <div className="overflow-hidden relative w-full h-full">
                                <div className="group h-full w-full">
                                    <LazyLoadImage
                                        alt={'profile pic'}
                                        src={profilePic ? URL.createObjectURL(profilePic) : profile}
                                        className='rounded-full h-full w-full'
                                    />
                                    <div className="absolute group-hover:opacity-100 duration-300 opacity-0 flex items-center justify-center top-0 left-0 w-full  h-full rounded-full bg-black bg-opacity-50 z-[10]">
                                        <button className='text-4xl text-white'>
                                            <HiOutlineViewfinderCircle />
                                        </button>
                                    </div>
                                </div>
                                <div className="absolute duration-300 opacity-0 flex items-center bg-black justify-center bg-opacity-50 h-[50%] w-full bottom-0 left-0  z-[20] translate-y-[25%]">
                                </div>
                            </div>
                            <button className='z-[30] lg:-translate-y-[40%] lg:-translate-x-[25%] absolute bottom-0 right-0'>
                                <label htmlFor="profilePic">
                                    <span className='text-xl cursor-pointer  text-Dark  bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center'>
                                        <IoCamera />
                                        <input accept='image/*' onChange={(e) => { e.target.files[0].type.split('/')[0] === 'image' ? setProfilePic(e.target.files[0]) : setProfilePic(profilePic) }} hidden type="file" name="image" id="profilePic" />
                                    </span>

                                </label>

                            </button>


                        </div>
                }
            </div>
            <div className="grid gap-y-4 mt-section">
                <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
                    <div className="">
                        {
                            loading ?
                                ''
                                :
                                <InputMidGray value={name} setValue={setName} label={'Fullname'} />
                        }
                    </div>
                    <div className="">
                        {
                            loading ?
                                ''
                                :
                                <InputMidGray label={'Phone'} value={phone} setValue={setPhone} />
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    <div className="">
                        {
                            loading ?
                                ''
                                :
                                <InputMidGray label={'Address'} value={address} setValue={setAddress} />
                        }
                    </div>

                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                        <div className="">
                            {
                                loading ?
                                    ''
                                    :
                                    <SelectMidGraySearch keyUpFunction={searchCountry} inputValue={searchcountryName} setInputValue={setSearchCountryName} required={false} setSeletedData={setCountry} selectedData={country === null ? 'Select Country' : country} label="Country" data={countryList.map((item, index) => item.name.common)} />
                            }
                        </div>
                        <div className="">
                            {
                                loading ?
                                    ''
                                    :
                                    <SelectMidGraySearch inputValue={searchCityName} setInputValue={setSearchCityName} required={false} setSeletedData={setCity} selectedData={city === null ? 'Select City' : city} label="City" data={cityList.map((item, index) => item.name.common)} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-y-4 mt-section grid-cols-1 gap-x-4 sm:grid-cols-2">
                <div className="">
                    <p className='text-sm md:text-base text-Dark'>Date of birth:</p>
                    <div className="grid mt-1  gap-x-4 gap-y-4 grid-cols-3">
                        <div className="">
                            {
                                loading ?
                                    ''
                                    :
                                    <SelectMidGray fieldName='SelectYear' selectedData={year ? year : null} setSeletedData={setYear} required={false} placeholder={'Year'} label="Year" data={range(1920, 2023)} />
                            }
                        </div>
                        <div className="">
                            {
                                loading ?
                                    ''
                                    :
                                    <SelectMidGray fieldName='SelectMonth' required={false} selectedData={month ? month : null} setSeletedData={setMonth} label="Month" data={range(1, 12)} />
                            }
                        </div>
                        <div className="">
                            {
                                loading ?
                                    ''
                                    :
                                    <SelectMidGray fieldName='SelectDay' required={false} selectedData={day ? day : null} setSeletedData={setDay} label="Day" data={range(1, 31)} />
                            }
                        </div>
                    </div>
                </div>

                <div className={`${loading ? '' : 'sm:mt-4'}`}>
                    <p className='text-sm md:text-base text-Dark'>Gander:</p>
                    {
                        loading ?
                            <div className="sm:mt-1">
                            </div>
                            :
                            <div className="sm:mt-4">
                                {
                                    radioOptions.map((item, index) =>
                                        <button key={index} className="radio-item flex items-center">
                                            <span onClick={() => setSelectedRadio(item)} type='button' className={`${selectedRadio === index ? 'border-Blue' : 'border-gray-300'} w-4 h-4 rounded-full bg-transparent border-2  flex items-center justify-center `}>
                                                <span className={`${selectedRadio === item ? 'opacity-100' : 'opacity-0'} duration-300 ball w-2 h-2 bg-Blue rounded-full block`}></span>
                                            </span>
                                            <span className='text-Dark pl-2'>{item}</span>
                                        </button>

                                    )
                                }

                            </div>}

                </div>
            </div>
            <div className="flex justify-end mt-2">
                <ButtonPrimary>Update</ButtonPrimary>
            </div>

        </PageWrapper>
    )
}

export default EditDetails