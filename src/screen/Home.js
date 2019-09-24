import React, {Component, Fragment} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux'
import {getCategory} from '../Publics/Redux/Action/category'

import Icon from 'react-native-vector-icons/AntDesign';

import Carousel from '../components/carousel'
import Category from '../components/category'
import CardHome from '../components/cardHome'


class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount = async () =>{
        await this.props.dispatch(getCategory())
    }

    render(){
        return(
            <Fragment>
                <View style = {styles.header} >
                    <View style={{width:'60%',paddingRight:10}}>
                    <TextInput
                        style={{
                        borderRadius: 5,
                        padding: 10,
                        backgroundColor: 'white',
                        marginLeft: 3
                        }}
                        placeholder="Search.."
                    />
                    </View>
                    <View style={{width:'40%', flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={0.8} style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                            <Icon name='shoppingcart' size={28} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{flex:1,alignItems:'center',justifyContent:"center"}} onPress={() => this.props.navigation.navigate('Wishlist')}>
                            <Icon name="heart" size={25} color="#fff"/>
                        </TouchableOpacity>
                    </View>
                </View>
                
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:0}}>
                      
                        <View>
                            <Carousel/>
                        </View>
                            
                        <View style={{marginTop:15}}>
                            <Text style={styles.title}>Kategori</Text>
                            <Category data={this.props.category}/>
                        </View>

                        <View style={{marginTop:15}}>
                            <Text style={styles.title}>Penawaran Terbaru</Text>

                            <CardHome/>
                        </View>
                      
               
                    </ScrollView>

                    {/* <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.5} style={{flex:1,alignItems:'center'}}>
                            <Icon name="home" size={22} color="#fabc0c"/>
                            <Text style={{color: '#fabc0c', fontSize:13}}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{flex:1,alignItems:'center'}}>
                            <Icon name="mail" size={22} color="grey"/>
                            <Text style={{color: 'grey', fontSize:13}}>Request</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{flex:1,alignItems:'center'}} onPress= {() => this.props.navigation.navigate('Profile')}>
                            <Icon name="user" size={22} color="grey"/>
                            <Text style={{color: 'grey', fontSize:13}}>Akun</Text>
                        </TouchableOpacity>
                    </View> */}
            </Fragment>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F5D372',
        width: '100%',
        height: 60,
        elevation: 5,
        padding: 10,
        flexDirection: 'row'
    },

    title: {
        fontSize:20,
        width: '100%',
        padding: 12,
        fontWeight: '700',
        color: 'black'
    },

    footer :{
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
        padding: 10,
        elevation: 20
    }

})

const mapStateToProps = state => {
    return{
        category:state.category.categoryData
    }
}

export default connect (mapStateToProps) (Home)