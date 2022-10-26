import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Icon,
  Search,
  Table,
  Label,
  Menu,
  Feed,
  List
  } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
    <br/>
     <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'><Search placeholder='Search Document...' /></Table.HeaderCell>
              </Table.Row>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nama Dokument</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell positive>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React Js</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
             </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column >
            <Feed size='large'>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label icon='pencil' />
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Saya suka pemograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>
                    David Troy added 2 new Image
                  </Feed.Summary>

                  <Feed.Extra images>
                    
                      <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt='gambar'/>
                      <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt='gambar' />
  
                  </Feed.Extra>

                  <Feed.Meta like='1 Like' />
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
             <List>
              <h3>Website Terkait</h3>
                <List.Item>
                 <List.Icon name='linkify' />
                 <List.Content><a href='.'> Google </a> </List.Content>
                </List.Item>

                <List.Item>
                 <List.Icon name='linkify' />
                 <List.Content><a href='.'> Facebook </a> </List.Content>
                </List.Item>

                <List.Item>
                 <List.Icon name='linkify' />
                 <List.Content><a href='.'> Semantik Ui </a> </List.Content>
                </List.Item>

                <List.Item>
                 <List.Icon name='linkify' />
                 <List.Content><a href='.'> Niomic </a> </List.Content>
                </List.Item>
                
                <List.Item>
                 <List.Icon name='linkify' />
                 <List.Content><a href='.'> React Js </a> </List.Content>
                </List.Item>
              </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      
    </div>
  );
}

export default App;
