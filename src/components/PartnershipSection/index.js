import React from 'react';
import './style.css';
import Image from 'next/image';
import web3 from '../../../public/assets/web3.png'
import ttf from '../../../public/assets/ttf.png'
import w3 from '../../../public/assets/w3.png'
import tt from '../../../public/assets/tt.png'

export default function PartnershipSection() {

return (
    <div className='PartnershipSection'>
        <div className='container'>
        <h4 className="text-center text-white text-2xl md:text-4xl xl:text-5xl mb-8 lg:mb-10 Oxanium md:mt-10 font-bold">
          Partnerships
        </h4>
        <ul className='m-0 p-0 flex gap-4 sm:gap-8 lg:gap-12 align-center'>
            <li>
                <Image className="max-w-24  sm:max-w-32 lg:max-w-44 xl:max-w-full" src={web3}/>
            </li>
            <li>
                <Image className="max-w-8  sm:max-w-10 lg:max-w-44 xl:max-w-full" src={ttf}/>
            </li>
            <li>
                <Image className="max-w-12  sm:max-w-16 lg:max-w-40 xl:max-w-full" src={w3}/>
            </li>
            <li>
                <Image className="max-w-10  sm:max-w-12 lg:max-w-48 xl:max-w-full" src={tt}/>
            </li>
        </ul>
        </div>
    </div>

);
}