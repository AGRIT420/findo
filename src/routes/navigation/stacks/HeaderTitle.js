import React from "react";
import { StyleSheet, Text } from 'react-native';
import { colors } from "../../../theme"; 

const HeaderTitle = () => <Text style={styles.header}></Text>

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Oxygen-Light',
        fontSize: 20,
        color: colors.black,
    },
})

export default HeaderTitle;