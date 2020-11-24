import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useDispatch, useSelector } from 'react-redux'

export default function Sidebar({products}) {

    const [sliderValues, setSliderValues] = useState([0, 50000]);
    const [brand, setBrand] = useState({});
    
    
    
    useEffect(() => {
        const brands = [];
        products.map((item) => {
            brands.push(item.brand)
        })
        const uniqueData = new Set(brands);
        const uniqueBrands = [...uniqueData];
        const createBrandObj = () => {
            const brandObj = {}
            uniqueBrands.map((product) => {
                brandObj[product] = false
            })
            return brandObj
        }
        setBrand(createBrandObj())
    }, [products])

    const handleFilter = () => {
        console.log('404')
    }

    const [sizesClothes, setSizesClothes] = useState({
        S: false,
        M: false,
        L: false,
        XL: false,
        XXL: false,
    });
    const [sizesShoes, setSizesShoes] = useState({
        30: false,
        34: false,
        36: false,
        37: false,
        38: false,
        39: false,
        40: false,
        41: false,
        42: false,
        43: false,
        44: false,
        45: false,
        46: false,
        47: false
    });
    const [gender, setGender] = useState({
        male: false,
        female: false
    });
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
                <AccordionDetails className="sidebar-details sidebar-details--price">
                    <div className="sidebar-inputs">
                        <div className="sidebar-input-wrap">
                            <span className="pre">от</span>
                            <input type="number" value={sliderValues[0]}  onChange={ e => setSliderValues([parseInt(e.target.value), sliderValues[1]])} />
                            <span>грн</span>
                        </div>
                        <div className="sidebar-input-wrap">
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
                    <FormGroup row>
                        { Object.keys(sizesClothes).map((item) => (
                            <FormControlLabel
                                key={item}
                                control={<Checkbox 
                                checked={sizesClothes[item]} 
                                onChange={ e => setSizesClothes({ ...sizesClothes, [e.target.name]: e.target.checked })} 
                                name={item} />}
                                label={item} 
                            />
                        )) }
                    </FormGroup>
                    <FormGroup row>
                        { Object.keys(sizesShoes).map((item) => (
                            <FormControlLabel
                                key={item}
                                control={<Checkbox 
                                checked={sizesShoes[item]} 
                                onChange={ e => setSizesShoes({ ...sizesShoes, [e.target.name]: e.target.checked })} 
                                name={item} />}
                                label={item} 
                            />
                        )) }
                    </FormGroup>
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
                <AccordionDetails className="gender-field">
                    <FormGroup row>
                        { Object.keys(gender).map((item) => (
                            <FormControlLabel
                                key={item}
                                control={<Checkbox 
                                checked={gender[item]} 
                                onChange={ e => setGender({ ...gender, [e.target.name]: e.target.checked })} 
                                name={item} />}
                                label={item} 
                            />
                        )) }
                    </FormGroup>
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
                <AccordionDetails className="brand-field">
                    { Object.keys(brand).map((item) => (
                        <FormControlLabel
                            key={item}
                            control={<Checkbox 
                            checked={brand[item]} 
                            onChange={ e => setBrand({ ...brand, [e.target.name]: e.target.checked })} 
                            name={item} />}
                            label={item} 
                        />
                    )) }
                </AccordionDetails>
            </Accordion>
            <a className="main_btn" onClick={handleFilter}>Фильтр</a>
        </div>
    )
}
