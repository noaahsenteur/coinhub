import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Coin() {

    const router = useRouter();
    const { id } = router.query;
    const [ coinData, setCoinData ] = useState();  

    useEffect(() => {

        if(!id){
            return;
        }

            const fetchCoin = async () => {

                await fetch(`https://api.coingecko.com/api/v3/coins/${ id }`)
                .then((res) => res.json())
                .then(data => setCoinData(data))
                .catch(err => console.log(err))

        }

        fetchCoin();
        
    },[id])

    return(
        <div className='bg-gray-50 h-screen mt-4'>
            {coinData && 
            <Container>
                <div className='flex flex-row justify-evenly'>
                   <div className='flex flex-col flex-1'>
                        <div className='text-3xl font-bold mb-4'>
                            { coinData.name }
                        </div>
                        <div className='text-4xl font-bold'>
                            US${ coinData.market_data.current_price.usd }
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <div className='flex flex-row gap-4 mb-4'>
                            <div className='rounded-md p-4 shadow text-xl font-bold flex-1'>
                                <div className='mb-4'>Marketcap</div>
                                <div className='mb-2'>US${coinData.market_data.market_cap.usd}</div>
                                <div className='text-base text-gray-500 font-bold'>{coinData.market_data.market_cap_change_percentage_24h}%</div>
                            </div>
                            <div className='rounded-md p-4 shadow text-xl font-bold flex-1'>
                                <div className='mb-4'>Circulating supply</div>
                                <div>{coinData.market_data.circulating_supply}</div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <div className='rounded-md p-4 shadow text-xl font-bold flex-1'>
                                <div className='mb-4'>Total Volume</div>
                                <div>US${coinData.market_data.total_volume.usd}</div>
                            </div>
                            <div className='rounded-md p-4 shadow text-xl font-bold flex-1'>
                                <div className='mb-4'>Total supply</div>
                                <div>{coinData.market_data.total_supply}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='chart'>
                    
                </div>
            </Container>
            }
        </div>
    )
}