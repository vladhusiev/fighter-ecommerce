import React from 'react'
import Skeleton from "react-loading-skeleton";
import './Skeleton.css'

export default function SkeletonScreen() {
    return (
        <div>
            <ul className="item_list">
                {Array(6).fill().map((item, index) => (
                    <li className="item" key={index}>
                        <Skeleton rect={true} height={325} width={225} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
