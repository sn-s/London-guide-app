import React, { memo } from 'react';
import "./Card.css";
import { data } from "../../data/Data";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Card = ({ id }) => {

  return (
    <TransitionGroup component={null} >
    {
      data.filter(item => item.id === id).map(item => (
        <CSSTransition
          timeout={500}
          classNames="card"
          key={item.id}
        >
          <div className="card-box" >
            <div className="image">
              <img alt="card-img" src={item.image} />
            </div>
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="sub-title">{item.type}</div>
              <div className="bottom">
                <p>{item.summary}</p>
                <span className="price">{item.price[1]}</span>
                <a href={item.website} target="_blank" rel="noopener noreferrer" ><button>Website</button></a>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))
    }
    </TransitionGroup>
  )
}

export default memo(Card);