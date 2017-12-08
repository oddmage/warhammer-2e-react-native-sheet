import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '50%',
    height: 30
  },
  inputBox: {
    minWidth: '25%',
    flexGrow: 1
  },
  inputBoxWide: {
    width: '100%',
    flexGrow: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  subContainer: {
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  inputBoxLabel: {
    textAlign: 'center',
    textAlignVertical : 'center',
    color: '#333333'
  },
  statLabel: {
    textAlign: 'center',
    textAlignVertical : 'center',
    color: 'white',
    backgroundColor: 'black',
    width: '100%'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalButton: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});


export default styles;