import React from 'react'
import './Cta.css'

export default function Cta() {
    return (
        <section className="cta" id="cta">
            <div className="container">
                <div className="cta_wrap">
                    <div className="cta_content">
                        <h2 className="cta_title">Узнайте первыми</h2>
                        <p className="cta_desc">Подписывайтесь на рассылку и получите индивидуальное предложение</p>
                    </div>
                    <div className="cta_input">
                        <input type="text" placeholder="Введите свой email" />
                        <button className="cta_input_btn"><i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
