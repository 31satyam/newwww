import React from 'react'
import Rating from './Rating';

let masterList=[
  {productname:"laptop",
   url:"image/download.jpeg",
   Price:"10000000",
   disc:"This is a best laptop in the universe"},
   {productname:"course",
   url:"image/1.png",
   Price:"1000",
   disc:"This is a best course in the universe"},
   {productname:"course2",
   url:"image/2.webp",
   Price:"10000",
   disc:"This is a best course in the universe"},
   {productname:"course3",
   url:"image/3.webp",
   Price:"100",
   disc:"This is a best course in the universe"},
]

export default function Diffproduct() {
    return masterList.map((props) => {
      return(
        <div className='col-md-3 mt-3'>
         <div className="card ms-50 col-sm-4" >
         <img 
           src={props.url}
           style={{width:"50%"}}
           className="cardImgTop"
         />
        <div className="cardBody">
        <h5 className="cardTitle">{props.productname}</h5>
         <p className="cardText">{props.Price}</p>
        <p><Rating rating="4"/></p>
    </div>
</div>
</div>

    );
      });
}
