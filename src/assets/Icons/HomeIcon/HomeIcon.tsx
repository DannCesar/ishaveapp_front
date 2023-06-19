import React from 'react';

export interface IconProps {
    onClick: () => void
}

export const HomeIcon: React.FC<IconProps> =({onClick}) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="26"
        height="26"
        onClick={onClick}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19z"
            fill="#1B1B1B" />
    </svg>;
}