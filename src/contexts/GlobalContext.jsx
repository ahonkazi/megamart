"use client"
import { createContext, useState } from "react";
import { AiOutlineChrome, AiOutlineLaptop, AiOutlineMan, AiOutlineMedicineBox, AiOutlineShopping, AiOutlineTaobao, AiOutlineVideoCamera, AiOutlineWoman, AiTwotoneHourglass } from "react-icons/ai";
import { MdElectricBike, MdEmojiFoodBeverage, MdPregnantWoman } from "react-icons/md";

export const GetGlobalContext = createContext();
export const GlobalContext = ({ children }) => {
    const [desktopSidebarStatus, SetDesktopSidebarStatus] = useState(false);
    const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);

    const [searchFilterStatus, setSearchFilterStatus] = useState();

    const Categories = [
        {
            'name': "Women's & Girls' Fashion", 'slug': 'girls-fashion', 'icon': <AiOutlineWoman />,
            'SubCategories': [
                {
                    'name': "Smartphone", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Oppo Phone', 'slug': '' },
                        { 'name': 'Vivo Phone', 'slug': '' },
                        { 'name': 'Nokia Phone', 'slug': '' },
                        { 'name': 'Xiaomi Phone', 'slug': '' },
                        { 'name': 'Samsung Phone', 'slug': '' },
                        { 'name': 'Realmi Phone', 'slug': '' },
                        { 'name': 'Redmi Phone', 'slug': '' },
                    ]
                },
                {
                    'name': "Laptops", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
            ]
        },
        {
            'name': 'Health & body', 'slug': 'health-and-body', 'icon': <AiOutlineMedicineBox />,
            'SubCategories': [
                {
                    'name': "Smartphone", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Oppo Phone', 'slug': '' },
                        { 'name': 'Vivo Phone', 'slug': '' },
                        { 'name': 'Nokia Phone', 'slug': '' },
                        { 'name': 'Xiaomi Phone', 'slug': '' },
                        { 'name': 'Samsung Phone', 'slug': '' },
                        { 'name': 'Realmi Phone', 'slug': '' },
                        { 'name': 'Redmi Phone', 'slug': '' },
                    ]
                },
                {
                    'name': "Laptops", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
                {
                    'name': "Laptops", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
            ]
        },
        { 'name': ' Watches, Bags, Jewellery', 'slug': 'Watches-Bags-Jewellery', 'icon': <AiOutlineShopping /> },
        { 'name': "Men's & Boys' Fashion", 'slug': "Men's-Boys-Fashion", 'icon': <AiOutlineMan /> },
        { 'name': "Mothers & baby", 'slug': "", 'icon': <MdPregnantWoman /> },
        {
            'name': "Electronics Devices", 'slug': "", 'icon': <AiOutlineLaptop />, 'SubCategories': [
                {
                    'name': "Smartphone", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Oppo Phone', 'slug': '' },
                        { 'name': 'Vivo Phone', 'slug': '' },
                        { 'name': 'Nokia Phone', 'slug': '' },
                        { 'name': 'Xiaomi Phone', 'slug': '' },
                        { 'name': 'Samsung Phone', 'slug': '' },
                        { 'name': 'Realmi Phone', 'slug': '' },
                        { 'name': 'Redmi Phone', 'slug': '' },
                    ]
                },
                {
                    'name': "Laptops", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
            ]
        },
        {
            'name': "TV & Home Appliances", 'slug': "", 'icon': <AiOutlineVideoCamera />,
            'SubCategories': [
                {
                    'name': "Television", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Vision Tv', 'slug': '' },
                        { 'name': 'Walton Tv', 'slug': '' },
                        { 'name': 'LG Tv', 'slug': '' },
                        { 'name': 'Xiaomi Tv', 'slug': '' },
                        { 'name': 'Samsung Tv', 'slug': '' },

                    ]
                },
                {
                    'name': "Deep Freeze", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
                {
                    'name': "Deep Freeze", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
                {
                    'name': "Deep Freeze", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
                {
                    'name': "Deep Freeze", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
                {
                    'name': "Deep Freeze", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
                {
                    'name': "Deep Freeze", 'path': 'sub-category-slug', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
            ]
        },
        { 'name': "Electronic Accessories", 'slug': "", 'icon': <AiOutlineChrome /> },
        { 'name': "Groceries", 'slug': "", 'icon': <MdEmojiFoodBeverage /> },
        { 'name': "Home & Lifestyle", 'slug': "", 'icon': <AiTwotoneHourglass /> },
        { 'name': "Sports & Outdoors", 'slug': "", 'icon': <AiOutlineTaobao /> },
        { 'name': "Automotive & Motorbike", 'slug': "", 'icon': <MdElectricBike /> },
    ]
    const menu = [
        {
            name: 'Marketing Material',
            path: '',
            subMenu: [
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
            ]









        },
        {
            name: 'Stickers & Labels', path: '/stores',
            subMenu: [
                {
                    title: 'Stickers & Labels',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'New',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
            ]
        },
        {
            name: 'Boxes & Packaging', path: '/events',
            subMenu: [
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
            ]
        },
        {
            name: 'Signs & Banners', path: '/contact-us',
            subMenu: [
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
            ]
        },
        {
            name: 'Apparel & Promo', path: '/contact-us',
            subMenu: [
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
            ]
        },
        {
            name: 'Trade Show & Events', path: '/contact-us',
            subMenu: [
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
                {
                    title: 'Business card',
                    path: '',
                    subSubMenu: [
                        {
                            title: 'Standard Business Cards',
                            path: '',
                            status: 'Best Sellers',
                        },
                        {
                            title: 'Die- Cut Business Cards',
                            path: '',
                        },
                        {
                            title: 'Painted Edge Business Cards',
                            path: '',
                        },
                        {
                            title: 'Plastic Business Cards',
                            path: '',
                        },
                        {
                            title: 'All Business Cards',
                            path: '',
                            hasMore: true
                        },
                    ]

                },
            ]
        },

    ]
    const productTags = [
        'Shirts', 'Electronics', 'Desktop', 'Tops', 'T-shirts', 'Fahions'
    ]
    const productSizes = [
        'S', 'M', 'L', 'XL', 'XXL'
    ]

    return (
        <GetGlobalContext.Provider value={{ mobileSidebarStatus, searchFilterStatus, setSearchFilterStatus, productSizes, productTags, setMobileSidebarStatus, desktopSidebarStatus, SetDesktopSidebarStatus, Categories, menu }}>{children}</GetGlobalContext.Provider>
    )
}