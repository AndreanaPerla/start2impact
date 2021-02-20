import React, {Component} from 'react';
import {ListItem, Left, Thumbnail, Body, Right, Button} from 'native-base';
import { Text, StyleSheet , View, Linking} from 'react-native';
import {Icon} from 'react-native-elements'

export default class DataItem extends Component {

  constructor(props) {
    super(props);
    this.data= props.data;
  }

  render() {
    return(
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: this.data.urlToImage}} />
        </Left>
        <Body>
          <Text numberOfLines={2} style={styles.titolo}>{this.data.title}</Text>
          <Text note numberOfLines={3}>{this.data.description}</Text>
          <View style={styles.info}>
            <Text style={styles.fonte} note>{this.data.source.name}</Text>
            <Text note>{this.data.publishedAt}</Text>
          </View>
        </Body>
        <Right>
          <Button transparent>
            <Text style={styles.leggi} onPress={() => Linking.openURL(this.data.url)}>Leggi</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create ({
  titolo: {
    fontWeight: 'bold',
    fontSize: 15
  },
  leggi: {
    color: '#FF7D00',
    paddingLeft: 15
  },
  info: {
    paddingTop: 5
  },
  fonte: {
    fontStyle: 'italic'
  },
  share: {
    marginRight: 8
  }
})
