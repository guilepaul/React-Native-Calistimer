import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {
    state = {
        current: ''
    }
    componentDidMount() {
        this.setState({
            current: this.props.current
        })
    }
    handlePress = opt => () => {        
        const { current } = this.state
        if(Array.isArray(current)){
            let newCurrent = current
            const i = current.indexOf(opt)
            if( i >= 0){
                newCurrent = [...current]
                newCurrent.splice(i, 1)
            }else{
                newCurrent = [...current, opt]
            }
            this.setState({
                current: newCurrent
            })      
            if(this.props.onSelect){
                this.props.onSelect(newCurrent)
            }      
        }else{
            this.setState({
                current: opt
            })
            if(this.props.onSelect){
                this.props.onSelect(opt)
            }
        }
    }

    checkItem = item => {
        const { current } = this.state
        if(Array.isArray(current)){
            return current.indexOf(item) >= 0
            
        }           
        return current === item        
    }

    render(){
        const {options, label} = this.props
        const {current} = this.state
        return (
            <View >
                <Text style={styleSelect.label}>{label}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {options.map( opt => {
                    let id = ''
                    let label = ''
                    if(typeof opt === 'string'){
                        id = opt
                        label = opt
                    }
                    if(typeof opt === 'object'){
                        id = opt.id
                        label = opt.label
                    }
                    
                    return(
                        <TouchableOpacity 
                            key={id} 
                            style={[this.checkItem(id) ? styleSelect.optSelected : null]}
                            onPress={this.handlePress(id)}
                            >
                            <Text style={styleSelect.optLabel}>{label}</Text>
                        </TouchableOpacity>
                    )
                })}
                </View>
            </View>
        )
    }
}

const styleSelect = StyleSheet.create({
    label:{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        paddingTop: 18,
        paddingBottom: 18
    },
    opt: {
        padding: 8
    },
    optSelected: {
        backgroundColor: 'rgba(255,255,255,0.6)'
    },
    optLabel: {
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        opacity: 1
    }
})

export default Select