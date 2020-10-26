import { Link } from 'react-router-dom'
import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer class="footer" id="footer">
            <div class="container">
                <div class="footer_wrap">
                    <div class="footer_left">
                        <Link to="/">
                            <span class="footer_logo">
                                <img src="/images/fighter.svg" alt="Logo" />
                            </span>
                        </Link>
                        <p class="footer_desc">
                            Copyright 2020 © Интернет-магазин спортивной одежды и экипировки для единоборств MMA Style
                        </p>
                    </div>
                    <div class="footer_center">
                        <ul class="footer_menu">
                            <li class="footer_menu_item">
                                <Link to="/contacts">
                                    <span class="footer_menu_link">Контакты</span>
                                </Link>
                            </li>
                            <li class="footer_menu_item">
                                <Link to="/delivery">
                                    <span class="footer_menu_link">Оплата и доставка</span>
                                </Link>
                            </li>
                            <li class="footer_menu_item">
                                <Link to="/">
                                    <span class="footer_menu_link">Пользовательское соглашение</span>
                                </Link>
                            </li>
                            <li class="footer_menu_item">
                                <Link to="/news">
                                    <span class="footer_menu_link">Новости</span>
                                </Link>
                            </li>
                            <li class="footer_menu_item">
                                <Link to="/about">
                                    <span class="footer_menu_link">О нас</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer_right">
                        <ul class="footer_socials">
                            <li class="footer_social">
                                <a href="">
                                    <i class="fab fa-telegram-plane"></i>
                                </a>
                            </li>
                            <li class="footer_social">
                                <a href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="footer_social">
                                <a href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
