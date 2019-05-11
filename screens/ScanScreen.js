import React from 'react';
//import BarcodeScanner from 'react-native-barcodescanner';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';

export default class ScanScreen extends React.Component{
    state = {
        hasCameraPermission: null,
        scanned: false,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

      render() {
        const { hasCameraPermission, scanned } = this.state;
    
        if (hasCameraPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        }
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
    
            {scanned && (
              <Button
                title={'Tap to Scan Again'}
                onPress={() => this.setState({ scanned: false })}
              />
            )}
          </View>
        );
      }

      handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };
}