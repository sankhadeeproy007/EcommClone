import { Platform } from 'react-native';
export default styles = {
  container: {
    flex: 1,
  },
  topView: {
    height: (Platform.OS==='ios') ? 272 : 250,
    backgroundColor: '#2874F0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topIcon: {
    color: '#fff',
    fontSize: 156,
    marginTop: (Platform.OS==='ios') ? 22 : 0,
  },
  mt20: {
    marginTop: 20,
    position: 'relative'
  },
  insetButton: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  butttonIcon: {
    fontSize: (Platform.OS==='ios') ? 32 : 22
  },
  labelMargin: {
    marginLeft: -10
  },
  signInButton: {
    marginTop: 30,
    backgroundColor: '#FB641B',
    height: 45
  },
  forgotText: {
    fontSize: 14,
    color: '#2874F0',
    marginBottom: 5
  },
  signInText: {
    color: '#fff',
    fontSize: 17
  },
  footer: {
    height: (Platform.OS==='ios') ? 100 : 120,
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
    bottom: (Platform.OS==='ios') ? undefined : -16
  }
};
