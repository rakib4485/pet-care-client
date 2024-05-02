import React from 'react';

const AppointmentButton = ({ baseColor, HoverColor, buttonText }) => {
    return (
        <div>
            <span class={`relative inline-flex items-center cursor-pointer justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white ${baseColor} rounded-lg group`}>
                <span class={`absolute w-0 h-0 transition-all duration-500 ease-out ${HoverColor}  rounded-full group-hover:w-full group-hover:h-56`}></span>
                <span class={`absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700`}></span>
                <span class="relative font-semibold text-xl">{buttonText}</span>
            </span>
        </div>
    );
};

export default AppointmentButton;