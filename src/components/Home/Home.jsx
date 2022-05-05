import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Categories from '../Categories/Categories';
import GuitarBlock from '../GuitarBlock/GuitarBlock';
import Sort from '../Sort/Sort';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchGuitars } from '../../redux/actions/guitars';
import LoadingBlock from './../GuitarBlock/LoadingBlock';
import { addGuitarOnCart } from '../../redux/actions/cart';

const categoryNames = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
];

const sortItems = ['Gibson', 'Jackson', 'Dean', 'Fender', 'Ibanez'];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ guitars }) => guitars.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ guitars }) => guitars.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    useEffect(() => {
        dispatch(fetchGuitars(category, sortBy));
    }, [category, sortBy]);

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback(type => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddGuitarOnCart = obj => {
        dispatch(addGuitarOnCart(obj));
    };

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={sortItems}
                />
                <Sort
                    activeSortType={sortBy.type}
                    items={categoryNames}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className='content__title'>Все инструменты</h2>
            <div className='content__items'>
                {isLoaded
                    ? items.map(obj => (
                          <GuitarBlock
                              onClickAddGuitar={handleAddGuitarOnCart}
                              key={obj.id}
                              addedCount={
                                  cartItems[obj.id] && cartItems[obj.id].length
                              }
                              {...obj}
                          />
                      ))
                    : Array(10)
                          .fill(0)
                          .map((_, index) => <LoadingBlock key={index} />)}
            </div>
        </div>
    );
}

export default Home;
