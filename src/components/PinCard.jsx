import React from 'react';

const PinCard = (props) => {
    return <div style={{..._stylesPinCard.pin_card, ..._stylesPinCard[props.size]}}>
        <img style={_stylesPinCard.style} src={props.imagen} alt='No image'/>
    </div>
    
};

const _stylesPinCard = {
    pin_card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '15px',
        backgroundColor: 'red',
    },
    style:{
        borderRadius: '15px',
        height: 'maxContent',
        width: 'maxContent',
    },
    small: {
        gridRowEnd: 'span 26',
    },
    medium: {
        gridRowEnd: 'span 33',
    },
    large: {
        gridRowEnd: 'span 45',
    }
}

export default PinCard;