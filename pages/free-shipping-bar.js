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
  } from '@shopify/polaris';
  
  class FreeShippingBar extends React.Component {
    state = {
        name: 'My first free shipping bar',
        goal: '100',
    };
  
    render() {
      const { name, goal } = this.state;

      return (
         <Page>
          <Layout>
            <Layout.AnnotatedSection
              title="Content Configuration"
              description="This is a content configuration panel"
            >
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField
                      value={name}
                      onChange={this.handleChange('name')}
                      label="Name"
                      type="name"
                    />
                    <TextField
                      value={goal}
                      onChange={this.handleChange('goal')}
                      label="Free Shipping Goal"
                      type="goal"
                    />
                    <Stack distribution="trailing">
                      <Button primary submit>
                        Save
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      );
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