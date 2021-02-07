import React,{useEffect,useState} from 'react'
import axios from "axios";
import Details from "./Details";
import {Link} from "react-router-dom";

//In this piece of code i have fetched data from API and also implemented Load more option and filters based on title,Location and Fulltime using API,by adding some parameters.I have also passed data to Detail component for fetching details

export default function Jobs(props) {
    var [data,setdata] = useState([])
    var [page,setPage] = useState(0);
    var [id,setId]=useState();
    
    console.log(`init`,data)
    useEffect(()=>{        
        axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${page}&description=${props.desc}&fulltime=${props.fulltime}&location=${props.location}`,{headers:{
            "Access-Control-Allow-Origin":"*"
        }})
        .then((res)=>{
            console.log(`response`,res.data);
            data=data.concat(res.data)
            setdata((data));
        })
        .catch((err)=>{
            console.log(err)
        })
    },[page,props.desc,props.fulltime])
    console.log("description from jobs",props.desc)

    const nextHandler=()=>{
        setPage(page=page+1);
    } 

   const idHandler=(id)=>{
       setId(id);
   }
    
    return (
        <React.Fragment>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",maxWidth:"80%",margin:"auto"}}
        >
            {data.map(items=>{
                return(
                    <div key={items.id} style={{margin:"auto"}}>
                    <div className="card" style={{width:"15rem",height:"50%",margin:"10px"}}>
                        <div className="card-body">
                            <img className="card-img" src={items.company_logo} alt="Card image cap" style={{width:"30%"}}/>
                            <h6 className="card-subtitle mb-2 text-muted">{items.created_at}</h6>
                            <h5 className="card-title">{items.title}</h5>
                            <Link to="/details" onClick={idHandler(items.id)}>View Details</Link>
                        </div>
                    </div>
                    </div>
                    )
            })}
        
        </div>
        <div>
            <button className="btn btn-primary" onClick={nextHandler} style={{position:"relative",left:"50%"}}>Load more</button>
        </div>
        <Details data={data} id={id}/>
    </React.Fragment>
    )
}
