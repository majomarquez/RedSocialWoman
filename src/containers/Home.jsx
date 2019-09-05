import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/container/Home.scss';


const Home = ({ myList, trends, originals }) => {
  return (
      <>
      <Search/>
      {myList.length > 0 && (
      <Categories title ="Mi Lista">
        <Carousel>
          {myList.map (item=>
            <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>
      )}

      <Categories title ="Buscar un Profesional">
        <Carousel>
          {trends.map(item=>
           <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>

      {/* <Categories title ="Vitrinear">
        <Carousel>
          {myList.shoping.map(item=>
            <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories> */}

      <Categories title ="Buscar inspiración">
        <Carousel>
          {originals.map(item=>
            <CarouselItem key={item.id}{...item}/>
          )}
        </Carousel>
      </Categories>
      </>
  );
}

const mapStateToProps= state=>{
  return{
    myList:state.myList,
    trends:state.trends,
    originals:state.originals,
  };
};
export default connect (mapStateToProps, null) (Home);