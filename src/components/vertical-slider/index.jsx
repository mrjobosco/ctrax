import React, {useRef, useEffect} from 'react';
import { Layout, LeftSide, RightSide, Item } from './style';
import {trottle, animate} from './logic';


export default (props) => {

  let leftSideRef = useRef(null);
  let rightSideRef = useRef(null);

  const total = -1500;
  useEffect(() => {
      let count = 0;
      window.addEventListener('wheel', trottle((e) => {
        if (e.deltaY > 0){
          // scrolling up
          animate(leftSideRef, (-500 * ++count));
          animate(rightSideRef, total+ (500 * count));
        }else {
          // scrolling down
          animate(leftSideRef, (-500 * --count));
          animate(rightSideRef, total + (500 * count));
        }
      }, 1500))
  }, [total])

  // ref={element => rightSideRef = element}

  return (
      <Layout>
        <LeftSide ref={element => leftSideRef = element}>
          <Item color="blue"/>
          <Item color="green"/>
          <Item color="red"/>
          <Item color="purple"/>
        </LeftSide>
        <RightSide ref={element => rightSideRef = element}>
          <Item color="blue"/>
          <Item color="green"/>
          <Item color="purple"/>
          <Item color="red"/>
        </RightSide>
      </Layout>
  )
};