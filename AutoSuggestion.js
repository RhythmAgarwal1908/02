// basic.autosuggest.js
import React from 'react';
import Autosuggest from 'react-autosuggest';
import { View, Text } from 'react-native';
import db from './config';
import firebase from 'firebase';
var plant1;
var i; 
class BasicAutoSuggest extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: [],
            plantInfo:[]
        };
    }

    componentDidMount=async()=>{
        var class_ref = await db.ref('/').on('value',data =>{
          var all_plants =[]
           plant1= data.val();
          for(var i in plant1){
            all_plants.push(plant1[i])
          }
          this.setState({plantInfo:all_plants})
          console.log(this.state.plantInfo[0].plant1.name)
        })
          }
        



    /* Collection of data
    cars = [
        {
            name: 'Suzuki',
            origin: 'Japan',
            year: 1909
        },
        {
            name: 'Fiat',
            origin: 'Italy',
            year: 1899
        },
        {
            name: 'Honda',
            origin: 'Japan',
            year: 1948
        },
        {
            name: 'Porch',
            origin: 'Germany',
            year: 1954
        },
        {
            name: 'Audi',
            origin: 'Germany',
            year: 1910
        },
        {
            name: 'Ferrari',
            origin: 'Germany',
            year: 1920
        },

    ];*/

    // Filter logic
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.state.plantInfo.filter(lang =>
            this.state.plantInfo[0].plant1.name.toLowerCase().slice(0, inputLength) === inputValue
            );
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => this.state.plantInfo[0].plant1.name;

    // Render Each Option
    renderSuggestion = suggestion => (
      <View>
        <Text>
          {
          for(i in plantInfo){
         this.state.plantInfo[i]
        }
    }
        </Text>
        </View>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Type car name',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default BasicAutoSuggest;