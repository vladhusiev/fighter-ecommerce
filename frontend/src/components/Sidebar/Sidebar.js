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
import { filterProducts } from '../../actions/productActions'

export default function Sidebar({products, filteredProducts}) {

    const [sliderValues, setSliderValues] = useState([0, 10000]);
    const [filteredSize, setFilteredSize] = useState([]);
    const [brand, setBrand] = useState({});
    const dispatch = useDispatch();
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

    const [sizes, setSizes] = useState({
        S: false,
        M: false,
        L: false,
        XL: false,
        XXL: false,
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

    useEffect(() => {
        Object.entries(sizes).map(([key, value], index) => {
            if (value && !filteredSize.includes(key)) {
                setFilteredSize(filteredSize => [...filteredSize, key])
            }
            else if (!value && filteredSize.includes(key)) {
                setFilteredSize(filteredSize => filteredSize.filter((item, i) => item !== key))
            }
            
        })
        
    }, [sizes])
    console.log(filteredSize)
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
                    Размер
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup row>
                        { Object.keys(sizes).map((item) => (
                            <FormControlLabel
                                key={item}
                                control={<Checkbox
                                    checked={sizes[item]} 
                                    onChange={ e => setSizes({ ...sizes, [e.target.id]: e.target.checked })} 
                                    name="sizes"
                                    id={item}
                                />}
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
                            <input type="number" value={sliderValues[1]}  onChange={ e => setSliderValues([sliderValues[0], parseInt(e.target.value) ])}/>
                            <span>грн</span>
                        </div>
                        
                    </div>
                    <Range 
                        marks={
                            {
                                0: `0 грн`,
                                5000: `5000 грн`,
                                10000: `10000 грн`
                            }
                        }
                        min={0}
                        max={10000}
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
            <a className="main_btn" onClick={() => dispatch(filterProducts(products, filteredProducts, sliderValues, filteredSize))}>Показать</a>
        </div>
    )
}
