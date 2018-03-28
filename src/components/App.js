import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component{
    //use property to set state so we can pass the add fish form data to all components
    state = {
        //set state as value type it will be ie string, object...
        fishes:{},
        order:{}
    };
    componentDidUpdate(){
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }
    componentDidMount(){
        //first reinstate local storage
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        console.log(localStorageRef);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)})
        }
        //updates firebase when loads fishes
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{
            context: this,
            state: 'fishes'       
        });
    }

    componentWillUnmount(){
        //unmount firebase when leaving page to prevent memory leak
        base.removeBinding(this.ref);
    };
    addFish = fish => {
        console.log('Adding a fish!');
        //take a copy of exiting state
        const fishes = {...this.state.fishes};
        //add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //set the new fishes object to state
        //if obj names are the same can abbrev with just one name
        this.setState({fishes})
    };

    updateFish = (key,updatedFish)=>{
       //take a copy of curretn state of fishes
       const fishes = {...this.state.fishes};
       //update state
       fishes[key] = updatedFish;
       //set state
       this.setState({fishes}); 
    }

    loadSampleFishes = ()=>{
        //set the new fishes object to state
        //if obj names are diff      
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key)=>{
        //take a copy of state
        const order = {...this.state.order}
        //add to order or update order
        order[key] = order[key] +1 || 1;
        //call set state to update state object
        this.setState({order});
    }
    render(){

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                    
                        {Object.keys(this.state.fishes).map(key => (
                        < Fish 
                            key={key} 
                            index = {key}
                            addToOrder={this.addToOrder} 
                            details={this.state.fishes[key]}
                        />
                        ))}
                    </ul>
                </div>
                <Order
                    fishes = {this.state.fishes}
                    order = {this.state.order}
                />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    loadSampleFishes = {this.loadSampleFishes}
                    fishes = {this.state.fishes}
                />
                
            </div>
        );

    }

}
export default App;