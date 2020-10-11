import React from "react";
import "./HeaderTop.css";

export default function HeaderTop() {
    return (
        <div className="header_upper">
            <div className="container">
                <div className="header_upper_wrap">
                    <ul className="header_list">
                        <li className="header_item">
                            <a href="" className="header_upper_link">
                                Оплата и доставка
                            </a>
                        </li>
                        <li className="header_item">
                            <a href="" className="header_upper_link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                    <div className="header_log">
                        <i className="far fa-user-circle"></i>
                        <a className="header_log_link" href="">
                            Вход
                        </a>
                        <span>|</span>
                        <a className="header_log_link" href="">
                            Регистрация
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
