import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3b64',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  profileCard: {
    backgroundColor: '#2e5481',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '90%',
    minHeight: 500,
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginVertical: 10,
    color: '#fff',
  },
  flower: {
    color: '#ff69b4',
  },
  stars: {
    marginBottom: 10,
  },
  starsText: {
    color: 'gold',
    fontSize: 16,
  },
  description: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
    fontSize: 14,
    maxHeight: 300,
    marginVertical: 10,
    color: '#000',
  },
  descriptionText: {
    color: '#000',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  logoutButton: {
    marginTop: 10,
  },
  logoutText: {
    color: 'red',
    fontSize: 16,
  },
});

export default styles;
