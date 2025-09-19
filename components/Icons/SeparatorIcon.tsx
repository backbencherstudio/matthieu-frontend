import React from "react";

const SeparatorIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="34" viewBox="0 0 2 34" fill="none" className={className}>
            <path d="M1 1L0.999999 33" stroke="#262626" strokeLinecap="round" />
        </svg>
    );
};

export default SeparatorIcon;