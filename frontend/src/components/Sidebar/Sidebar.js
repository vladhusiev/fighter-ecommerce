import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux'
import { findTopLessPrices } from '../../actions/productActions'

export default function Sidebar() {

    const [sliderValues, setSliderValues] = useState([0, 50000]);
    const findPrices = useSelector((state) => state.findTopLessPrices);
    const { prices, loading } = findPrices;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTopLessPrices());
        return () => {
        };
    }, []);
    console.log(sliderValues)
  
    return (
        <div className="sidebar">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Цена
                </AccordionSummary>
                <AccordionDetails className="sidebar-details">
                    <div class="sidebar-inputs">
                        <div class="sidebar-input-wrap">
                            <span className="pre">от</span>
                            <input type="number" value={sliderValues[0]}  onChange={ e => setSliderValues([parseInt(e.target.value), sliderValues[1]])} />
                            <span>грн</span>
                        </div>
                        <div class="sidebar-input-wrap">
                            <span className="pre">до</span>
                            <input type="number" value={sliderValues[1]}  onChange={ e => setSliderValues([sliderValues[1], parseInt(e.target.value) ])}/>
                            <span>грн</span>
                        </div>
                        
                    </div>
                    
                    <Range 
                        marks={
                            {
                                0: `0 грн`,
                                50000: `50000 грн`
                            }
                        }
                        min={0}
                        max={50000}
                        defaultValue={sliderValues}
                        value={sliderValues}
                        onChange={ e => setSliderValues(e) }
                        tipFormatter={ value => `${value}` }
                        tipProps={
                            {
                                placement: 'top',
                                visible: true
                            }
                        }
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Размер
                </AccordionSummary>
                <AccordionDetails>
                    123
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Пол
                </AccordionSummary>
                <AccordionDetails>
                    123
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    Бренд
                </AccordionSummary>
                <AccordionDetails>
                    123
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
