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
    ListView, 
    Dimensions,
    FlatList,
  } from 'react-native';

export class StoreListComponent extends React.Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
        dataSource: ds.cloneWithRows(['Store 1', 'Store 2', this.props.data, 'Store 3']),
        };
    }

    render() {
        
      return (
       
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={numColumns} />
      );  
      
      // return (
        //   <ListView
        //     dataSource={this.state.dataSource}
        //     renderRow={(rowData) => 
        //     <View style={{backgroundColor: '#fff', flex: 1}}>
        //         <Image source={require('../../assets/storeimages/fat-face.png')} style={{ width: 60, height:60, resizeMode:'contain' }}>
        //         </Image>
            
        //     <Text>{rowData}</Text>
        //     </View>   
        //     }
        //   />
        // );
      }

}


const data = [
  {id: '1', value: 'John Lewis'},
  {id: '2', value: 'Fat Face'},
  {id: '3', value: 'Foot Locker'},
  {id: '4', value: 'JD Sport'},
  {id: '5', value: 'Debenhams'},
  {id: '6', value: 'House of Fraser'},
];
const numColumns = 2;
const size = Dimensions.get('window').width/numColumns;
const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size,
  },
  item: {
    flex: 1,
    margin: 2,
    backgroundColor: 'lightblue',
    textAlign: 'center',
  }
});

// function Grid(props) {
//   return (
//     <FlatList
//       data={data}
//       renderItem={({item}) => (
//         <View style={styles.itemContainer}>
//           <Text style={styles.item}>{item.value}</Text>
//         </View>
//       )}
//       keyExtractor={item => item.id}
//       numColumns={numColumns} />
//   );
// }


export default StoreListComponent