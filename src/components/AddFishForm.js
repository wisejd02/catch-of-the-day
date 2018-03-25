import React from 'react';

class AddFishForm extends React.Component{
    priceRef= React.createRef();
    statusRef= React.createRef();
    nameRef= React.createRef();
    descRef= React.createRef();
    imageRef= React.createRef();
      
    createFish = (event) => {
        event.preventDefault();
        console.log(this.nameRef.value.value);
        
        const fish = {
            name: this.nameRef.value.value, 
            price: parseFloat(this.priceRef.value.value), 
            status: this.statusRef.value.value, 
            desc: this.descRef.value.value, 
            image: this.imageRef.value.value
            
        };

        console.log(fish);
        //adding fish to state
        this.props.addFish(fish);
        //refresh the form
        event.currentTarget.reset();
    }
    render() {
        return (
            <div className="AddFishForm">
               <h2> AddFishForm</h2>
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input name='name' ref={this.nameRef} type='text' placeholder='Name'/>
                    <input name='price' ref={this.priceRef} type='text' placeholder='Price'/>
                    <select name='status' ref={this.statusRef}>
                        <option value="available">Fresh</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea name='desc' ref={this.descRef} type='text' placeholder='Desc'></textarea>
                    <input name='image' ref={this.imageRef} type='text' placeholder='Image'/>
                    <button type='submit'>+ Add Fish</button>
                </form>
            </div>
            
        );
    }
}

export default AddFishForm;