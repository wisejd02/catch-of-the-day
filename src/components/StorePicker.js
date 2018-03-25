import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    myInput = React.createRef();

    //binds cutom method/fn to class to allow the use of 'this'
    //same as constructor super bind method
    goToStore = (event)=>{
        
        //stops form from submitting
        event.preventDefault();
        //get text from input
        console.log(this.myInput.value.value);
        const storeName = this.myInput.value.value;
        //change page to /store/whatever they entered
        //allows to change url with out refreshing page or losing items in memory
        this.props.history.push(`/store/${storeName}`);
        
    }
    render(){
        console.log(this);
        console.log(getFunName())
        return (
        <React.Fragment>
            {/* using react.fragment allows the use children elements outside parent element */}
            {/* <p>Fish</p> */}
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input type="text" required placeholder="Store Name" ref={this.myInput} defaultValue={getFunName()}/>
            <button type="submit">Visit Store</button>
        </form>
        </React.Fragment>
        )
    }
}

export default StorePicker