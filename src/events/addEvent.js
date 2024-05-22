import dom from '../dom.js';
import addHandler from '../handlers/addHandler.js';

const addEvent = () => {
    dom.btn.addEventListener('click', addHandler);
};

export default addEvent;
