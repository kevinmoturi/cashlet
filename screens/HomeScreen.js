import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Toast } from 'native-base';

class HomeScreen extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.heading}> Afternoon Jo </Text>
                        <Text style={styles.subheading}> Here's the latest </Text>
                        <Text style={styles.priceText}> KES 42,000</Text>
                        <Text style={styles.subheading}> Total Funds </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.text}> Your Goals </Text>
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <View>
                                    <Text style={styles.cardContentHeading}>Goal 1</Text>
                                    <Text style={styles.cardContentSubHeading}>KES 12,000</Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Finish Goal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardRightContent}>
                                <Icon name='keyboard-arrow-right' color="#485a7a" size={24} />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardContent}>
                                <View>
                                    <Text style={styles.cardContentHeading}>Goal 2</Text>
                                    <Text style={styles.cardContentSubHeading}>KES 12,000</Text>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Finish Goal</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.cardRightContent}>
                                <Icon name='keyboard-arrow-right' color="#485a7a" size={24} />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.snackbarButtonWrapper} activeOpacity={0.6} onPress={() => Toast.show({ title: `This is an in-app notification snackbar to ${"\n"} show to the user when they perform an ${"\n"} action. Clicking it should change the next`, duration: 5000, isClosable: true, placement: "top", buttonText: 'Undo', style: { backgroundColor: '#e62180', fontSize: 16 } })}>
                            <View style={styles.snackbarButton}>
                                <Text style={styles.snackbarButtonText}>Show Snackbar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#485a7a',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 10
    },
    heading: {
        fontSize: 30,
        color: "#fff"
    },
    subheading: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 10
    },
    priceText: {
        fontSize: 30,
        color: "#01e576",
        textTransform: 'uppercase'
    },
    content: {
        backgroundColor: '#f8f9ff',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#f8f9ff',
        borderWidth: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'relative'
    },
    text: {
        color: '#485a7a',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
        elevation: 10,
        shadowColor: '#757575',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0'
    },
    cardContentHeading: {
        color: '#485a7a',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    cardContentSubHeading: {
        color: '#bdbdbd',
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    cardRightContent: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#01e576',
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#01e576'
    },
    buttonText: {
        color: '#fff',
        textTransform: 'capitalize'
    },
    snackbarButtonWrapper: {
        position: 'absolute',
        bottom: 40,
        width: '100%',
        alignSelf: 'center',
    },
    snackbarButton: {
        flex: 1,
        backgroundColor: "#01e576",
        borderWidth: 3,
        borderColor: '#01e576',
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    snackbarButtonText: {
        color: '#fff',
        fontSize: 16
    }
});

export default HomeScreen;
