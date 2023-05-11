import React, {useState} from 'react';
import './Calculette.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import Bouton from './Button'

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    
    function inputNum (e) {
        let input = e.target.value
        if(num === 0){
            setNum(input);
        } else {
            setNum(num+input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function changeSign() {
        if(num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }
    
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                <Box m={12}/>
                    <h1 className='resultado'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className='orange' onClick={operatorHandler} value={'/'}>/</button>
                    <Bouton value={'7'} onClick={inputNum}/>
                    <Bouton value={'8'} onClick={inputNum}/>
                    <Bouton value={'9'} onClick={inputNum}/>

                    <button className='orange' onClick={operatorHandler} value={'X'}>X</button>
                    <Bouton value={'4'} onClick={inputNum}/>
                    <Bouton value={'5'} onClick={inputNum}/>
                    <Bouton value={'6'} onClick={inputNum}/>

                    <button className='orange' onClick={operatorHandler} value={'-'}>-</button>
                    <Bouton value={'1'} onClick={inputNum}/>
                    <Bouton value={'2'} onClick={inputNum}/>
                    <Bouton value={'3'} onClick={inputNum}/>

                    <button className='orange' onClick={operatorHandler} value={'+'}>+</button>
                    <Bouton value={'0'} onClick={inputNum}/>

                    <button style={{visibility: "hidden"}}>k</button> 
                    <Bouton value={'.'} onClick={inputNum}/>

                    <button className='orange' onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}