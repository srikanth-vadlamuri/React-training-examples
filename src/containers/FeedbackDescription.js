import React from 'react';
import {connect} from 'react-redux'

class FeedbackDescription  extends React.Component {
    
    render() { 
        if(this.props.selectedFB == null){
            return(
                    <div>
                        Click on any title!
                    </div>
                    )
            }
        else{
             return (
                
                <div>
                 <ul>
                    <li>Feed back description will come here !!</li>
                    <li>{this.props.selectedFB.description}</li>
                 </ul>
                 <form onSubmit={this.updateFeedback}>
                <input type="text"  value={this.state.selectedFB.title} 
                                    onChange={this.updatetitleIncontainer}></input>
                <button type="submit">update description</button>
                </form>
                </div>
                
          );
        }
    }

}

updatetitleIncontainer(e){
 const updatedvalue=Object.assign({},this.props.selectedFB,{title:e.target.value})
 this.setState({
     updatetedFB:updatedvalue
 })

}

function connectStateTOComponentAsProps(state){
    return{ 
           selectedFB:state.oneFB
    }


}
export default connect(connectStateTOComponentAsProps)(FeedbackDescription);