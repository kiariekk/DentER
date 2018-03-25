import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Content,
  Card,
  CardItem,
  Text,
  Separator
} from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./styles";
export interface Props {
  navigation: any;
  onRefresh: Function;
  submissionList: any;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class Submissions extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(resetAction)}
            >
              <Icon name="md-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>Survey Submissions</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.props.onRefresh()}>
              <Icon name="md-refresh" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <Separator bordered>
              <Text>PATIENT SUBMISSIONS</Text>
            </Separator>
            <CardItem
              button
              onPress={() => {
                this.props.navigation.navigate("SubmissionDetails");
              }}
            >
              <Icon style={{ color: "red" }} name="md-notifications" />
              <Body>
                <Text>Liam Kent</Text>
              </Body>
              <Right>
                <Text note>May 31, 2011</Text>
              </Right>
            </CardItem>
            <CardItem
              button
              onPress={() => {
                this.props.navigation.navigate("SubmissionDetails");
              }}
            >
              <Icon active style={{ color: "lightgray" }} name="md-eye" />
              <Body>
                <Text>Larry David</Text>
              </Body>
              <Right>
                <Text note>April 4, 2011</Text>
              </Right>
            </CardItem>

            {this.props.submissionList.map((item, i) => (
              <CardItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("SubmissionDetails", {
                    submission: { item }
                  })
                }
              >
                {item.hasSeen ? (
                  <Icon style={{ color: "lightgray" }} name="md-eye" />
                ) : (
                  <Icon style={{ color: "red" }} name="md-notifications" />
                )}

                <Body>
                  <Text>{item.userId}</Text>
                </Body>
                <Right>
                  <Text note>
                    {/* Remove last bits of date from new Date() */}
                    {new Date(item.submissionDate).toString().slice(0, -23)}
                  </Text>
                </Right>
              </CardItem>
            ))}
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Submissions;
