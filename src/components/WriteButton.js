import { Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GHOSTWHITE, PRIMARY } from '../colors';
import { useRecoilState } from 'recoil';
import { dateState } from '../Atom';

export const ButtonTypes = {
  TODO: 'TO-DO',
  DIARY: 'DIARY',
};

const WriteButton = ({ title, onPress }) => {
  const [date, setDate] = useRecoilState(dateState);

  return (
    <Pressable
      onPress={() => {
        console.log(date);
      }}
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: GHOSTWHITE.GDARK },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

WriteButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 60,
    paddingVertical: 15,
    marginHorizontal: 6,
    flexDirection: 'row',
    backgroundColor: PRIMARY.BUTTON,
    width: 180,
  },
  title: {
    color: BLACK,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default WriteButton;
