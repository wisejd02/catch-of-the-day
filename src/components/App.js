import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component{
    //use property to set state so we can pass the add fish form data to all components
    state = {
        //set state as value type it will be ie string, object...
        fishes:{},
        order:{}
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

    loadSampleFishes = ()=>{
        //set the new fishes object to state
        //if obj names are diff      
        this.setState({ fishes: sampleFishes });
    };
    render(){

        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                    
                        {Object.keys(this.state.fishes).map(key => < Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order/>
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes = {this.loadSampleFishes}
                />
                
            </div>
        );

    }

}
export default App;