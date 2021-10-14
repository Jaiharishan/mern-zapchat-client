
import { Avatar } from '@material-ui/core'
import React, { useRef, useState, useEffect, useCallback, useContext } from 'react';
import './Members.css'
import { throttle } from 'lodash';
import fetcher from '../../axios/axios';
import { UserContext } from '../../UserContext';


const timing = (1 / 60) * 1000;
const decay = v => -0.1 * ((1 / timing) ^ 4) + v;

const Members = () => {
  
    const [user, setUser] = useContext(UserContext);

    // const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    // setting following from the user context which has all data related to user

    // following has the set of id's of users
    const [following, setFollowing] = useState(user.following);



    const scrollWrapperRef = useRef();

    const [clickStartX, setClickStartX] = useState();
    const [scrollStartX, setScrollStartX] = useState();

    const [isDragging, setIsDragging] = useState(false);
    const [direction, setDirection] = useState(0);
    const [momentum, setMomentum] = useState(0);

    const [lastScrollX, setLastScrollX] = useState(0);
    const [speed, setSpeed] = useState(0);
    const scrollWrapperCurrent = scrollWrapperRef.current;


    const handleLastScrollX = useCallback(
    throttle(screenX => {
      setLastScrollX(screenX);
    }, timing),
    []
    );

    const handleMomentum = useCallback(
    throttle(nextMomentum => {
      setMomentum(nextMomentum);
      scrollWrapperRef.current.scrollLeft = scrollWrapperRef.current.scrollLeft + nextMomentum * timing * direction;
    }, timing),
    [scrollWrapperCurrent, direction]
    );


  useEffect(() => {
    if (direction !== 0) {
      if (momentum > 0.1 && !isDragging) {
        handleMomentum(decay(momentum));
      } else if (isDragging) {
        setMomentum(speed);
      } else {
        setDirection(0);
      }
    }
  }, [momentum, isDragging, speed, direction, handleMomentum]);

  


  useEffect(() => {
    if (scrollWrapperRef.current) {
      const handleDragStart = e => {
        setClickStartX(e.screenX);
        setScrollStartX(scrollWrapperRef.current.scrollLeft);
        setDirection(0);
      };
      const handleDragMove = e => {
        e.preventDefault();
        e.stopPropagation();

        if (clickStartX !== undefined && scrollStartX !== undefined) {
          const touchDelta = clickStartX - e.screenX;
          scrollWrapperRef.current.scrollLeft = scrollStartX + touchDelta;

          if (Math.abs(touchDelta) > 1) {
            setIsDragging(true);
            setDirection(touchDelta / Math.abs(touchDelta));
            setSpeed(Math.abs((lastScrollX - e.screenX) / timing));
            handleLastScrollX(e.screenX);
          }
        }
      };
      const handleDragEnd = () => {
        if (isDragging && clickStartX !== undefined) {
          setClickStartX(undefined);
          setScrollStartX(undefined);
          setIsDragging(false);
        }
      };

      if (scrollWrapperRef.current.ontouchstart === undefined) {
        scrollWrapperRef.current.onmousedown = handleDragStart;
        scrollWrapperRef.current.onmousemove = handleDragMove;
        scrollWrapperRef.current.onmouseup = handleDragEnd;
        scrollWrapperRef.current.onmouseleave = handleDragEnd;
      }
    }
  }, [scrollWrapperCurrent, clickStartX, isDragging, scrollStartX, handleLastScrollX, lastScrollX]);




  return (
    <div className="scroll-box py-3" style={{borderBottom: '1px solid #f4f4f4'}}>
        <div className="scroll-box__wrapper" ref={scrollWrapperRef}>
            <div className="scroll-box__container" role="list" style={{ pointerEvents: isDragging ? 'none' : undefined }}>
            {
                following.map((member, index) => {
                    return <div key={index} className="member d-flex flex-column align-items-center mx-3">
                    <Avatar src={`assets/person/${index + 1}.jpeg`} style={{ width: 70, height: 70}} />
                    <div style={{color: 'rgb(30, 30, 30)'}}>priya</div>
                </div>
                })
            }
            </div>
        </div>
    </div>
  );
}





export default Members
