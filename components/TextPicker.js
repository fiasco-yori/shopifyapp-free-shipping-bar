
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button, ColorPicker, TextField, Popover} from '@shopify/polaris';
import {hsbToHex, rgbToHsb} from '@shopify/polaris';

// interchange will always be hex

export default class HexColorPicker extends Component {
  static propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      isColorPickerOpen: false,
      textValue: ""
    };
    this.state.textValue = this.props.color;
    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16)
    } : null;
  }
  toggleColorPicker(){
    this.setState({isColorPickerOpen: !this.state.isColorPickerOpen});
  }
  formatHexToHsb(hex){
    return rgbToHsb(this.hexToRgb(hex));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.color !== this.props.color){
      this.setState({textValue: nextProps.color});
    } 
  }

  handleTextChange(value){
    this.setState({textValue: value});
    try{
      let color = this.hexToRgb(value);
      if(color){
        this.props.onChange(value);
      }
    }catch(err){
    }
  }
  
  render() {
    return (
      <div>
        <Popover
          active={this.state.isColorPickerOpen}
          onClose={this.toggleColorPicker}
          activator={<TextField label={this.props.label} onChange={this.handleTextChange} value={this.state.textValue} connectedRight={
                  <Button onClick={this.toggleColorPicker}>
                    <div className="color-preview" style={{backgroundColor: this.props.color, width: '20px', height: '20px'}} > 
                    </div>
                  </Button>} />}
        >
          <ColorPicker onChange={(color) => this.props.onChange(hsbToHex(color))} color={this.formatHexToHsb(this.props.color)} />
        </Popover>
      </div>
    )
  }
}