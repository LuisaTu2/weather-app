import React, {Component} from 'react';

class Temperature extends Component{
    constructor(props){
        super(props)
        this.state = {
            temperature: 0, 
            userInputCity: ""
        }
        this.selectCity = this.selectCity.bind(this);
    }

    componentDidMount(){
        // fetch("https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c")
        // .then(res => res.json())
        // .then(res => {
        //     let temp = res["main"]["temp"];
        //     this.setState({
        //         temperature: temp
        //     })
        // })
    }

    selectCity(e){
        let city = e.target.value;
        let urlBase = "https://api.openweathermap.org/data/2.5/weather?q=";
        let urlAppend = "&units=imperial&appid=d7a12a132bf363c1c0ae7b8df6f2d42c";
        let url = urlBase + city + urlAppend;
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            let temp = res["main"]["temp"];
            this.setState({
                temperature: temp
            })
        })
    }

    render(){
        return (
        <div>
            The temperature is: {this.state.temperature}.
            <div>
                <form>
                    <label>
                        Search for city:
                        <input type="text" value={this.state.userInputCity} onChange={this.selectCity}/> 
    
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
        )
    }
}

export default Temperature;