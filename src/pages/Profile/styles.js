import { StyleSheet } from 'react-native';

const COLORS = {
  background: '#005B96',
  white: '#fff',
  gold: '#FFD700',
  blueBody: '#fff',
  buttonBackground: '#003F7F',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  backgroundWrapper: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    height: 175,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  profileImage: {
    top: 150,
    right: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.white,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
    left: 20,
    justifyContent: 'center',
  },
  name: {
    top: 225,
    right: 150,
    fontSize: 20,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  profession: {
    top: 225,
    right: 150,
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 18,
    color: COLORS.white,
  },
  menuButton: {
    position: 'absolute',
    top: 200,
    left: 310,
    padding: 10,
    borderRadius: 20,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default styles;
