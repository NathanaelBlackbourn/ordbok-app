import { useEffect, useRef } from 'react';

const breakpoints = [{ breakpoint: 1400, lineHeight: '6rem' }];

const useLineHeight = () => {
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            timeoutId.current && clearTimeout(timeoutId.current);

            timeoutId.current = setTimeout(
                () =>
                    document.documentElement.style.setProperty(
                        '--header-size',
                        breakpoints.find(
                            ({ breakpoint }) => window.innerWidth >= breakpoint
                        )?.lineHeight || '4rem'
                    ),
                100
            );
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};

export default useLineHeight;
