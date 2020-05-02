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
  RangeSlider
} from '@shopify/polaris';
import {  
  hsbToRgb,
  rgbToHsb,
  rgbString
} from '@shopify/polaris';


//import { autobind } from "@shopify/javascript-utilities/decorators";

import fsbStyles from './styles/free-shipping-bar.module.css';
import { LoneAnonymousOperationRule } from 'graphql';
import { countries as countryOptions } from "./datas/countries";

class FreeShippingBar extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        country_options: countryOptions,
        bars: [
            { id: 1, name: 'My first shipping bar 1',active:0 },
            { id: 2, name: 'My first shipping bar 2',active:1 },
        ],
        templates: [
          { id: 1, name: 'My first shipping template 1', img: 'template1.png' },
          { id: 2, name: 'My first shipping template 2', img: 'template1.png' },
          { id: 3, name: 'My first shipping template 2', img: 'template1.png' },
          { id: 4, name: 'My first shipping template 2', img: 'template1.png' },
          { id: 5, name: 'My first shipping template 2', img: 'template1.png' },
          { id: 6, name: 'My first shipping template 2', img: 'template1.png' },
        ],
        position_options : [
            {label: 'Top bar pushes down the rest of the page', value: 'top_push_v1'},
            {label: 'Top bar pushes down the rest of the page (always visible while scrolling)', value: 'top_push_sticky_v1'},
            {label: 'Top bar overlaps top of the page', value: 'top_cover_nonsticky'},
            {label: ' Top bar overlaps top of the page (always visible while scrolling)', value: 'top_cover'},
            {label: 'Bottom bar overlaps bottom of the page (always visible while scrolling)', value: 'bottom_cover'},
            {label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme.', value: 'inserted'},
        ],
        currencies : [
          {label: 'United states - USD', value: '$'},
          {label: 'Netherland', value: 'nzd'}
        ],
        name: 'My first free shipping bar',
        goal: '100',
        goal_two: '150',
        init_msg_start: 'Free shipping for orders over',
        init_msg_end: '',
        goal_msg: "Congratulations! You've got free shipping",
        progress_msg_start: 'Only',
        progress_msg_end: ' away from free shipping',
        link_opt: 'off',
        link_url: 'https://apps.shopify.com/partners/me',
        is_link_new: 0,
        is_close_btn: 'no',
        position: 'top_push_sticky_v1',
        currency: 'nzd',
        cur_symbol: 'nzd',
        is_auto_cur: 'on',
        bg_color: ({
          hue: 300,
          brightness: 1,
          saturation: 0.7
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

        bg_color_opacity: 0.5,
        font_size: 14,
        padding: 0,
        disp_after: -1,
        delay_before: 0,
        time_fade: 0,
        display_options : [
          {label: 'All pages', value: 'all'},
          {label: 'Homepage only', value: 'home'},
          {label: "Only on Page with URL (Copy and Paste the URL below)", value: 'url'},
          {label: 'All pages', value: 'keyword'},
        ],
        display_page: 'home',
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
          {label: 'Always Display', value: 'yes'},
          {label: 'Only display within the giving period of time', value: 'no'}
        ],
        schedule: 'yes',
        custom_code:''
    };
  }
  render() {
    const { name, goal,goal_two, init_msg_start, init_msg_end, progress_msg_start, progress_msg_end, goal_msg, link_opt, link_url,is_link_new, is_close_btn, position, position_options, currencies, currency,cur_symbol,is_auto_cur, bg_color,bg_popoverActive,text_popoverActive, special_popoverActive, text_color, special_color, bg_color_opacity, font_size, padding, disp_after, delay_before, time_fade,display_page,exclude_page,dev_target, display_options,exclude_options, dev_target_options, schedule_options, schedule,custom_code } = this.state;

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
                    <Button primary>Create New Bar</Button>
                  </Stack.Item>
                </Stack>
                <div className="Polaris-DataTable">
                  <div className="Polaris-DataTable__ScrollContainer">
                    <table id='bars' className="Polaris-DataTable__Table"> 
                      <thead>
                        <tr>
                          <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header">Name</th>
                          <th className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                          {this.renderDashboardTableData()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Card>
            </Layout.Section>
          </Layout>
        <Form onSubmit={this.handleSubmit}>
          <Layout>
              <Layout.Section oneThird>
                      <Card title="Basic Template" sectioned>
                          <FormLayout>
                            <div className="fsb_tp_container">
                              <div className="fsbStyles.fsb_tb_content" style={{ 
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                textAlign: "center",
                                fontSize: "16px",
                                fontWeight: "normal",
                                lineheight: "20px",
                                padding: "12px",
                                fontFamily: "Helvetica"
                                }}  >
                                      Bold and Clear
                            </div>
                            </div>
                            <div className="fsb_tp_container">
                              <div className="fsb_tb_content" style={{ 
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                textAlign: "center",
                                fontSize: "16px",
                                fontWeight: "normal",
                                lineheight: "20px",
                                padding: "12px",
                                fontFamily: "Helvetica"
                                }}  >
                                      Bold and Clear
                              </div>
                            </div>
                          </FormLayout>
                      </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                      <Card title="Prenium Template" sectioned>
                          <FormLayout>
                            <div className="fsb_tp_container">
                              <div className="fsbStyles.fsb_tb_content" style={{ 
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                textAlign: "center",
                                fontSize: "16px",
                                fontWeight: "normal",
                                lineheight: "20px",
                                padding: "12px",
                                fontFamily: "Helvetica"
                                }}  >
                                      Bold and Clear
                            </div>
                            </div>
                            <div className="fsb_tp_container">
                              <div className="fsb_tb_content" style={{ 
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                textAlign: "center",
                                fontSize: "16px",
                                fontWeight: "normal",
                                lineheight: "20px",
                                padding: "12px",
                                fontFamily: "Helvetica"
                                }}  >
                                      Bold and Clear
                              </div>
                            </div>
                          </FormLayout>
                      </Card>
              </Layout.Section>
          </Layout>
          <Layout>
              <Layout.Section>
                      <Card title="Preview" sectioned>
                          <FormLayout>
                            <div className="fsb_tp_container">
                              <div className="fsb_tb_content" style={{ 
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                backgroundColor: "rgb(30, 30, 32)",
                                color: "rgb(242, 202, 128)",
                                textAlign: "center",
                                fontSize: "16px",
                                fontWeight: "normal",
                                lineheight: "20px",
                                padding: "12px",
                                fontFamily: "Helvetica"
                                }}  >
                                      My first shipping bar1
                              </div>
                            </div>
                          </FormLayout>
                      </Card>
              </Layout.Section>
          </Layout>
          <Layout>
              <Layout.Section>
                      <Card title="Content Configuration" sectioned>
                          <FormLayout>
                          <TextField
                              value={name}
                              onChange={this.handleChange('name')}
                              label="Name: "
                              type="text"
                              helpText="For your own internal reference - only you can see it"
                            />
                            <FormLayout.Group>
                            <TextField
                              value={goal}
                              onChange={this.handleChange('goal')}
                              label="Free Shipping Goal: "
                              type="number"
                              helpText="If no minimum order value is required, please set goal to 0"
                            />
                            <Button primary>Add Secondary Goal</Button>
                            </FormLayout.Group>
                            <FormLayout.Group>
                            <TextField
                              value={goal_two}
                              onChange={this.handleChange('goal_two')}
                              label="Free Shipping Secondary Goal: "
                              type="number"
                              helpText="Secondary goal needs to be greater than the 1st free shipping goal"
                            />
                            <Button primary>Remove Secondary Goal</Button>
                            </FormLayout.Group>
                            <FormLayout.Group>
                            <TextField
                              value={init_msg_start}
                              onChange={this.handleChange('init_msg_start')}
                              label="Initial Message: "
                              type="text"
                              helpText="Display when cart is empty"
                            />
                            <div className="fsb_msg_price">$100</div>
                             <TextField
                              value={init_msg_end}
                              onChange={this.handleChange('init_msg_end')}
                              label=" "
                              type="text"
                            />
                            </FormLayout.Group>
                            <FormLayout.Group>
                            <TextField
                              value={progress_msg_start}
                              onChange={this.handleChange('progress_msg_start')}
                              label="Progress Message: "
                              type="text"
                              helpText="Displays when cart value is less than the goal"
                            />
                            <div className="fsb_msg_price">$99</div>
                             <TextField
                              value={progress_msg_end}
                              onChange={this.handleChange('progress_msg_end')}
                              label=" "
                              type="text"
                            />
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
                            <TextField
                              value={link_url}
                              onChange={this.handleChange('link_url')}
                              label="Link URL:"
                              type="text"
                              helpText="This address will be visited after clicking the bar"
                            />
                            <Checkbox
                              label="Open the link in a NEW tab when clicked"
                              checked={is_link_new}
                              onChange={this.handleChange('is_link_new')}
                            />
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
                      </Card>
              </Layout.Section>
          </Layout>
          <Layout>
            <Layout.Section>
              <Card title="Currency Configuration" sectioned>
                <FormLayout>
                    <Select
                      label="Currency:"
                      options={currencies}
                      onChange={this.handleChange('currency')}
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
                        {label: 'OFF', value: 'on'},
                        {label: 'ON', value: 'off'}
                      ]}
                      onChange={this.handleChange('is_auto_cur')}
                      value={is_auto_cur}
                      helpText="NOTE: If native Shopify multi-currencies is configured on your store, this Currency Configuration will be disabled. You can enable this if your website supports auto-currency detection. FSB auto-converts the goal value to the visitors' local currency"
                      />
                </FormLayout>
              </Card>
            </Layout.Section>
          </Layout>
          <Layout>
            <Layout.Section>
              <Card title="Style Configuration" sectioned>
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
                            onChange={this.handleColorChange_bg}
                            color={bg_color}
                            allowAlpha={false}
                          />
                        </Popover.Section>
                        <Popover.Section>
                          <TextField value={bg_rgbaColor} onChange={this.handleRgbChange_bg} />
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
                    <FormLayout.Group>
                      {/* <ColorPicker label="Background Color: " onChange={this.handleChange('bg_color')} color={bg_color} />
                      <ColorPicker onChange={this.handleChange('text_color')} color={text_color} />
                      <ColorPicker onChange={this.handleChange('special_color')} color={special_color} /> */}
                    </FormLayout.Group>
                    <RangeSlider
                      label="Background Color Opacity:"
                      value={bg_color_opacity}
                      min={0}
                      max={1}
                      step={0.1}
                      onChange={this.handleChange('bg_color_opacity')}
                      output
                    />
                    Background Images:
                    <FormLayout.Group>
                        <a href="" onClick="select_background_pic('img/bar_background/20170206_sales_01.png')">
                          <div style={{ margin: "10px 0", padding:"10px",textAlign: "center", fontSize:"16px", color:"#FFFFFF", fontFamily:'Roboto', background: "url('https://s3.amazonaws.com/lastsecondcoupon/img/bar_background/20170206_sales_01.png')"}}>Sales</div>
                        </a>
                        <a href="" onClick="select_background_pic('img/bar_background/20170206_sales_01.png')">
                          <div style={{ margin: "10px 0", padding:"10px",textAlign: "center", fontSize:"16px", color:"#FFFFFF", fontFamily:'Roboto', background: "url('https://s3.amazonaws.com/lastsecondcoupon/img/bar_background/20170206_sales_01.png')"}}>Sales</div>
                        </a>
                        <a href="" onClick="select_background_pic('img/bar_background/20170206_sales_01.png')">
                          <div style={{ margin: "10px 0", padding:"10px",textAlign: "center", fontSize:"16px", color:"#FFFFFF", fontFamily:'Roboto', background: "url('https://s3.amazonaws.com/lastsecondcoupon/img/bar_background/20170206_sales_01.png')"}}>Sales</div>
                        </a>
                    </FormLayout.Group>
                    Upload Background Image:
                    <input type="file" style={{marginBottom: "10px"}}></input>
                      
                </FormLayout>
                  <ButtonGroup>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button calssName="fsb_font_btn" primary>Helvetica</Button>
                    <Button calssName="fsb_font_btn">Lato</Button>
                    <Button  calssName="fsb_font_btn">Lato</Button>
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
                      type="number"
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
              </Card>
            </Layout.Section>
          </Layout>
          <Layout>
              <Layout.Section>
                <Card title="Targeting Configuration" sectioned>
                  <FormLayout>
                    <ChoiceList
                        title="Display on Page:"
                        choices={display_options}
                        selected={display_page}
                        onChange={this.handleChange('display_page')}
                      />
                      <ChoiceList
                        title="Exclude Page:"
                        choices={exclude_options}
                        selected={exclude_page}
                        onChange={this.handleChange('exclude_page')}
                      />
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
                  </FormLayout>
                </Card>
              </Layout.Section>
            </Layout>
            <Layout>
              <Layout.Section>
                <Card title="Custom Code Configuration" sectioned>
                  <TextField
                    label="Custom Code:"
                    value={custom_code}
                    onChange={this.handleChange('custom_code')}
                    multiline
                  />
                  <p>Horizontal Zoom: Good for displaying a pattern based background image</p>
                  <p>Vertical Scroll: A Background image scrolled vertically. Good for showing a product image.</p>
                </Card>
              </Layout.Section>
            </Layout>
          <Stack distribution="trailing">
              <Button>
                Cancel
              </Button>
              <Button primary submit>
                Save
              </Button>
          </Stack>
        </Form>
      </Page>
    );
  }
  renderDashboardTableData() {
    return this.state.bars.map((bar, index) => {
      const { id, name, active } = bar
      return (
          <tr className="Polaris-DataTable__TableRow" key={id}>
            <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
              <Stack>
                <Stack.Item>
                  <Badge status="success">Active</Badge>
                </Stack.Item>
                <Stack.Item>
                  {name}
                </Stack.Item>
              </Stack>
            </td>
            <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
              <Stack>
                <Button primary>Edit</Button>
                <Button>Duplicate</Button>
                <Button>Activate</Button>
              </Stack>
              </td>
          </tr>
      )
    })
  }
  handleSubmit = () => {
    this.setState({
      name: this.state.name,
      goal: this.state.goal
    });
    console.log('submission', this.state);
  };
  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

  //color picker functions
  //----bg_color----------
  handleColorChange_bg = (bg_color) => {
    this.setState({ bg_color });
  }

  handleRgbChange_bg = (value) => {
    const rgbValues = value.replace(/[^\d*.?\d*,]/g, "").split(",");
    const bg_color = rgbToHsb({
      red: rgbValues[0],
      green: rgbValues[1],
      blue: rgbValues[2]
    });
    this.setState({ bg_color });
  }

  handlePopoverClose_bg = () => {
    this.setState({ bg_popoverActive: false });
  }

  handlePopoverOpen_bg = () => {
    this.setState({ bg_popoverActive: true });
  }
  //   //----text_color----------
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
  



}
export default FreeShippingBar;