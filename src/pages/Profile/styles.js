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
    justifyContent: 'center',
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  name: {
    top: 70,
    right: 90,
    fontSize: 28,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 24,
  },
  profession: {
    top: 65,
    right: 110,
    fontSize: 18,
    color: COLORS.white,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 18,
    color: COLORS.white,
  },
  stars: {
    top: 170,
    right: 30,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 2,
  },
  menuButton: {
    position: 'absolute',
    top: 200,
    left: 310,
    padding: 10,
    borderRadius: 20,
  },
  body: {
    backgroundColor: COLORS.blueBody,
    padding: 15,
    borderRadius: 25,
    marginHorizontal: 1,
    marginBottom: 0,
  },
  description: {
    fontSize: 14,
    color: COLORS.black,
    textAlign: 'justify',
    lineHeight: 18,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    marginTop: 10,
  },
  socialButton: {
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default styles;
