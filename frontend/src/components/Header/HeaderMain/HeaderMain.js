import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../../actions/productActions';

function HeaderMain(props) {
    
    return (
        <div className="header_main">
            <div className="container">
                <div className="header_main_wrap">
                    <Link to="/">
                        <span className="header_logo" href="/">
                            <img src="/images/fighter.svg" alt="logo" />
                        </span>
                    </Link>
                    <div className="header_search">
                        <input
                            type="text"
                            placeholder="Поиск по товару или бренду"
                        />
                        <a className="header_search_btn" href="#">
                            <i className="fas fa-search"></i>
                        </a>
                    </div>
                    <div className="header_phone">
                        <span className="header_phone_icon">
                            <i className="fas fa-mobile-alt"></i>
                        </span>
                        <div className="header_phone_inner">
                            <a href="tel:+380935064104">
                                <strong>+38 093 506 41 04</strong>
                            </a>
                            <span>Обратная связь</span>
                        </div>
                    </div>
                    <div className="header_cart">
                        <div className="header_cart_wrap">
                            <i className="fas fa-shopping-cart"></i>
                            <span className="header_cart_count">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMain;
