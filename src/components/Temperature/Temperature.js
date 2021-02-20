import React, {Component} from 'react';
import './Temperature.css';

class Temperature extends Component{
    constructor(props){
        super(props)
        this.state = {
            temperature: 0, 
            city: "",
            urlBase: "https://api.openweathermap.org/data/2.5/weather?q=",
            urlAppend: "&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c",
            isValidCity: true,
            temperatureScale: "F"
        }
        this.selectCity = this.selectCity.bind(this);
        this.submitCity = this.submitCity.bind(this);
    }

    selectCity(e){
        this.setState({
            city: e.target.value
        })
    }

    submitCity(e){
        e.preventDefault();
        let url = this.state.urlBase + this.state.city + this.state.urlAppend;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
                temperature: res["main"]["temp"]
            })
        })
        .catch(err => {
            this.setState({
                isValidCity: false
            })
        })
    }

    render(){
        return (
            <div className="temperatureWrapper">
                <form onSubmit={this.submitCity}>
                    <label>
                        Search for a city to see current temperature: &nbsp;
                        <input type="text" value={this.state.city} onChange={this.selectCity}/> 
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                {  
                    !this.state.isValidCity ? 
                    <div> {this.state.city} is not a valid city</div> :  
                    <p> The temperature in {this.state.city} is: {this.state.temperature}{this.state.temperatureScale} </p> 
                }
            </div>
        )
    }
}

export default Temperature;