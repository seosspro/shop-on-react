import React from 'react';

const Categories = React.memo(function Categories({
    activeCategory,
    items,
    onClickCategory,
}) {
    return (
        <nav className='categories'>
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => {
                        onClickCategory(null);
                    }}
                >
                    Все
                </li>
                {items &&
                    items.map((name, guitars) => (
                        <li
                            className={
                                activeCategory === guitars ? 'active' : ''
                            }
                            onClick={() => {
                                onClickCategory(guitars);
                            }}
                            key={guitars}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </nav>
    );
});

export default Categories;
