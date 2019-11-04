import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: colors.slateblue,
    shadowColor: colors.danger,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
  },
  title: {
    color: colors.secundary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
  },
});

export default styles;
