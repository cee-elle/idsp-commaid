import React from 'react';
import Inputbox from '../comps/Inputbox';

export default {
    title: 'Pooneh/Inputbox',
    Component: Inputbox
};

export const BasicInput = () => <Inputbox text="Name" height="47" width="446">
</Inputbox>;

export const DescriptionInput = () => <Inputbox text="Short description for why you want to volunteer" height="138" width="669">
</Inputbox>;