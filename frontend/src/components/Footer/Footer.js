import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer_wrap">
                    <div className="footer_left">
                        <Link to="/">
                            <span className="footer_logo">
                                <img src="/images/fighter.svg" alt="Logo" />
                            </span>
                        </Link>
                        <p className="footer_desc">
                            Copyright 2020 © Интернет-магазин спортивной одежды и экипировки для единоборств MMA Style
                        </p>
                    </div>
                    <div className="footer_center">
                        <ul className="footer_menu">
                            <li className="footer_menu_item">
                                <Link to="/contacts">
                                    <span className="footer_menu_link">Контакты</span>
                                </Link>
                            </li>
                            <li className="footer_menu_item">
                                <Link to="/deliveryinfo">
                                    <span className="footer_menu_link">Оплата и доставка</span>
                                </Link>
                            </li>
                            <li className="footer_menu_item">
                                <Link to="/">
                                    <span className="footer_menu_link">Пользовательское соглашение</span>
                                </Link>
                            </li>
                            <li className="footer_menu_item">
                                <Link to="/news">
                                    <span className="footer_menu_link">Новости</span>
                                </Link>
                            </li>
                            <li className="footer_menu_item">
                                <Link to="/about">
                                    <span className="footer_menu_link">О нас</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer_right">
                        <ul className="footer_socials">
                            <li className="footer_social">
                                <a href="">
                                    <i className="fab fa-telegram-plane"></i>
                                </a>
                            </li>
                            <li className="footer_social">
                                <a href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="footer_social">
                                <a href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
