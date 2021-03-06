import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './index';

export default {
    title: 'Header',
    component: Header,
} as ComponentMeta<typeof Header>;

export const Default : React.VFC<{}> = () => {

    return <Header
        editEnable={true}
        menu={["๋ก๊ทธ์์"]}
        menuOnClicks={[()=>{}]}
        menuShow={true}
        onClickUserIcon={()=>{}}
        onCloseUserIcon={()=>{}}
        editOnClick={()=>{}}
    />
}


