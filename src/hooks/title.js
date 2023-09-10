import { useEffect } from 'react';

const title = (name) => {
    useEffect(() => {
        document.title = name;
    }, [name]);
};

export default title;
