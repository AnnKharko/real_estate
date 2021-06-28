import React from 'react';

import { HomeItem } from  '../home-item';


export const HomeList = ({items}) => {

    console.log(items, 'from HomeList');
    return (
        <div>
            <h3>this is HomeList component</h3>
            {items.map((item, index) => <HomeItem key={index} props={item} />)}
        </div>
    )
};
