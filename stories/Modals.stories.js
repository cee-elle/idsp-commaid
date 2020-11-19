import React from 'react';
import Modals from '../comps/Modals'

export default {
    title: 'Sophia/Modals',
    component: Modals,
};

export const basicModals = () => <Modals />;
export const cancelModals = () => <Modals header="Are you sure you want to cancel?" subtext="Nothing will be saved and your posting will be deleted"/>