import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import selectFeedback from '../actions'


class FeedbackTitle extends React.Component {

    displayAlltitles(){
        return this.props.propsFeedbacktitles.map((fb)=>{
            return (<li 
                        key={fb.id} 
                        onClick={()=>{console.log(this.props.selectfeedback(fb))}}
                        >
                        {fb.title}
                        </li>)
        })
    }
    render() { 
        return (  
            <div>
                <ul>
               {this.displayAlltitles()}
               </ul>
            </div>
        );
    }
}

function connectStoreToComponent(state){
 console.log(state)
    return{
        
            propsFeedbacktitles:state.allFB
    }
}

function bindActionCreatorsToComponentsAsProps(dispatch){
    console.log(dispatch);
    return bindActionCreators({selectfeedback:selectFeedback},dispatch)
}
export default connect(connectStoreToComponent,bindActionCreatorsToComponentsAsProps)(FeedbackTitle);