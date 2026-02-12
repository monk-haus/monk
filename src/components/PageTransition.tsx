'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(0);

        const timeout = setTimeout(() => {
            setOpacity(1);
        }, 50);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <div
            style={{ opacity: opacity }}
            className="transition-opacity duration-700 ease-out"
        >
            {children}
        </div>
    );
}
