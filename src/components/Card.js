import React from 'react'
import '../style/Card.css'
import { useNavigate, useParams } from 'react-router-dom'
import dumbbell from './dumbbell.png'

export default function Card(props) {
  const navigate = useNavigate(); 
  const params = useParams();
  
  const navigatefunction = () =>{ 
    if(params.id) navigate(`/expandexercise/${params.id}`)
    else navigate(`/expandexercise/${props.a.id}`)
  }

  return (
    <div className="card"  onClick={ navigatefunction }>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className='eseccardimg' src={props.a.gifUrl} alt="" />
            <div className="cardfrontname">{props.a.name.charAt(0).toUpperCase() + props.a.name.slice(1, 45)}</div>
          </div>
          <div className="flip-card-back">
            <div className="demoimgbog">
             <img className='cardbackimg' src={dumbbell} alt="" />
            </div>
            <div className="cardbackname">{props.a.name.charAt(0).toUpperCase() + props.a.name.slice(1, 45)}</div>
            <div className="cardbackinfo">
              <div className="cardbackinfo1"> <span className='orangeclr'>Body Part : </span> {props.a.bodyPart.charAt(0).toUpperCase() + props.a.bodyPart.slice(1)} </div>
              <div className="cardbackinfo2">  <span className='orangeclr'>Target : </span> {props.a.target.charAt(0).toUpperCase() + props.a.target.slice(1)} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
