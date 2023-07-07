import React from 'react';
import {FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import initialData from './instagram-feed/data';

export default function App() {
    const renderArticleItem = ({item}) => (
        <View style={styles.articleContainer}>
            <Image source={item.image} style={styles.image}/>
            <Text>Name: {item.name}</Text>
            <Text>Likes: {item.likes}</Text>
            <Text>Comments: {item.comments}</Text>
        </View>
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            horizontal={false}
        >
            <FlatList
                data={initialData.articles}
                renderItem={renderArticleItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
            <StatusBar style="auto"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },
    image: {
        flex: 1,
        width: '90%',
        height: undefined,
        aspectRatio: 1,
    },
    articleContainer: {
        marginBottom: 10,
    },
});
