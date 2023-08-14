import { useCallback, useEffect } from 'react';

export const useKeyDown = ({
    key,
    callback,
}:{
    key: 'Enter'|'Escape',
    callback: () => void
}) => {
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === key) {
            callback();
        }
    }, [callback, key]);

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown]);
};
