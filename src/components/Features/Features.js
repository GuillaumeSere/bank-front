import React from 'react';
import './Features.css';
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';

/**show item feature 
 *  @param {object} props.element
 *  @param {string} props.element.img
 *  @param {string} props.element.title
 *  @param {string} props.element.text
 * @returns {JSX}
 */

export default function Features(props){

  let image = "";
  
  switch(props.element.img){
    case 'pictureChat': 
    image = iconChat
      break;
      
    case 'pictureMoney':
    image = iconMoney
      break;
    
    case 'pictureSecurity':
    image = iconSecurity
      break; 
  };
  
  return ( 
    <>
      <div className="feature-item">
          <img src={image} alt="Chat Icon" className="feature-icon"/>
          <h3 className="feature-item-title">{props.element.title}</h3>
          <p>
            {props.element.text}
          </p>
        </div>
    </>
  );   

}