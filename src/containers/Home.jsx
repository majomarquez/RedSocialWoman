import React, {useState, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useinitialState from '../hooks/useTvShowsApi'
import Layout from '../hooks/useTvShowsApi'
import '../assets/styles/container/Home.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {

  const initialState = useinitialState(API);
  return initialState.length ===0 ? <h1>Loading...</h1> :(
      <>
      <Search/>
      {initialState.mylist.length > 0 && (
      <Categories title ="Mi Lista">
        <Carousel>
          {initialState.mylist.map (item=>
            <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>
      )}

      <Categories title ="Buscar un Profesional">
        <Carousel>
          {initialState.trends.map(item=>
           <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title ="Vitrinear">
        <Carousel>
          {initialState.shop.map(item=>
            <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title ="Buscar inspiración">
        <Carousel>
          {initialState.original.map(item=>
            <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>
      </>
  );
}

export default Home;
