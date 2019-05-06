import React from 'react';
import {getStoreList } from '../../services/getStoreList'
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ListView
  } from 'react-native';

export class StoreListComponent extends React.Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(['Store 1', 'Store 2', this.props.data]),
        };
    }

    render() {
        
        return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => 
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <Image source={require('../../assets/storeimages/fat-face.png')} style={{ width: 60, height:60, resizeMode:'contain' }}>
                </Image>
            
            <Text>{rowData}</Text>
            </View>   
            }
          />
        );
      }

}


export default StoreListComponent