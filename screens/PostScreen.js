import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    Dimensions
} from 'react-native';

class PostScreen extends React.Component {
    render() {
        const { post } = this.props.navigation.state.params;
        const imageWidth = Dimensions.get('window').width;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image
                        source={{ uri: post.imageUrl }}
                        style={{ width: imageWidth, height: imageWidth }}
                        resizeMode="cover"
                    />
                    <Text>{post.content}</Text>
                </ScrollView>
                <View style={styles.metaBox}>
                    <Text style={{flex: 8}}>{post.author}</Text>
                    <Text style={{flex: 1}}>{post.comments}</Text>
                    <Text style={{flex: 1}}>{post.viewed}</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    metaBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default PostScreen;