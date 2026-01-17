import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const affirmations = [
    "you are fiercely loved with an everlasting love. ❤️",
    "the lord is your shepherd; you have everything you need. ✨",
    "his angels are guarding you in all your ways today. 🛡️",
    "do not be afraid, for he is with you wherever you go. 👣",
    "you are fearfully and wonderfully made, a total masterpiece. 🎨",
    "his peace, which surpasses all understanding, guards your heart. 🕊️",
    "the lord makes your steps firm and delights in every detail of your life. 🌟",
    "under his wings, you will find refuge and safety. 🦅",
    "he is your strength and your shield; your heart can rest easy. 💪",
    "grace and mercy are following you every single day! 💖"
];

export default function FortuneCookie() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const openCookie = () => {
        const randomMessage = affirmations[Math.floor(Math.random() * affirmations.length)];
        setMessage(randomMessage);
        setIsOpen(true);
    };

    const resetCookie = () => {
        setIsOpen(false);
    };

    return (
        <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 font-sans text-center">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-pink-600 mb-2">mehhh's daily boost 🌸</h1>
                <p className="text-gray-600 italic">tap the cookie to see how much you are loved!</p>
            </header>

            <div className="relative flex items-center justify-center h-64 w-full">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="cookie"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1, rotate: [0, -5, 5, 0] }}
                            transition={{ rotate: { repeat: Infinity, duration: 2 } }}
                            onClick={openCookie}
                            className="cursor-pointer text-8xl filter drop-shadow-lg"
                        >
                            🥠
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border-2 border-pink-200 max-w-sm"
                        >
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                    &ldquo;{message}&rdquo;
                                </p>
                            </p>
                            <button
                                onClick={resetCookie}
                                className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-full text-sm font-bold hover:bg-pink-600 transition-colors"
                            >
                                get another boost ✨
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <footer className="mt-auto text-pink-300 text-sm">
                made with love by bobo 💖
            </footer>
        </div>
    );
}