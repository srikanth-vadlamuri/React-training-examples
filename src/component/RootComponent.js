import React from 'react';
import FeedbackTitle from '../containers/FeedbackTitle';
import FeedbackDescription from '../containers/FeedbackDescription';

class RootComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                i am a root component
            <p></p>
             i will use container
             <p></p>
             <FeedbackTitle/>
             <hr></hr>
             <FeedbackDescription/>
            </div>
         );
    }
}
 
export default RootComponent;
