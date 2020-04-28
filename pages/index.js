import {
  Button,
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
  ChoiceList

} from '@shopify/polaris';

import fsbStyles from './styles/free-shipping-bar.module.css';
import { LoneAnonymousOperationRule } from 'graphql';

class FreeShippingBar extends React.Component {
  state = {
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
      name: 'My first free shipping bar',
      goal: '100',
      goal_two: '150',
      init_msg_start: 'Free shipping for orders over',
      init_msg_end: '',
      goal_msg: "Congratulations! You've got free shipping",
      progress_msg_start: 'Only',
      progress_msg_end: ' away from free shipping',
      link_opt: 0,
      link_url: 'https://apps.shopify.com/partners/me',
      link_new: 0,
      close_btn: 0,
      position: 'top_push_sticky_v1'

  };

  render() {
    const { name, goal,goal_two, init_msg_start, init_msg_end, progress_msg_start, progress_msg_end, goal_msg, link_opt, link_url,link_new, close_btn, position } = this.state;

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
                                {label: 'ON', value: 1},
                                {label: 'OFF', value: 0},
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
                              checked={link_new}
                              onChange={this.handleChange('link_new')}
                            />
                            <Select
                              label="Include Close Button:"
                              options={[
                                {label: 'YES', value: 1},
                                {label: 'NO', value: 0},
                              ]}
                              onChange={this.handleChange('close_btn')}
                              value={close_btn}
                              helpText='Places an "x" button on the bar so that users can close it manually'
                            />
                            <ChoiceList
                              title="Select a Display Position:"
                              choices={position_options}
                              selected={position}
                              onChange={position}
                            />
                          </FormLayout>
                      </Card>
              </Layout.Section>
          </Layout>
          <Layout>
            <Layout.Section>
              <Card title="Currency Configuration" sectioned>
                <FormLayout>

                </FormLayout>
              </Card>
            </Layout.Section>
          </Layout>
          <Stack distribution="trailing">
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
      const { id, name } = bar
      return (
          <tr className="Polaris-DataTable__TableRow" key={id}>
            <td className="Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop">
              <Stack>
                <Badge status="success">Active</Badge>
                {name}
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
}
export default FreeShippingBar;