import {NEW_IMAGES} from './imageTypes';

export const newImages = () => {
    return (dispatch) => {
        const clientID = 'JQ1oIAV-jX9sDeKyCaM6NodMwutPDaQSLTra5TY8NGQ';
        const count = 6;
        const endPoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}&count=${count}`;

        fetch(endPoint)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: NEW_IMAGES, payload: data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
}