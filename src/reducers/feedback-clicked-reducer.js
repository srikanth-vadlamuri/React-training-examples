const feedbackClicked = function(state= null , action){
    
    switch (action.type) {
        case "FEEDBACK_CLICKED":
        console.log("action.payload")
            return action.payload
            break;
    
        default:
            break;
    }
    return state
    
}
export default feedbackClicked