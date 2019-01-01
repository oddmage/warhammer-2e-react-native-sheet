import {
  Platform,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '50%',
    height: 40
  },
  inputBox: {
    minWidth: '25%',
    flexGrow: 1
  },
  inputBoxWide: {
    fontSize: 14,
    width: '100%',
    flexGrow: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
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
  tabOrderLabel: {
    textAlign: 'center',
    textAlignVertical : 'center',
    color: '#333333',
    padding: 5,
    fontSize: 24
  },
  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },

      android: {
        paddingHorizontal: 0,
      }
    })
  },
  statLabel: {
    fontSize: 16,
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