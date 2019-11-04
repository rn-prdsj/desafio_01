import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
    padding: 20,
    backgroundColor: colors.white,
    shadowColor: colors.danger,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
  },
  title: {
    color: colors.secundary,
    fontSize: 19,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  autor: {
    color: colors.regular,
  },
  hr: {
    borderTopWidth: 1,
    borderColor: colors.lighter,
    marginTop: 10,
  },
  description: {
    color: colors.dark,
    marginTop: 10,
    lineHeight: 19,
  },
});

export default styles;
