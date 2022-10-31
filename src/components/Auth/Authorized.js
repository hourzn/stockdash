import React, { useRef, useState } from 'react';
import { supabase } from '../../supabaseClient';
import './Authorized.css';
import { FaSearch } from 'react-icons/fa';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import Button from '@mui/material/Button';

function Authorized(props) {
    const [stockData1, setStockData1] = useState('');
    const [stockData2, setStockData2] = useState('');
    const [stockData3, setStockData3] = useState('');
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    // Sign out from Supabase
    const signOut = async () => {
        await supabase.auth.signOut();
    };
    const handleAddStock = (flag) => {
        if (flag === 1) {
            setStockData1(inputRef1.current.value);
        } else if (flag === 2) {
            setStockData2(inputRef2.current.value);
        } else if (flag === 3) {
            setStockData3(inputRef3.current.value);
        }
    };
    return (
        <div className='authorized'>
            <div className='authorized-container'>
                <header>
                    <div className='welcome-container'>
                        <h2>Stocks Dashboard</h2>
                        Welcome {props.session.user.email}{' '}
                        <Button
                            onClick={signOut}
                            style={{ marginLeft: '10px' }}
                            variant='contained'
                            size='small'>
                            Sign out
                        </Button>
                    </div>
                </header>
                <div className='authorized-content'>
                    <div className='authorized-content-container'>
                        <div className='authorized-content-container-body'>
                            <div className='chart-label'>
                                <TextField
                                    label='Add a stock to your watch list'
                                    sx={{ m: 0, width: '24ch' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <FaSearch />
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputRef={inputRef1}
                                />
                                <Button
                                    variant='contained'
                                    size='small'
                                    style={{ marginLeft: '13px', marginTop: '10px' }}
                                    onClick={() => {
                                        handleAddStock(1);
                                    }}>
                                    Add
                                </Button>
                            </div>
                            <div>
                                <AdvancedRealTimeChart
                                    theme='dark'
                                    width={1840}
                                    height={340}
                                    range='5D'
                                    symbol={stockData1}
                                />
                            </div>
                            <div className='chart-label'>
                                <TextField
                                    label='Add a stock to your watch list'
                                    sx={{ m: 0, width: '24ch' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <FaSearch />
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputRef={inputRef2}
                                />
                                <Button
                                    variant='contained'
                                    size='small'
                                    style={{ marginLeft: '13px', marginTop: '10px' }}
                                    onClick={() => {
                                        handleAddStock(2);
                                    }}>
                                    Add
                                </Button>
                            </div>
                            <div>
                                <AdvancedRealTimeChart
                                    theme='dark'
                                    width={1840}
                                    height={340}
                                    range='5D'
                                    symbol={stockData2}
                                />
                            </div>
                            <div className='chart-label'>
                                <TextField
                                    label='Add a stock to your watch list'
                                    sx={{ m: 0, width: '24ch' }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <FaSearch />
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputRef={inputRef3}
                                />
                                <Button
                                    variant='contained'
                                    size='small'
                                    style={{ marginLeft: '13px', marginTop: '10px' }}
                                    onClick={() => {
                                        handleAddStock(3);
                                    }}>
                                    Add
                                </Button>
                            </div>
                            <div>
                                <AdvancedRealTimeChart
                                    theme='dark'
                                    width={1840}
                                    height={340}
                                    range='5D'
                                    symbol={stockData3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authorized;
