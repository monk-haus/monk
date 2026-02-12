'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const hasLoaded = sessionStorage.getItem('monk_preloader_shown');
        if (hasLoaded) {
            setLoading(false);
            return;
        }

        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        document.body.style.overflow = '';
                        sessionStorage.setItem('monk_preloader_shown', 'true');
                    }, 500);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 15) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = '';
        };
    }, []);

    if (!loading) return null;

    return (
        <div className={`fixed inset-0 z-[100] bg-void flex flex-col justify-between p-4 md:p-6 transition-opacity duration-700 ${progress === 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

            <div className="flex justify-between items-start font-mono text-[10px] md:text-xs text-newsprint/60 uppercase tracking-widest">
                <div>
                    Monk Haus <br />
                    Digital Foundry
                </div>
                <div className="text-right">
                    Craiova, RO <br />
                    {new Date().getFullYear()}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4">
                <div className="flex justify-between items-end mb-2 font-mono text-xs text-newsprint uppercase tracking-widest">
                    <span>Loading</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full h-[2px] bg-void border border-newsprint/20 overflow-hidden">
                    <div
                        className="h-full bg-signal transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex justify-between items-end font-mono text-[10px] md:text-xs text-newsprint/60 uppercase tracking-widest">
                <div>
                    Est. 2025 <br />
                    Operating
                </div>
                <div className="text-right animate-pulse text-signal">
                    Initializing...
                </div>
            </div>
        </div>
    );
}
