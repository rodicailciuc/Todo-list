import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const enterEvent = () => {
    dom.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addHandler();
        }
    });
};

export default enterEvent;
