import { useEffect } from 'react';

export default function useOnClickOutside(ref, handler, buttonRef) {
    useEffect(() => {
        const listener = event => {
            // specify if no action needed
            if (!ref.current || ref.current.contains(event.target) || event.target.className === buttonRef) {
                return;
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
