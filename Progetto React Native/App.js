import React, { Component, useState } from 'react';
import {Text, View, StyleSheet, StatusBar, TabHeading, ScrollView, RefreshControl} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab, Body, Button} from 'native-base';
import General from './General';
import Business from './Business';
import Salute from './Salute';
import Sport from './Sport';
import Spettacolo from './Spettacolo';

console.disableYellowBox = true;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  render() {
    return (
        <Container>
          <Header hasTabs style={styles.header}>
            <StatusBar barStyle="light-content" backgroundColor='#FF7D00'/>
            <Body>
              <Text style={styles.headerText}>NEWSROOM</Text>
            </Body>
          </Header>
          <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading={<TabHeading style={styles.tab}>
                   <Text style={styles.tabText}>General</Text>
                   </TabHeading>}>
              <General />
            </Tab>
            <Tab heading={<TabHeading style={styles.tab}>
                   <Text style={styles.tabText}>Business</Text>
                   </TabHeading>}>
              <Business />
            </Tab>
            <Tab heading={<TabHeading style={styles.tab}>
                   <Text style={styles.tabText}>Salute</Text>
                   </TabHeading>}>
              <Salute />
            </Tab>
            <Tab heading={<TabHeading style={styles.tab}>
                   <Text style={styles.tabText}>Sport</Text>
                   </TabHeading>}>
              <Sport />
            </Tab>
            <Tab heading={<TabHeading style={styles.tab}>
                   <Text style={styles.tabText}>Spettacolo</Text>
                   </TabHeading>}>
              <Spettacolo />
            </Tab>
          </Tabs>
        </Container>
    );
  }
}

const styles=StyleSheet.create ({
  header: {
    backgroundColor: '#FFAB3E',
  },
  headerText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  tab: {
    backgroundColor: '#FFAB3E'
  },
  tabText: {
    color: 'white',
    fontSize: 15
  }
})
