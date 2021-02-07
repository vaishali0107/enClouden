import React,{useState} from 'react'
import Jobs from "./Jobs"

//In this piece of code i have implemented the navbar and getting the values of title,Location and fulltime values.Here i have used useState hook to store these different values.I have passed these values to Job component

export default function Header() {
    var [search,setSearch] = useState('');
    var [searchLoc,setSearchLoc] = useState("");
    var [description,setDescription] = useState('');
    var [loc,setLoc]=useState('');
    var [fulltime,setFulltime] = useState(false)
    var [ful,setful]=useState();
    console.log(search);
    const filteration=()=>{
        setDescription(search);
        setLoc(searchLoc);
        setful(fulltime);
    }
    console.log(description);
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light navclass" style={{backgroundColor:"lightseagreen",color:"white",borderRadius:"10px 40px",display:"flex",justifyContent:"space-between",margin:"0px 0px 3% 0px"}}><br/>
            <h3 style={{float:"left"}}>devjobs</h3>
            <form>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <input className="form-control mr-sm-2" type="search" placeholder="filter by title,companyname" aria-label="Search" float="right" onChange={(e)=>setSearch(e.target.value)}/>
                <input className="form-control mr-sm-2" type="search" placeholder="filter by location" aria-label="Search" float="right" onChange={(e)=>setSearchLoc(e.target.value)}/>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1" onClick={(e)=>setFulltime(true)}>fulltime</label>
                </div>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={filteration}>Search</button>
            </div>
            </form>
        </nav>
        <Jobs desc={description} fulltime={ful} location={loc}/>
        </React.Fragment>
    )
}
