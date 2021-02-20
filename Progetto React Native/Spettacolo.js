import React, { Component } from 'react';
import {Text, Alert, View, ActivityIndicator, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

import { getArticles } from './News';
import DataItem from './DataItem'

export default class General extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      refreshing: false,
    }
  }

  componentDidMount() {
    getArticles('entertainment').then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Ops! Qualcosa è andato storto...');
    }
    )
  }

  _onRefresh() {
    this.setState({refreshing: true});
    getArticles('entertainment').then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {

    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={styles.attesa}>Attendi...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return (
            <DataItem data={item}/>
          )
        }}
        />
    )

    return (
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        <Content>
          {view}
        </Content>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  attesa: {
    marginLeft: 20,
  }
})
