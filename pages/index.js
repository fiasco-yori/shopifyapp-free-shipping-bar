import {
  Button,
  ButtonGroup,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
  DataTable,
  Heading,
  Badge,
  Select,
  Checkbox,
  ChoiceList,
  ColorPicker,
  Popover,
  RangeSlider,
  Collapsible,
  Caption
} from '@shopify/polaris';
import {  
  hsbToRgb,
  rgbToHsb,
  rgbString
} from '@shopify/polaris';



import { autobind } from "@shopify/javascript-utilities/decorators";

import fsbStyles from './styles/free-shipping-bar.module.css';
import { LoneAnonymousOperationRule } from 'graphql';
import { countries as countryOptions } from "./datas/countries";
import country_cur_data from 'country-currency-data';
import swal from 'sweetalert';


import { getTemplateList } from "./server/templateFunctions";
import { getBackgroundList } from "./server/backgroundFunctions";
import { getFontList } from "./server/fontFunctions";
import { getBarList, addBar,activateBar,pauseBar, deleteBar,duplicateBar} from "./server/barFunctions";
import { getShopInfo} from "./server/shopFunctions";

var datetime = require('node-datetime');

class FreeShippingBar extends React.Component {
  constructor(props){
      super(props);
      let cur_data = [];

      var today_datetime_create = datetime.create();
      var today_dateTime = today_datetime_create.format('Y-m-dTH:M');
      var today_datetime_create_end = datetime.create();
      today_datetime_create_end.offsetInDays(3);
      var today_dateTime_end = today_datetime_create_end.format('Y-m-dTH:M');

      country_cur_data.map((citem, index) => {
        cur_data.push({
          label:citem.country + ' - ' + citem.code,
          value: citem.code
        })
      })
      this.state = {
        img: '',
        shop_id: 0,
        bar_id: 0,
        template_id: 0,
        background_id: 0,
        bg_color_js: 'eeeeee',
        bars: [],
        fonts: [],
        templates: [],
        backgrounds: [],
        country_options: countryOptions,
        position_options : [
            {label: 'Top bar pushes down the rest of the page', value: 'top_push_v1'},
            {label: 'Top bar pushes down the rest of the page (always visible while scrolling)', value: 'top_push_sticky_v1'},
            {label: 'Top bar overlaps top of the page', value: 'top_cover_nonsticky'},
            {label: ' Top bar overlaps top of the page (always visible while scrolling)', value: 'top_cover'},
            {label: 'Bottom bar overlaps bottom of the page (always visible while scrolling)', value: 'bottom_cover'},
            // {label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme.', value: 'inserted'},
        ],
        currencies : cur_data,
        name: 'My first free shipping bar',
        goal: '100',
        goal_sec: '150',
        init_msg_start: 'Free shipping for orders over',
        init_msg_end: '',
        goal_msg: "Congratulations! You've got free shipping",
        is_sec_goal: 0,
        progress_msg_start: 'Only',
        progress_msg_end: ' away from free shipping',
        progress_msg_sec_start: 'You got free shipping, Only ',
        progress_msg_sec_end: ' away from 2-day free shipping',
        link_opt: 'off',
        link_url: 'https://apps.shopify.com/partners/me',
        is_link_new: 0,
        is_close_btn: 'no',
        position: 'top_push_sticky_v1',
        currency: 'USD',
        cur_symbol: '$',
        is_auto_cur: 'off',
        bg_color: ({
          hue: 300,
          brightness: 1,
          saturation: 0.7,
          alpha: 0.8
        }),

        bg_popoverActive: false,
        text_popoverActive: false,
        special_popoverActive: false,
        
        text_color: ({
          hue: 300,
          brightness: 1,
          saturation: 0.7
        }),
        special_color: ({
          hue: 300,
          brightness: 1,
          saturation: 0.7
        }),
        bg_color_opacity: '1',
        font_size: '16',
        font_family: 'Helvetica',
        padding: '12',
        disp_after: '0',
        delay_before: '0',
        time_fade: '3.5',
        display_options : [
          {label: 'All pages', value: 'all'},
          {label: 'Homepage only', value: 'home'},
          {label: "Only on Page with URL (Copy and Paste the URL below)", value: 'url'},
          {label: 'All pages', value: 'keyword'},
        ],
        display_page: 'all',
        exclude_options: [
          {label: 'Do NOT exclude any page', value: 'no'},
          {label: 'Homepage', value: 'home'},
          {label: "Only exclude Page with URL (Copy and Paste the URL below)", value: 'url'},
          {label: 'Only exclude Pages that contain the keyword in their URLs', value: 'keyword'},
        ],
        exclude_page: 'no',
        dev_target_options: [
          {label: 'Display on both desktop and mobile browsers. On mobile browsers font size will be capped to achieve optimum display', value: 'desktop'},
          {label: 'Display only on desktop browsers', value: 'desktp'},
          {label: 'HomepageDisplay only on mobile browsers', value: 'mobile'},
        ],
        dev_target: 'all',
        schedule_options: [
          {label: 'Always Display', value: 'no'},
          {label: 'Only display within the giving period of time', value: 'yes'}
        ],
        schedule: 'no',
        custom_code:'',
        showForm: false,
        content_active: true,
        style_active: true,
        targeting_active: true,
        custome_code_active: true,
        cur_active: true,
        display_url: '',
        display_keyword: '',
        exclude_keyword: '',
        exclude_url: '',
        sch_start: today_dateTime,
        sch_end: today_dateTime_end
    };
    
    this.onChange = this.onChange.bind(this)
    this.onChange_sch_start = this.onChange_sch_start.bind(this)
    this.onChange_sch_end = this.onChange_sch_end.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleColorChange_bg = this.handleColorChange_bg.bind(this)
    this.handleRgbChange_bg = this.handleRgbChange_bg.bind(this) 
      
    getBarList().then(datas => {
        this.setState({bars: [...datas.bar]})
        this.setState({templates: [...datas.templates]})
        this.setState({fonts: [...datas.fonts]})
        this.setState({backgrounds: [...datas.backgrounds]})
    })
    // getTemplateList().then(datas => {
    //   this.setState({templates: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
    // getFontList().then(datas => {
    //   this.setState({fonts: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
    // getBackgroundList().then(datas => {
    //   this.setState({backgrounds: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })


  }

  onChange = event => {
    this.setState({bg_color_js: event.target.value})
  }
  onChange_sch_start = event => {
    this.setState({sch_start: event.target.value})
  }
  onChange_sch_end = event => {
    this.setState({sch_end: event.target.value})
  }
  handleContentToggle = () => {
    this.setState({content_active: !this.state.content_active})
  }
  handleCurrencyToggle = () => {
    this.setState({cur_active: !this.state.cur_active})
  }
  handleStyleToggle = () => {
    this.setState({style_active: !this.state.style_active})
  }
  handleTargetingToggle = () => {
    this.setState({targeting_active: !this.state.targeting_active})
  }
  handleCustomToggle = () => {
    this.setState({custome_code_active: !this.state.custome_code_active})
  }

  //----bg_color----------
  
  hexToRgba(hex, alpha) {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
        alpha: alpha
    } : {
        red: 0,
        green: 0,
        blue: 0,
        alpha: alpha
    };
  }

  rgbaStringtoHsb = (value) => {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    let rgbaData = {
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2]
    }
    let bg_color_t = rgbToHsb(rgbaData)
    bg_color_t.alpha = rgbValues[3]
    return bg_color_t
  }

  handleColorChange_bg = (bg_color) => {
    this.setState({ bg_color });
  }

  handleRgbChange_bg = (value) => {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    let rgbaData = {
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2]
    }
    let bg_color_t = rgbToHsb(rgbaData)
    bg_color_t.alpha = rgbValues[3]
    this.setState({ bg_color: bg_color_t })
  }

  handlePopoverClose_bg = () => {
    this.setState({ bg_popoverActive: false });
  }

  handlePopoverOpen_bg = () => {
    this.setState({ bg_popoverActive: true });
  }
  //----text_color----------
  handleColorChange_text = (text_color) => {
    this.setState({ text_color });
  }

  handleRgbChange_text = (value) => {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const text_color = rgbToHsb({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2]
    });
    this.setState({ text_color });
  }

  handlePopoverClose_text = () => {
    this.setState({ text_popoverActive: false });
  }

  handlePopoverOpen_text = () => {
    this.setState({ text_popoverActive: true });
  }
  //------special color------
  handleColorChange_special = (special_color) => {
    this.setState({ special_color });
  }

  handleRgbChange_special = (value) => {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const special_color = rgbToHsb({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2]
    });
    this.setState({ special_color });
  }

  handlePopoverClose_special = () => {
    this.setState({ special_popoverActive: false });
  }

  handlePopoverOpen_special = () => {
    this.setState({ special_popoverActive: true });
  }

  render() {


    const { name, img, goal,goal_sec, init_msg_start, init_msg_end, progress_msg_start, progress_msg_end, progress_msg_sec_start, progress_msg_sec_end, goal_msg, link_opt, link_url,is_link_new, is_close_btn, position, position_options, currencies, currency,cur_symbol,is_auto_cur, bg_color,bg_popoverActive,text_popoverActive, special_popoverActive, text_color, special_color, bg_color_opacity, font_size, font_family, padding, disp_after, delay_before, time_fade,display_page,exclude_page,dev_target, display_options,exclude_options, dev_target_options, schedule_options, schedule,custom_code, bg_color_js, showForm, content_active, style_active, custome_code_active, targeting_active, cur_active, template_id, is_sec_goal, display_url,display_keyword, exclude_url, exclude_keyword, sch_end, sch_start} = this.state;

    
    
    const bg_rgbaColor = rgbString(hsbToRgb(bg_color));
    const text_rgbaColor = rgbString(hsbToRgb(text_color));
    const special_rgbaColor = rgbString(hsbToRgb(special_color));
    
    return (
        <Page>
          <Layout>
            <Layout.Section oneHalf>
              <Card sectioned>
                <Stack>
                  <Stack.Item fill>
                    <Heading>Free Shipping Bar (FSB) Dashboard</Heading>
                  </Stack.Item>
                  <Stack.Item>
                    <Button primary onClick={this.onCreate}>Create New Bar</Button>
                  </Stack.Item>
                </Stack>
                {/* <input className="jscolor" value={bg_color_js} onChange={this.onChange.bind(this)}></input> */}
                <div className="Polaris-DataTable">
                  <div className="Polaris-DataTable__ScrollContainer">
                    <table id='bars' className="Polaris-DataTable__Table"> 
                      <thead>
                        <tr>
                          <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header">Name</th>
                          <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header">Geo Target</th>
                          <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header">Excluded Countries</th>
                          <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                      { this.state.bars.map((bar, index) => {
                        const { id, name, countries, exclude_countries, is_active } = bar
                        return (
                            <tr className="Polaris-DataTable__TableRow" key={bar.id}>
                              <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
                                <Stack>
                                  <Stack.Item>
                                    <Badge status={is_active == 1? "success": "attention"}>{is_active == 1? "Active": "Pending"}</Badge>
                                  </Stack.Item>
                                  <Stack.Item>
                                    {bar.name}
                                  </Stack.Item>
                                </Stack>
                              </td>
                              <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
                                  {countries || 'All Countries'}
                              </td>
                              <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
                                  {exclude_countries || 'N/A'}              
                              </td>
                              <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
                                <ButtonGroup>
                                  <Button size="slim" onClick={this.onEdit.bind(this, bar)} primary>Edit</Button>
                                  <Button size="slim" onClick={this.onDuplicate.bind(this, bar.id)}>Duplicate</Button>
                                  {bar.is_active == 1 ? (
                                    <Button size="slim" onClick={this.onPause.bind(this, {id: bar.id})}>Pause</Button>
                                  ): (
                                    <Button size="slim" onClick={this.onActivate.bind(this,{id: bar.id, shop_id: bar.shop_id})}>
                                    Activate
                                    </Button>
                                  )}
                                  <Button size="slim" onClick={this.onDelete.bind(this, bar.id)} destructive>Delete</Button>
                                </ButtonGroup>
                              </td>
                            </tr>
                        )
                      }) }
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        <div style={{display: showForm? "block" : "none" }}>
        <Form onSubmit={this.handleSubmit.bind(this)} >
          <Layout>
              <Layout.Section oneThird>
                      <Card title="Basic Template" sectioned>
                          <FormLayout>
                          {this.state.templates.map((template, index) => {
                            if(template.type == 0){
                              return (
                              <div key={index} className="fsb_tp_container">
                                <div className="fsbStyles.fsb_tb_content" style={{ 
                                  backgroundColor: template.bg_color,
                                  color: template.text_color,
                                  textAlign: "center",
                                  fontSize: template.font_size,
                                  fontWeight: "normal",
                                  lineheight: "20px",
                                  padding: "12px",
                                  fontFamily: template.font_family
                                  }}  onClick={this.onTemplate.bind(this, template)}>
                                        {template.name}
                                </div>
                              </div>
                              )
                            }
                          })}
                          </FormLayout>
                      </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                      <Card title="Prenium Template" sectioned>
                      <FormLayout>
                          {this.state.templates.map((template, index) => {
                            if(template.type == 1){
                              return (
                              <div key={index} className="fsb_tp_container">
                                <div className="fsbStyles.fsb_tb_content" style={{ 
                                  background: 'url('+template.img+')',
                                  color: template.text_color,
                                  textAlign: "center",
                                  fontSize: template.font_size,
                                  fontWeight: "normal",
                                  lineheight: "20px",
                                  padding: "12px",
                                  fontFamily: template.font_family
                                  }}  onClick={this.onTemplate.bind(this, template)}>
                                        {template.name}
                                </div>
                              </div>
                              )
                            }
                          })}
                          </FormLayout>
                      </Card>
              </Layout.Section>
          </Layout>
          <div style={{display: template_id > 0? "block" : "none" }}>
          <Layout>
              <Layout.Section>
                      <Card title="Preview" sectioned>
                          <FormLayout>
                            <div className="fsb_tp_container">
                              <div style={{
                                backgroundImage: 'url(' + this.state.img + ')'
                              }}>
                                <div id="fsb_main_bar" className="fsb_tb_content" style={{
                                  position: "relative", 
                                  opacity: this.state.bg_color_opacity,
                                  backgroundColor: rgbString(hsbToRgb(this.state.bg_color)),
                                  color: rgbString(hsbToRgb(this.state.text_color)),
                                  textAlign: "center",
                                  fontSize: this.state.font_size + 'px',
                                  fontWeight: "normal",
                                  lineheight: "20px",
                                  padding: this.state.padding + 'px',
                                  fontFamily: this.state.font_family
                                  }} >
                                      {this.state.init_msg_start}
                                      <span style={{
                                        color: rgbString(hsbToRgb(this.state.special_color))
                                      }}> {this.state.cur_symbol}</span>
                                      <span style={{
                                        color: rgbString(hsbToRgb(this.state.special_color))
                                        }}>{this.state.goal} </span>
                                        {this.state.init_msg_end}
                                      { this.state.is_close_btn == 'yes' ? (
                                        <div><a id="fsb_close" style={{
                                          color: rgbString(hsbToRgb(this.state.text_color)),
                                          position:"absolute",
                                          right:"8px",
                                            top:"50%",
                                            transform:"translateY(-50%)", color:"#002B38", 
                                            fontFamily: "Helvertical, Arial, sans-serif", fontWeight: "bold",
                                            fontSize:"16px",
                                            textDecoration: "none"}}>X
                                            </a>
                                        </div>
                                      ) : ('')}
                                </div>
                            
                              </div>
                            </div>
                            <div className="fsb_tp_container">
                              <div style={{
                                backgroundImage: 'url(' + this.state.img + ')'
                              }}>
                                <div id="fsb_main_bar" className="fsb_tb_content" style={{
                                  position: "relative", 
                                  opacity: this.state.bg_color_opacity,
                                  backgroundColor: rgbString(hsbToRgb(this.state.bg_color)),
                                  color: rgbString(hsbToRgb(this.state.text_color)),
                                  textAlign: "center",
                                  fontSize: this.state.font_size + 'px',
                                  fontWeight: "normal",
                                  lineheight: "20px",
                                  padding: this.state.padding + 'px',
                                  fontFamily: this.state.font_family
                                  }} >
                                      {this.state.progress_msg_start}
                                      <span style={{
                                        color: rgbString(hsbToRgb(this.state.special_color))
                                      }}> {this.state.cur_symbol}</span>
                                      <span style={{
                                        color: rgbString(hsbToRgb(this.state.special_color))
                                        }}>{this.state.goal-1} </span>
                                       {this.state.progress_msg_end} 
                                      { this.state.is_close_btn == 'yes' ? (
                                        <div><a id="fsb_close" style={{
                                          color: rgbString(hsbToRgb(this.state.text_color)),
                                          position:"absolute",
                                          right:"8px",
                                            top:"50%",
                                            transform:"translateY(-50%)", color:"#002B38", 
                                            fontFamily: "Helvertical, Arial, sans-serif", fontWeight: "bold",
                                            fontSize:"16px",
                                            textDecoration: "none"}}>X
                                            </a>
                                        </div>
                                      ) : ('')}
                                </div>
                            
                              </div>
                            </div>
                            <div className="fsb_tp_container" style={{display: is_sec_goal == 1? 'block':'none'}}>
                              <div style={{
                                backgroundImage: 'url(' + this.state.img + ')'
                              }}>
                                <div id="fsb_main_bar" className="fsb_tb_content" style={{
                                  position: "relative", 
                                  opacity: this.state.bg_color_opacity,
                                  backgroundColor: rgbString(hsbToRgb(this.state.bg_color)),
                                  color: rgbString(hsbToRgb(this.state.text_color)),
                                  textAlign: "center",
                                  fontSize: this.state.font_size + 'px',
                                  fontWeight: "normal",
                                  lineheight: "20px",
                                  padding: this.state.padding + 'px',
                                  fontFamily: this.state.font_family
                                  }} >
                                      {this.state.progress_msg_sec_start}
                                      <span style={{
                                        color: rgbString(hsbToRgb(this.state.special_color))
                                      }}> {this.state.cur_symbol}</span>
                                      <span style={{
                                        color: rgbString(hsbToRgb(this.state.special_color))
                                        }}>{this.state.goal_sec-1} </span>
                                       {this.state.progress_msg_sec_end} 
                                      { this.state.is_close_btn == 'yes' ? (
                                        <div><a id="fsb_close" style={{
                                          color: rgbString(hsbToRgb(this.state.text_color)),
                                          position:"absolute",
                                          right:"8px",
                                            top:"50%",
                                            transform:"translateY(-50%)", color:"#002B38", 
                                            fontFamily: "Helvertical, Arial, sans-serif", fontWeight: "bold",
                                            fontSize:"16px",
                                            textDecoration: "none"}}>X
                                            </a>
                                        </div>
                                      ) : ('')}
                                </div>
                            
                              </div>
                            </div>
                            <div className="fsb_tp_container">
                              <div style={{
                                backgroundImage: 'url(' + this.state.img + ')'
                              }}>
                                <div id="fsb_main_bar" className="fsb_tb_content" style={{
                                  position: "relative", 
                                  opacity: this.state.bg_color_opacity,
                                  backgroundColor: rgbString(hsbToRgb(this.state.bg_color)),
                                  color: rgbString(hsbToRgb(this.state.text_color)),
                                  textAlign: "center",
                                  fontSize: this.state.font_size + 'px',
                                  fontWeight: "normal",
                                  lineheight: "20px",
                                  padding: this.state.padding + 'px',
                                  fontFamily: this.state.font_family
                                  }} >
                                      {this.state.goal_msg}
                                      { this.state.is_close_btn == 'yes' ? (
                                        <div><a id="fsb_close" style={{
                                          color: rgbString(hsbToRgb(this.state.text_color)),
                                          position:"absolute",
                                          right:"8px",
                                            top:"50%",
                                            transform:"translateY(-50%)", color:"#002B38", 
                                            fontFamily: "Helvertical, Arial, sans-serif", fontWeight: "bold",
                                            fontSize:"16px",
                                            textDecoration: "none"}}>X
                                            </a>
                                        </div>
                                      ) : ('')}
                                </div>
                              </div>
                            </div>
                          </FormLayout>
                      </Card>
              </Layout.Section>
          </Layout>
          <Layout>
              <Layout.Section>
                      <Card sectioned>
                        <Stack>
                          <Stack.Item fill>
                            <Heading>Content Configuration</Heading>
                          </Stack.Item>
                          <Stack.Item>
                            <Button 
                            onClick={this.handleContentToggle}
                            ariaExpanded={content_active}
                            ariaControls="content-config"
                            >
                            Toggle</Button>
                          </Stack.Item>
                        </Stack>
                        <Collapsible
                          open={content_active}
                          id="content-config"
                          transition={{duration: '150ms', timingFunction: 'ease'}}
                        >      
                          <FormLayout>
                          <TextField
                              value={name}
                              onChange={this.handleChange('name')}
                              label="Name: "
                              type="text"
                              helpText="For your own internal reference - only you can see it"
                            />
                            <FormLayout.Group>
                              <Stack alignment="center">
                              <TextField
                                value={goal}
                                onChange={this.handleChange('goal')}
                                label="Free Shipping Goal: "
                                type="number"
                                helpText="If no minimum order value is required, please set goal to 0"
                              />
                              <div style={{display: is_sec_goal == 1? 'none':'block'}}>
                              <Button  primary onClick={this.onSecGoal.bind(this)}>Add Secondary Goal</Button>
                              </div>
                              </Stack>
                            </FormLayout.Group>
                            <FormLayout.Group >
                            <div style={{display: is_sec_goal == 0? 'none':'block'}}>
                            <Stack alignment="center">
                            <TextField
                              value={goal_sec}
                              onChange={this.handleChange('goal_sec')}
                              label="Free Shipping Secondary Goal: "
                              type="number"
                              helpText="Secondary goal needs to be greater than the 1st free shipping goal"
                            />
                            <Button primary onClick={this.onSecGoal.bind(this)}>Remove Secondary Goal</Button>
                            </Stack>
                            </div>
                            </FormLayout.Group>
                            <FormLayout.Group>
                            <Stack alignment="center">
                            <TextField
                              value={init_msg_start}
                              onChange={this.handleChange('init_msg_start')}
                              label="Initial Message: "
                              type="text"
                              helpText="Display when cart is empty"
                            />
                            <div className="fsb_msg_price">${this.state.goal}</div>
                             <TextField
                              value={init_msg_end}
                              onChange={this.handleChange('init_msg_end')}
                              label=" "
                              type="text"
                            />
                            </Stack>
                            </FormLayout.Group>
                            
                            <FormLayout.Group >
                            <Stack alignment="center">
                            <TextField
                              value={progress_msg_start}
                              onChange={this.handleChange('progress_msg_start')}
                              label="Progress Message: "
                              type="text"
                              helpText="Displays when cart value is less than the goal"
                            />
                            <div className="fsb_msg_price">${this.state.goal-1}</div>
                             <TextField
                              value={progress_msg_end}
                              onChange={this.handleChange('progress_msg_end')}
                              label=" "
                              type="text"
                            />
                            </Stack>
                            </FormLayout.Group>
                            <FormLayout.Group >
                            <div style={{display: is_sec_goal == 0? 'none':'block'}}>
                            <Stack alignment="center">
                            <TextField
                              value={progress_msg_sec_start}
                              onChange={this.handleChange('progress_msg__sec_start')}
                              label="Progress Message for Secondary Goal:"
                              type="text"
                              helpText="Displays when cart value is higher than the 1st goal, but less than the secondary goal"
                            />
                            <div className="fsb_msg_price">${this.state.goal_sec-1}</div>
                             <TextField
                              value={progress_msg_sec_end}
                              onChange={this.handleChange('progress_msg_sec_end')}
                              label=" "
                              type="text"
                            />
                            </Stack>
                            </div>
                            </FormLayout.Group>
                            
                            <TextField
                              value={goal_msg}
                              onChange={this.handleChange('goal_msg')}
                              label="Goal Achieved Message:: "
                              type="text"
                              helpText="Displays when cart value is greater than goal"
                            />    
                            <Select
                              label="Add Link to the Bar (optional):"
                              options={[
                                {label: 'ON', value: 'on'},
                                {label: 'OFF', value: 'off'},
                              ]}
                              onChange={this.handleChange('link_opt')}
                              value={link_opt}
                              helpText="The bar will be clickable after adding a link"
                            />
                            
                            { this.state.link_opt == 'on' ? (
                              <TextField
                              value={link_url}
                              onChange={this.handleChange('link_url')}
                              label="Link URL:"
                              type="text"
                              helpText="This address will be visited after clicking the bar"
                              />
                            ) : ('') }
                            { this.state.link_opt == 'on' ? ( 
                              <Checkbox
                                label="Open the link in a NEW tab when clicked"
                                checked={is_link_new}
                                onChange={this.handleChange('is_link_new')}
                              />
                            ): ('')}
                            <Select
                              label="Include Close Button:"
                              options={[
                                {label: 'YES', value: 'yes'},
                                {label: 'NO', value: 'no'},
                              ]}
                              onChange={this.handleChange('is_close_btn')}
                              value={is_close_btn}
                              helpText='Places an "x" button on the bar so that users can close it manually'
                            />
                            <ChoiceList
                              title="Select a Display Position:"
                              choices={position_options}
                              selected={position}
                              onChange={this.handleChange('position')}
                            />
                          </FormLayout>
                        </Collapsible>  
                      </Card>
              </Layout.Section>
          </Layout>
          <Layout>
            <Layout.Section>
              <Card sectioned>
              <Stack>
                <Stack.Item fill>
                  <Heading>Currency Configuration</Heading>
                </Stack.Item>
                <Stack.Item>
                  <Button 
                  onClick={this.handleCurrencyToggle}
                  ariaExpanded={cur_active}
                  ariaControls="cur-setting"
                  >
                  Toggle</Button>
                </Stack.Item>
              </Stack>
              <Collapsible
                open={cur_active}
                id="cur-setting"
                transition={{duration: '150ms', timingFunction: 'ease'}}
              >
                <FormLayout>
                    <Select
                      label="Currency:"
                      options={currencies}
                      onChange={this.onCurrency.bind(this)}
                      value={currency}
                      helpText='Places an "x" button on the bar so that users can close it manually'
                     />      
                     <TextField
                              value={cur_symbol}
                              onChange={this.handleChange('cur_symbol')}
                              label="Currency Symbol::"
                              type="text"
                      />         
                      <Select
                      label="Auto Currency Conversion::"
                      options={[
                        {label: 'OFF', value: 'off'},
                        {label: 'ON', value: 'on'}
                      ]}
                      onChange={this.onAutoCurrency.bind(this)}
                      value={is_auto_cur}
                      helpText="NOTE: If native Shopify multi-currencies is configured on your store, this Currency Configuration will be disabled. You can enable this if your website supports auto-currency detection. FSB auto-converts the goal value to the visitors' local currency"
                      />
                </FormLayout>
              </Collapsible>
              </Card>
            </Layout.Section>
          </Layout>
          <Layout>
            <Layout.Section>
              <Card sectioned>
              <Stack>
                <Stack.Item fill>
                  <Heading>Style Configuration</Heading>
                </Stack.Item>
                <Stack.Item>
                  <Button 
                  onClick={this.handleStyleToggle}
                  ariaExpanded={style_active}
                  ariaControls="style-config"
                  >
                  Toggle</Button>
                </Stack.Item>
              </Stack>
              <Collapsible
                open={style_active}
                id="style-config"
                transition={{duration: '150ms', timingFunction: 'ease'}}
              >
                <FormLayout>
                <FormLayout.Group>
                    <Popover
                        active={bg_popoverActive}
                        activator={ 
                            <Button onClick={this.handlePopoverOpen_bg}>
                              <Stack alignment="center" spacing="tight">
                                <div
                                  style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: bg_rgbaColor
                                  }}
                                />
                                <span>Background Color</span>
                              </Stack>
                            </Button>
                        }
                        onClose={this.handlePopoverClose_bg}
                      >
                        <Popover.Section>
                          <ColorPicker
                            onChange={this.handleColorChange_bg.bind(this)}
                            color={bg_color}
                            allowAlpha
                          />
                        </Popover.Section>
                        <Popover.Section>
                          <TextField value={bg_rgbaColor} onChange={this.handleRgbChange_bg.bind(this)} />
                        </Popover.Section>
                    </Popover>
                    <Popover
                        active={text_popoverActive}
                        activator={ 
                            <Button onClick={this.handlePopoverOpen_text}>
                              <Stack alignment="center" spacing="tight">
                                <div
                                  style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: text_rgbaColor
                                  }}
                                />
                                <span>Text Color</span>
                              </Stack>
                            </Button>
                        }
                        onClose={this.handlePopoverClose_text}
                      >
                        <Popover.Section>
                          <ColorPicker
                            onChange={this.handleColorChange_text}
                            color={text_color}
                            allowAlpha={false}
                          />
                        </Popover.Section>
                        <Popover.Section>
                          <TextField value={text_rgbaColor} onChange={this.handleRgbChange_text} />
                        </Popover.Section>
                    </Popover>
                    <Popover
                        active={special_popoverActive}
                        activator={ 
                            <Button onClick={this.handlePopoverOpen_special}>
                              <Stack alignment="center" spacing="tight">
                                <div
                                  style={{
                                    height: "2rem",
                                    width: "2rem",
                                    borderRadius: "0.3rem",
                                    background: special_rgbaColor
                                  }}
                                />
                                <span>Special Color</span>
                              </Stack>
                            </Button>
                        }
                        onClose={this.handlePopoverClose_special}
                      >
                        <Popover.Section>
                          <ColorPicker
                            onChange={this.handleColorChange_special}
                            color={special_color}
                            allowAlpha={false}
                          />
                        </Popover.Section>
                        <Popover.Section>
                          <TextField value={special_rgbaColor} onChange={this.handleRgbChange_special} />
                        </Popover.Section>
                    </Popover>
                </FormLayout.Group>
                    {/* <RangeSlider
                      label="Background Color Opacity:"
                      value={bg_color_opacity}
                      min={0}
                      max={1}
                      step={0.01}
                      onChange={this.handleChange('bg_color_opacity')}
                      output
                    /> */}
                    Background Images:
                    <FormLayout.Group>
                    <Stack>
                    {this.state.backgrounds.map((background, index) => {
                              return (
                                <div key={index} style={{ 
                                  cursor: "pointer",
                                  margin: "10px 0", 
                                  padding:"10px 50px",
                                  textAlign: "center",
                                   fontSize:background.font_size, 
                                   color:background.text_color, 
                                   fontFamily:background.font_family, 
                                   background: 'url('+background.img+')'
                                   }} onClick={this.onBackgroundSetting.bind(this, background)}>
                                  {background.name}</div>
                              )
                      })}
                    </Stack>
                    </FormLayout.Group>
                    {/* Upload Background Image:
                    <input type="file" style={{marginBottom: "10px"}}></input> */}
                </FormLayout>
                  Fonts: 
                  <ButtonGroup>
                  {this.state.fonts.map((font, index) => {
                        if(font.name == this.state.font_family){
                          return (
                            <Button primary key={index} calssName="fsb_font_btn"  
                            onClick={this.onFont.bind(this, font)}>
                              <font style={{fontFamily:font.name}}>{font.name}</font>
                              </Button>
                          )
                        }else {
                          return (
                            <Button style={{fontFamily:font.name}} key={index} calssName="fsb_font_btn"  
                            onClick={this.onFont.bind(this, font)}>
                              <font style={{fontFamily:font.name}}>{font.name}</font>
                              </Button>
                          )
                        }
                    })}
                  </ButtonGroup>    
                <FormLayout>
                  <TextField
                      value={font_size}
                      onChange={this.handleChange('font_size')}
                      label="Font Size:"
                      type="number"
                      helperText="Bar height is determined by Font Size and Bar Padding"
                      prefix="PX"
                    />  
                    <TextField
                      value={padding}
                      onChange={this.handleChange('padding')}
                      label="Bar Padding:"
                      type="number"
                      helperText="Space between the text and the upper/lower borders"
                      prefix="PX"
                    />
                    <TextField
                      value={disp_after}
                      onChange={this.handleChange('disp_after')}
                      label="Disappear After:"
                      type="text"
                      helperText="Bar will not disappear if set to 0."
                      prefix="Seconds"
                    />
                    <TextField
                      value={delay_before}
                      onChange={this.handleChange('delay_before')}
                      label="Delay Before Repeating:"
                      type="number"
                      helperText="Wait this many seconds to show Free Shipping Bar again (unless cart value changes)"
                      prefix="Seconds"
                    />
                    <TextField
                      value={time_fade}
                      onChange={this.handleChange('time_fade')}
                      label="Time to Fade In/Out:"
                      type="number"
                      helperText="Bar will not fade if set to 0"
                      prefix="Seconds"
                    />
                </FormLayout>
              </Collapsible>
              </Card>
            </Layout.Section>
          </Layout>
          <Layout>
              <Layout.Section>
                <Card sectioned>
                <Stack>
                <Stack.Item fill>
                  <Heading>Targeting Configuration</Heading>
                </Stack.Item>
                <Stack.Item>
                  <Button 
                  onClick={this.handleTargetingToggle}
                  ariaExpanded={targeting_active}
                  ariaControls="target-config"
                  >
                  Toggle</Button>
                </Stack.Item>
                </Stack>
                <Collapsible
                  open={targeting_active}
                  id="target-config"
                  transition={{duration: '150ms', timingFunction: 'ease'}}
                >
                  <FormLayout>
                    <ChoiceList
                        title="Display on Page:"
                        choices={display_options}
                        selected={display_page}
                        onChange={this.handleChange('display_page')}
                      />
                      { this.state.display_page == 'url' ? (
                          <TextField
                          value={display_url}
                          onChange={this.handleChange('display_url')}
                          label="Display URL: "
                          type="text"
                          helpText="Input the link address above (you can copy and paste the page URL directly into the field)"
                          />
                      ) : ('')}
                      { this.state.display_page == 'keyword' ? (
                          <TextField
                          value={display_keyword}
                          onChange={this.handleChange('display_keyword')}
                          label="Display Keyword: "
                          type="text"
                          helpText="Input the Keywords above. Use commas to separate if there are multiple keywords. The bar displays if any keyword is matched"
                          />
                      ) : ('')}
                      <ChoiceList
                        title="Exclude Page:"
                        choices={exclude_options}
                        selected={exclude_page}
                        onChange={this.handleChange('exclude_page')}
                      />
                      { this.state.exclude_page == 'url' ? (
                          <TextField
                          value={exclude_url}
                          onChange={this.handleChange('exclude_url')}
                          label="Exclude URL: "
                          type="text"
                          helpText="Input the link address above (you can copy and paste the page URL directly into the field)"
                          />
                      ) : ('')}
                      { this.state.exclude_page == 'keyword' ? (
                          <TextField
                          value={exclude_keyword}
                          onChange={this.handleChange('exclude_keyword')}
                          label="Exclude Keyword: "
                          type="text"
                          helpText="Input the Keywords above. Use commas to separate if there are multiple keywords. The bar does not display if any keyword is matched."
                          />
                      ) : ('')}
                      <ChoiceList
                        title="Device Target:"
                        choices={dev_target_options}
                        selected={dev_target}
                        onChange={this.handleChange('dev_target')}
                      />
                      <ChoiceList
                        title="Display Schedule:"
                        choices={schedule_options}
                        selected={schedule}
                        onChange={this.handleChange('schedule')}
                      />
                      <div style={{display: this.state.schedule=='yes'? 'block':'none'}}>
                      <Stack>
                      <input type="datetime-local" className="datetimepicker" value={sch_start} onChange={this.onChange_sch_start.bind(this)}></input>
                      -
                      <input type="datetime-local" className="datetimepicker" value={sch_end} onChange={this.onChange_sch_end.bind(this)}></input>
                      </Stack>
                      <Caption>Define the Start Time and End Time of the display period, minimum duration is 24 hours</Caption>
                      </div>
                  </FormLayout>
                </Collapsible>
                </Card>
              </Layout.Section>
            </Layout>
            <Layout>
              <Layout.Section>
                <Card sectioned>
                <Stack>
                  <Stack.Item fill>
                    <Heading>Custom Code Configuration</Heading>
                  </Stack.Item>
                  <Stack.Item>
                    <Button 
                    onClick={this.handleCustomToggle}
                    ariaExpanded={custome_code_active}
                    ariaControls="custom-config"
                    >
                    Toggle</Button>
                  </Stack.Item>
                  </Stack>
                <Collapsible
                  open={custome_code_active}
                  id="custom-config"
                  transition={{duration: '150ms', timingFunction: 'ease'}}
                >
                  <TextField
                    label="Custom Code:"
                    value={custom_code}
                    onChange={this.handleChange('custom_code')}
                    multiline
                  />
                  <p>Horizontal Zoom: Good for displaying a pattern based background image</p>
                  <p>Vertical Scroll: A Background image scrolled vertically. Good for showing a product image.</p>
                </Collapsible>
                  
                </Card>
              </Layout.Section>
            </Layout>
            <Layout>
              <Layout.Section>
                <Card sectioned>
                  <Stack distribution="trailing">
                    <Button onClick={this.handleCancel.bind(this)}>
                      Cancel
                    </Button>
                    <Button primary submit>
                      Save
                    </Button>
                  </Stack>
                </Card>
              </Layout.Section>
            </Layout>
            </div>
        </Form>
        </div>              
      </Page>
    );
  }

  init = () => {

    this.setState({showForm: false})
    this.setState({bar_id: 0})
    this.setState({template_id: 0})
    this.setState({background_id: 0})
    getBarList().then(datas => {
        this.setState({bars: [...datas.bar]})
        this.setState({templates: [...datas.templates]})
        this.setState({fonts: [...datas.fonts]})
        this.setState({backgrounds: [...datas.backgrounds]})
    })
    // getBarList().then(datas => {
    //     this.setState({bars: [...datas]}, () => 
    //     {
    //     }
    //   )
      
    // })
    // getTemplateList().then(datas => {
    //   this.setState({templates: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
    // getFontList().then(datas => {
    //   this.setState({fonts: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
    // getBackgroundList().then(datas => {
    //   this.setState({backgrounds: [...datas]}, 
    //     () => {
    //     }
    //   )
    // })
  }
  onPause = (data) => {
    let pause_data = {id: data.id}
    pauseBar(pause_data).then(rdata => {
      if(rdata.status == "success") {
        swal("Successfully Paused", {
          icon: "success",
        });
        this.init();
      } else {
        swal("Failed", {
          icon: "warning",
        });
      }
    })
  }
  onActivate = (data) => {
    let activate_data = {id: data.id, shop_id: data.shop_id}
    activateBar(activate_data).then(rdata => {
      if(rdata.status == "success") {
        swal("Successfully Activated", {
          icon: "success",
        });
        this.init();
      } else {
        swal("Failed", {
          icon: "warning",
        });
      }
    })
  }
  onDuplicate = (id) => {
    duplicateBar(id).then(data => {
      if(data.status == "success") {
        swal("Successfully Duplicated", {
          icon: "success",
        });
        this.init();
      } else {
        swal("Failed", {
          icon: "warning",
        });
      }
    })
  }
  onDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover bar!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deleteBar(id).then(data => {
          if(data.status == "success") {
            swal("Successfully Deleted", {
              icon: "success",
            });
            this.init();
          } else {
            swal("Failed", {
              icon: "warning",
            });
          }
        })
      } else {
        return
      }
    });
  }

  handleCancel = e => {
    e.preventDefault()
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({showForm: false})
    return false
  }

  handleSubmit = e => {
     e.preventDefault()
     let submit_data = {
        shop_id: this.state.shop_id,
        bar_id: this.state.bar_id,
        template_id: this.state.template_id,
        background_id: this.state.background_id,
        img: this.state.img,
        name: this.state.name,
        goal: this.state.goal,
        goal_sec: this.state.is_sec_goal == 1 ? this.state.goal_sec : 0,
        init_msg_start: this.state.init_msg_start,
        init_msg_end: this.state.init_msg_end,
        is_sec_goal: this.state.is_sec_goal, 
        progress_msg_sec_start: this.state.progress_msg_sec_start,
        progress_msg_sec_end: this.state.progress_msg_sec_end,
        progress_msg_start: this.state.progress_msg_start,
        progress_msg_end: this.state.progress_msg_end,
        goal_msg: this.state.goal_msg, 
        link_opt: this.state.link_opt, 
        link_url: this.state.link_url,
        is_link_new: this.state.is_link_new,
        is_close_btn: this.state.is_close_btn,
        position: Array.isArray(this.state.position)? this.state.position[0]: this.state.position, 
        currency: this.state.currency,
        cur_symbol: this.state.cur_symbol,
        is_auto_cur: this.state.is_auto_cur,
        bg_color: rgbString(hsbToRgb(this.state.bg_color)),
        text_color: rgbString(hsbToRgb(this.state.text_color)),
        special_color: rgbString(hsbToRgb(this.state.special_color)), 
        bg_color_opacity: this.state.bg_color_opacity,
        font_size: this.state.font_size,
        font_family: this.state.font_family,
        padding: this.state.padding,
        disp_after: this.state.disp_after,
        delay_before: this.state.delay_before,
        time_fade: this.state.time_fade,
        display_page: Array.isArray(this.state.display_page)? this.state.display_page[0]: this.state.display_page,
        exclude_page: Array.isArray(this.state.exclude_page)? this.state.exclude_page[0]: this.state.exclude_page,
        dev_target: Array.isArray(this.state.dev_target)? this.state.dev_target[0]: this.state.dev_target,
        schedule: Array.isArray(this.state.schedule)? this.state.schedule[0]: this.state.schedule,
        custom_code: this.state.custom_code,
        display_url: this.state.display_url,
        display_keyword: this.state.display_keyword,
        exclude_keyword: this.state.exclude_keyword,
        exclude_url: this.state.exclude_url,
        sch_start: this.state.sch_start,
        sch_end: this.state.sch_end
     }
     addBar(submit_data).then(data => {
        if(data.status == 'success'){
          this.init();
          swal({
            title: data.err_msg,
            icon: "success",
          })
        }else {
          swal({
            title: data.err_msg,
            icon: "warning",
          })
        }
     })
  };
  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

  onCreate = () => {
    this.setState({showForm: true})
    this.setState({template_id: 0})
  }
  onEdit = (bar) => {
    this.setState({
      showForm: true,
      shop_id: bar.shop_id,
      bar_id: bar.id,
      template_id: bar.template_id,
      background_id: bar.background_id,
      img: bar.img,
      name: bar.name,
      goal: String(bar.goal),
      goal_sec: String(bar.goal_sec),
      init_msg_start: bar.init_msg_start,
      init_msg_end: bar.init_msg_end,
      is_sec_goal: bar.is_sec_goal, 
      progress_msg_sec_start: bar.progress_msg_sec_start,
      progress_msg_sec_end: bar.progress_msg_sec_end,
      progress_msg_start: bar.progress_msg_start,
      progress_msg_end: bar.progress_msg_end,
      goal_msg: bar.goal_msg, 
      link_opt: bar.link_opt, 
      link_url: bar.link_url,
      is_link_new: bar.is_link_new,
      is_close_btn: bar.is_close_btn,
      position: bar.position, 
      currency: bar.currency,
      cur_symbol: bar.cur_symbol,
      is_auto_cur: bar.is_auto_cur,
      bg_color: this.rgbaStringtoHsb(bar.bg_color),
      text_color: this.rgbaStringtoHsb(bar.text_color),
      special_color: this.rgbaStringtoHsb(bar.special_color), 
      bg_color_opacity: bar.bg_color_opacity,
      font_size: String(bar.font_size),
      font_family: bar.font_family,
      padding: String(bar.padding),
      disp_after: String(bar.disp_after),
      delay_before: String(bar.delay_before),
      time_fade: String(bar.time_fade),
      display_page: bar.display_page,
      exclude_page: bar.exclude_page,
      dev_target: bar.dev_target,
      schedule: bar.schedule,
      custom_code: bar.custom_code,
      display_keyword: bar.display_keyword,
      display_url: bar.display_url,
      exclude_keyword: bar.exclude_keyword,
      exclude_url: bar.exclude_url,
      sch_start: bar.sch_start,
      sch_end: bar.sch_end
   })
  }
  onTemplate = (template) => {
    this.setState({template_id: template.id})
    if(template.type == 0){
      this.setState({
        bg_color:this.rgbaStringtoHsb(rgbString(this.hexToRgba(template.bg_color, 1))),
        text_color: this.rgbaStringtoHsb(rgbString(this.hexToRgba(template.text_color,1))),
        special_color: this.rgbaStringtoHsb(rgbString(this.hexToRgba(template.special_color,1))),
        font_size: String(template.font_size),
        font_family: template.font_family
      })
    } else {
      this.setState({
        img: template.img,
        bg_color:this.rgbaStringtoHsb(rgbString(this.hexToRgba(template.bg_color, 0))),
        text_color: this.rgbaStringtoHsb(rgbString(this.hexToRgba(template.text_color,1))),
        special_color: this.rgbaStringtoHsb(rgbString(this.hexToRgba(template.special_color,1))),
        font_size: String(template.font_size),
        font_family: template.font_family
      })
    }
  }

  onBackgroundSetting = (background) => {
    this.setState({background_id: background.id})
    console.log(this.state.bg_color)
    var bg_color_t = this.state.bg_color
    bg_color_t.alpha = "0";
    this.setState({bg_color: bg_color_t})
    this.setState({
      img: background.img,
      text_color: this.rgbaStringtoHsb(rgbString(this.hexToRgba(background.text_color,1)))
    })
  }

  onSecGoal = () => {
    this.setState({is_sec_goal: this.state.is_sec_goal==1 ? 0 : 1})
  }
  onCurrency = (value) => {
    let symbolbyCdoe = country_cur_data.filter(item => item.code == value)
    this.setState({currency: value})
    this.setState({cur_symbol: symbolbyCdoe[0].symbol})
  }
  onAutoCurrency = (value) => {
    if(this.state.is_auto_cur == 'off'){
      getShopInfo().then(data => {
        var cur_symbol_item = country_cur_data.filter(item => item.code == data)
        this.setState({currency: data,cur_symbol: cur_symbol_item[0].symbol})
      })
    }
    this.setState({is_auto_cur: this.state.is_auto_cur == 'on'? 'off' : 'on'})
  }
  onFont = (font) => {
    this.setState({font_family: font.name})
  }
}
export default FreeShippingBar;