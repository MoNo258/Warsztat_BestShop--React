// import {test, test2} from "./test";
// //
// // console.log('test')
// //
// // document.addEventListener("DOMContentLoaded", function() {
// //
// //     test();
// //     test2();
// //
// // });

//
// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// //  JS script to add sticky class to header when page is scrolled
// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// document.addEventListener('DOMContentLoaded', function() {
//
//     const header = document.querySelector("header");
//
//     window.addEventListener("scroll", function() {
//         if (window.scrollY > 150) {
//             header.classList.add("sticky");
//         } else {
//             header.classList.remove("sticky");
//         }
//     })
//
// });
//
//
// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// //  JS script to add show class to menu-list
// // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// document.addEventListener('DOMContentLoaded', function() {
//
//     const btn = document.querySelector(".page-nav-burger");
//     const menu = document.querySelector(".menu__list");
//
//     btn.addEventListener("click", function() {
//         menu.classList.toggle("show");
//     });
//
// });



// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
//  This code was created for implementing React
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import HeroBanner from "./HeroBanner";
import SectionStats from "./SectionStats";
import SectionBenefits from "./SectionBenefits";
import SectionPricing from "./SectionPricing";
import SectionContact from "./SectionContact";
import Footer from "./Footer";

const App = () => {
    return (
        <>
            <Header />
            <HeroBanner />
            <SectionStats />
            <SectionBenefits />
            <SectionPricing />
            <SectionContact />
            <Footer />
        </>
    )
};

ReactDOM.render(<App />, document.getElementById("app"));