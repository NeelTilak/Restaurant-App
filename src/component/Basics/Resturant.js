import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
    ...new Set(
        Menu.map((curlElem)=> {
            return curlElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) =>
    {
        if (category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curlElem) => {
            return curlElem.category === category;
        });
        setMenuData(updatedList);
    }
    // const myStyle = {color: "red"}
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>

            {/* <h1>Kailash da Dhaba</h1> */}
            <MenuCard menuData={menuData}/>
        </>
    );
};

export default Resturant;