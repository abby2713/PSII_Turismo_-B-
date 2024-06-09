import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet, Text } from "react-native";

const MenuCard = ({title, icon, id, props}) => {
  return (
    <Pressable style={styles.itemContainer} onPress={() => props.navigation.navigate('MapView', { categoryId: id })}>
      <FontAwesomeIcon
        icon={icon}
        size={40}
        color="white"
      />
      <Text style={styles.itemText}>{title}</Text>
    </Pressable>
  );
}

export default MenuCard;

const styles = StyleSheet.create({
  itemContainer: {
    height: '20%',
    borderColor: 'rgba(46, 166, 53, 0.6)',
    borderWidth: 4,
    marginBottom: 10,
    borderRadius: 25,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
    itemText: {
    fontSize: 23, 
    color: 'white', 
  },
});
