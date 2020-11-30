import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Header.css';
import {ClickAwayListener} from '@material-ui/core';

function Header() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const [clothes, setClothes] = useState(false);
    const [shoes, setShoes] = useState(false);
    const [equipment, setEquipment] = useState(false);
    const [accessories, setAccessories] = useState(false);


    return (
        <header className="header" id="header">
            <div className="header_upper">
                <div className="container">
                    <div className="header_upper_wrap">
                        <ul className="header_list">
                            <li className="header_item">
                                <Link to="/deliveryinfo">
                                    <span className="header_upper_link">
                                        Оплата и доставка
                                    </span>
                                </Link>
                            </li>
                            <li className="header_item">
                                <Link to="/contacts">
                                    <span className="header_upper_link">
                                        Контакты
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <div className="header_search">
                            <span className="header_search_label">
                                Поиск по товару:
                            </span>
                            <Link to="/catalog">
                                <span className="header_search_btn">
                                    <i className="fas fa-search"></i>
                                </span>
                            </Link>
                        </div>
                        <div className="header_log">
                            <i className="far fa-user-circle"></i>
                            {userInfo ? (
                                <span className="header_log_link">
                                    <Link to="/profile">
                                        {userInfo.name}
                                    </Link>
                                </span>
                            ) : (
                                <div>
                                    <span className="header_log_link">
                                        <Link to="/profile">
                                            Вход
                                        </Link>
                                    </span>
                                    <span>|</span>
                                    <span className="header_log_link">
                                        <Link to="/register">
                                            Регистрация
                                        </Link>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_main">
                <div className="container">
                    <div className="header_main_wrap">
                        <Link to="/home">
                            <span className="header_logo" href="/">
                                <img src="/images/fighter.svg" alt="logo" />
                            </span>
                        </Link>
                        <ul className="header_menu_list">
                            <li className={clothes ? 'header_menu_item active' : 'header_menu_item'} onClick={() => setClothes(!clothes)}>
                                <span className="header_menu_link">
                                    Одежда
                                </span>
                                {clothes && (
                                    <ClickAwayListener onClickAway={() => setClothes(!clothes)}>
                                        <div className="hidden_category">
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Повседневная одежда</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/tshirt">Футболки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/polo">Футболки поло</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/longsleeve">Лонгсливы</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/hoodie">Толстовки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/jacket">Куртки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shirt">Рубашки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/jeans">Джинсы</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Спортивная одежда</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/hoodie-sport">Толстовки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/rashguards">Рашгарды для единоборств</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/undershirt">Майки и безрукавки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/tshirt-sport">Тренировочные футболки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/pants-sport">Спортивные штаны</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/suit-sport">Спортивные костюмы</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Шорты</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shorts-mma">Шорты для ММА</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shorts-tai">Тайские шорты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shorts-boxing">Боксерские шорты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shorts-sport">Спортивные шорты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shorts">Повседневные шорты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/shorts-beach">Пляжные шорты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/underclothes">Нижнее белье</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Головные уборы</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/cap">Шапки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/cap-baseball">Бейсболки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/balaclava">Балаклавы</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/bandana">Банданы</a>
                                            </li>
                                        </ul>
                                    </div>
                                </ClickAwayListener>
                                )}
                            </li>
                            <li className="header_menu_item" onClick={() => setShoes(!shoes)}>
                               <span className={shoes ? 'header_menu_link active' : 'header_menu_link'} >
                                    Обувь
                                </span>
                                {shoes && (
                                    <ClickAwayListener onClickAway={() => setShoes(!shoes)}>
                                        <div className="hidden_category row">
                                            <ul className="header_submenu">
                                                <li className="header_submenu_title">Обувь</li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/shoes-boxing">Боксерки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/shoes-wrestling">Борцовки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/sneakers">Кроссовки и кеды</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/flip-flops">Вьетнамки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/slippers">Шлепанцы</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/socks">Носки</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </ClickAwayListener>
                                )}
                            </li>
                            <li className={equipment ? 'header_menu_item active' : 'header_menu_item'} onClick={() => setEquipment(!equipment)}>
                                <span className="header_menu_link">
                                    Экипировка
                                </span>
                                {equipment && (
                                    <ClickAwayListener onClickAway={() => setEquipment(!equipment)}>
                                    <div className="hidden_category">
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Перчатки для единоборств</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/gloves-mma">Перчатки для ММА</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/gloves-box">Боксерские перчатки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/gloves-shell">Снарядные перчатки</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Защитная экипировка</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/mouth-guard">Капы для бокса</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/helmet-boxing">Шлем для бокса</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/leg-protection">Защита ног</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/knee-pads">Наколенники и налокотники</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/groin-protection">Защита паха</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/another-protection">Другая защита</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Тренировочное оборудование</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/boxing-paws">Лапы и пады</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/coaching-equipment">Тренерское оборудование</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/boxing-bags">Боксерские мешки и груши</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Тренировочные аксессуары</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/bandages">Бинты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/gel-bandages">Гелевые бинты</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/skipping-rope">Скакалки</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/training-masks">Тренировочные маски</a>
                                            </li>
                                        </ul>
                                        <ul className="header_submenu">
                                            <li className="header_submenu_title">Кимоно</li>
                                            <li className="header_submenu_item">
                                                <a href="/category/kimono-men">Мужское кимоно</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/kimono-woman">Женское кимоно</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/kimono-kids">Детское кимоно</a>
                                            </li>
                                            <li className="header_submenu_item">
                                                <a href="/category/kimono-belts">Пояса для кимоно</a>
                                            </li>
                                        </ul>
                                    </div>
                                    </ClickAwayListener>
                                )}
                            </li>
                            <li className={accessories ? 'header_menu_item active' : 'header_menu_item'} onClick={() => setAccessories(!accessories)}>
                                <span className="header_menu_link">
                                    Аксессуары
                                </span>
                                {accessories && (
                                    <ClickAwayListener onClickAway={() => setAccessories(!accessories)}>
                                        <div className="hidden_category">
                                            <ul className="header_submenu">
                                                <li className="header_submenu_title">Для тренировок</li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/bag">Сумки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/backpack">Рюкзаки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/bag-bag">Сумки мешки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/towel">Полотенца</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/botle">Бутылки и шейкеры</a>
                                                </li>
                                            </ul>
                                            <ul className="header_submenu">
                                                <li className="header_submenu_title">Повседневные</li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/gloves">Перчатки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/clock">Часы</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/glasses">Очки</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/belt">Ремни и пояса</a>
                                                </li>
                                                <li className="header_submenu_item">
                                                    <a href="/category/pocket">Бумажники и кошельки</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </ClickAwayListener>
                                )}
                            </li>
                            <li className="header_menu_item">
                                <span className="header_menu_link discount">
                                    Скидки
                                </span>
                            </li>
                        </ul>
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
                                <Link to="/cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="header_cart_count">3</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <div className="header_menu">
                <div className="container">
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
