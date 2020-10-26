import React from 'react'
import './Cta.css'

export default function Cta() {
    return (
        <section class="cta" id="cta">
            <div class="container">
                <div class="cta_wrap">
                    <div class="cta_content">
                        <h2 class="cta_title">Узнайте первыми</h2>
                        <p class="cta_desc">Подписывайтесь на рассылку и получите индивидуальное предложение</p>
                    </div>
                    <div class="cta_input">
                        <input type="text" placeholder="Введите свой email" />
                        <button class="cta_input_btn"><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
