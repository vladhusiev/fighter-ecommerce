import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./HeaderTop.css";

export default function HeaderTop() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <div className="header_upper">
            <div className="container">
                <div className="header_upper_wrap">
                    <ul className="header_list">
                        <li className="header_item">
                            <Link to="/delivery">
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
    );
}
