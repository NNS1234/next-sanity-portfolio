// components/NameTypography.tsx
"use client"

import React, { useEffect, useState } from 'react';

const NameTypography = () => {
    const [typedName, setTypedName] = useState<string>('');
    const nameToType = ' Nudrat!';
    const typingSpeed = 100; // Adjust the typing speed as needed
    const cursorBlinkSpeed = 500; // Adjust the cursor blink speed as needed
    const [showCursor, setShowCursor] = useState<boolean>(true);
    const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

    useEffect(() => {
        const typeText = async () => {
            for (let i = 0; i < nameToType.length; i++) {
                setTypedName((prevName) => prevName + nameToType[i]);
                await new Promise((resolve) => setTimeout(resolve, typingSpeed));
            }
            setIsTypingComplete(true);
        };

        const cursorInterval = setInterval(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
        }, cursorBlinkSpeed);

        typeText();

        return () => {
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {typedName}
            {isTypingComplete && !showCursor && ''}
            {!isTypingComplete && showCursor && '|'}
        </span>
    );
};

export default NameTypography;
