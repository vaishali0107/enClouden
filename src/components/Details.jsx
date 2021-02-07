import React from 'react'

//In this i have tried to implement the detail feature 

export default function Details(props) {
    console.log('details component',props);
    const details=(props)=>{
        const {data,id}=props
        for(var i=0;i<data.length;i++){
            if(data[i].id==id){
                return (
                    <div>
                       <h3>Description</h3>
                       <div>{data[i].description}</div>
                    </div>
                )
            }
        }
    }
    
}
