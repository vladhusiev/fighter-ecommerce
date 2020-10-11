import React from "react";
import "./HeaderMenu.css";

export default function HeaderMenu() {
    return (
        <div className="header_menu">
            <div className="container">
                <ul className="header_menu_list">
                    <li className="header_menu_item">
                        <a href="" className="header_menu_link">
                            Одежда
                        </a>
                    </li>
                    <li className="header_menu_item">
                        <a href="" className="header_menu_link">
                            Обувь
                        </a>
                    </li>
                    <li className="header_menu_item">
                        <a href="" className="header_menu_link">
                            Экипировка
                        </a>
                    </li>
                    <li className="header_menu_item">
                        <a href="" className="header_menu_link">
                            Аксессуары
                        </a>
                    </li>
                    <li className="header_menu_item">
                        <a href="" className="header_menu_link">
                            Скидки
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
