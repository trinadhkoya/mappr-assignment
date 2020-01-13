import React, {PureComponent} from 'react';
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import {getReposByUserName} from "../rest";
import Divider from "../components/Divider";
import {color} from "../utilities";
import GithubRepoInfo from "./GithubRepoInfo";

class GithubRepoList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            error: false,
            dataSource: [],
        };
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(): void {
        this._loadGitRepos();
    }


    _loadGitRepos() {
        console.log("CLICKED");
        const {text, dataSource} = this.state;
        getReposByUserName(text).then((res) => {
            console.log(res.items);
            this.setState({dataSource: res.items})
        }).catch((err) => {
            this.setState({error:err})
        })
    }

    handleChange = (text) => {
        this.setState({text: text.nativeEvent.text});
        this._loadGitRepos();
    };

    _renderItemSeparator = () => {
        return <Divider style={{height:5}}/>;
    };

    render() {

        const {text,dataSource} = this.state;
        console.log(dataSource);

        let showErr = (
            this.state.error ?
                <Text>
                    {this.state.error}
                </Text> :
                <View/>
        );
        return (
            <View style={styles.main}>
                <TextInput
                    style={styles.searchInput}
                    onChange={this.handleChange}
                    value={text}
                />
                <FlatList
                    initialNumToRender={3}
                    showsVerticalScrollIndicator={false}
                    extraData={this.state}
                    data={dataSource}
                    numColumns={1}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={item => this._renderGitItem(item)}
                    ItemSeparatorComponent={this._renderItemSeparator}
                    legacyImplementation={true}
                    onEndReachedThreshold={0.2}
                />


                {showErr}
            </View>
        )
    }

    _renderGitItem({item}) {
        return <GithubRepoInfo item={item}/>
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.whitesmoke,
        marginVertical:20
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginHorizontal: 10,
        fontSize: 23,
        borderWidth: 1,
        borderColor: color.black,
        borderRadius: 8,
        color: 'white',
        marginBottom:10
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});
export default GithubRepoList;
