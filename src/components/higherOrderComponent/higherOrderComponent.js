import React from "react";

const UpadatedComponent = (OriginalComponent, increamentNumber) =>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
    
            this.state = {
                count:0,
            }
        }
    
        increamentCounter = () =>{
            this.setState((prevState)=>{
                return {count: prevState.count + increamentNumber}
            })
        }
        render(){
            return <OriginalComponent count={this.state.count} increamentCounter = {this.increamentCounter} {...this.props}/>  /* // Useing  Spread operator  to handle props */
        }
    }
    return(
        NewComponent
    )
}

export default UpadatedComponent