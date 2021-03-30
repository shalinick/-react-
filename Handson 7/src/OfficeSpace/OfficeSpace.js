import React,{Component} from'react';
import './OfficeSpace.css';
class OfficeSpace extends Component{
    render(){
        let colours = [];
        return(
            this.props.item.map((officeSpace)=>{
                if(officeSpace.Rent<=60000){
                    colours.push("textRed");
                }
                else{
                    colours.push("textGreen");
                }
                return(
                    <div className="div2">
                       <img src={officeSpace.image} width="25%" height="25%" alt="Office Space"/>
                       <h1>Name: {officeSpace.Name}</h1>
                       <h3 className={colours[colours.length-1]}>Rent: Rs. {officeSpace.Rent}</h3>
                       <h3>Address: {officeSpace.Address}</h3>
                    </div>
                )
            })
        )
    }
}
export default OfficeSpace;