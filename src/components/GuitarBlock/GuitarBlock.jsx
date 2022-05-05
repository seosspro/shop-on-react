import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './../Button/Button';

function GuitarBlock({
    id,
    name,
    imageUrl,
    price,
    options,
    types,
    onClickAddGuitar,
    addedCount,
}) {
    const [activeItem, setActiveItem] = useState(null);
    const onSelectItem = addOption => {
        setActiveItem(addOption);
    };

    const availableTypes = ['Доставка', 'Самовывоз'];
    const availableOptions = ['+ Струны', '+ Кейс'];

    const [delivery, setDelivery] = useState(1);
    const deliveryOption = addDeliveryOption => {
        setDelivery(addDeliveryOption);
    };

    const onAddGuitar = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            types: types[delivery],
            options: options[activeItem],
        };
        onClickAddGuitar(obj);
    };

    return (
        <div className='guitar-block'>
            <img className='guitar-block__image' src={imageUrl} alt='Guitar' />
            <h4 className='guitar-block__title'>{name}</h4>
            <div className='guitar-block__selector'>
                <ul>
                    {availableTypes &&
                        availableTypes.map((name, addDeliveryOption) => (
                            <li
                                className={
                                    delivery === addDeliveryOption
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => {
                                    deliveryOption(addDeliveryOption);
                                }}
                                key={addDeliveryOption}
                            >
                                {name}
                            </li>
                        ))}
                </ul>
                <ul>
                    {availableOptions &&
                        availableOptions.map((name, addOption) => (
                            <li
                                className={
                                    activeItem === addOption ? 'active' : ''
                                }
                                onClick={() => {
                                    onSelectItem(addOption);
                                }}
                                key={addOption}
                            >
                                {name}
                            </li>
                        ))}
                </ul>
            </div>
            <div className='guitar-block__bottom'>
                <div className='guitar-block__price'>от {price} $</div>
                <Button onClick={onAddGuitar} className='button--add' outline>
                    <svg
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                            fill='white'
                        />
                    </svg>
                    <span>В корзину</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    );
}

export default GuitarBlock;
