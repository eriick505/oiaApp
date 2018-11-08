import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    KeyboardAvoidingView, 
    Alert, 
    TextInput, 
    Button, 
    ScrollView,
    TouchableOpacity, 
    ActivityIndicator } from 'react-native';
//import { connect } from 'react-redux';
import firebase from 'firebase';
import { messageErroCodeNewUser } from "../utils";

import { FormRow } from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import InputForm from '../components/InputForm';
import CustomButtom from '../components/CustomButtom';

//import { tryRegister, tryInsert } from "../actions";

export default class NewUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            msgError: "",
            email: "",
            password: "",
            passwordConfirm: "",
            birthDate: "",
            name: "",
            lastName: ""
        }

    }

    tryRegister({ email, password }) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                this.setState({ message: messageErroCodeNewUser(error.code) })
            });
    }

    tryInsert({ email, name, lastName, birthDate }) {

        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('user').child(user.uid).set({
                    name: name,
                    last_name: lastName,
                    birth_date: birthDate,
                    email: email
                })
                .catch((error) => {
                    this.setState({ message: messageErroCodeNewUser(error.code) })
                });
                Alert.alert("Bem-Vindo " + user.name + "!", "Registro efetuado com sucesso!");
                this.props.navigation.replace("HomePage");
            }
        })
    }

    changeTextInput(chave, valor) {
        this.setState({
            [chave]: valor
        });
    }

    register() {
        const { email, password, name, lastName, birthDate } = this.state;

        if (this.passwordConfirmed()) {
            this.tryRegister({ email, password })
                .then(
                    this.tryInsert({ email, name, lastName, birthDate })
                );
        } else {
            this.setState({ message: "Senhas não conferem" });
        }
    }

    passwordConfirmed() {
        const { password, passwordConfirm } = this.state;

        if (password === passwordConfirm) {
            return true;
        } else {
            return false;
        }
    }

    renderMessage() {
        const { message } = this.state;
        if (!message) {
            return null;
        }
        return (
            <View style={styles.errorMessage}>
                <Text>{message}</Text>
            </View>
        );
    }

    renderButton() {
        if (this.state.isLoading) {
            return <ActivityIndicator />;
        }
        return (
            <CustomButtom style={styles.button} onPress={() => this.register()} text='Cadastrar' />
        );
    }

    render() {
        return (
     <KeyboardAvoidingView behavior='padding'>       
        <ScrollView>
            <View style={styles.global}>
                <View style={styles.colorBackLogo}>
                    <Text style={styles.logo}>CADASTRE-SE</Text>
                </View>
                <View style={styles.containerPage}>
                 <View style={styles.containerRegister}>
                    
                    <View style={styles.session}>
                        <Text style={styles.labelSession}>Dados de login</Text>

                        <View style={styles.formContainer}>
                            <View style={styles.backIcon}>
                                <Icon name='email' color='#fff' size={26}/>
                            </View>
                            <InputForm 
                                placeholder='Email'
                                value={this.state.email}
                                onChangeText={value => { this.changeTextInput('email', value)} } />
                        </View>
                    
                        <View style={styles.formContainer}>
                            <View style={styles.backIcon}>
                                <Icon name='lock-open' color='#fff' size={26} />
                            </View>
                            <InputForm 
                                placeholder='Senha'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={value=> { this.changeTextInput('password', value)}} />
                        </View>

                        <View style={styles.formContainer}>
                            <View style={styles.backIcon}>
                                <Icon name='lock' color='#fff' size={26} />  
                            </View>
                            <InputForm 
                                placeholder='Confirme sua Senha'
                                secureTextEntry={true}
                                value={this.state.passwordConfirm}
                                onChangeText={value=> { this.changeTextInput('passwordConfirm', value)}} />
                        </View>
                        </View>


                         <View style={styles.session}>
                             <Text style={styles.labelSession}>Dados Pessoais</Text>
                         
                   
                        <View style={styles.formContainer}>
                            <View style={styles.backIcon}>
                                <Icon name='account' color='#fff' size={26} />
                            </View>
                            <InputForm 
                                placeholder='Nome Completo'
                                value={this.state.name}
                                onChangeText={value => { this.changeTextInput('name', value)} } />
                        </View>
                   
                        <View style={styles.formContainer}>
                            <View style={styles.backIcon}>
                                <Icon name='map-marker' color='#fff' size={26} />
                            </View>
                            <InputForm 
                                placeholder='Cidade'
                                value={this.state.lastName}
                                onChangeText={value => { this.changeTextInput('lastName', value)} } />
                        </View>
                    
                        <View style={styles.formContainer}>
                            <View style={styles.backIcon}>
                                <Icon name='deskphone' color='#fff' size={26} />
                            </View>
                            <InputForm 
                                placeholder='Telefone'
                                value={this.state.birthDate}
                                onChangeText={value => { this.changeTextInput('birthDate', value)} } />
                        </View>
                        </View>

                        <View style={styles.containerFooter}>
                            <View style={styles.spaceButtom}>
                                {this.renderButton()}
                                {this.renderMessage()}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
      );
    }
}

const styles = StyleSheet.create({
    global: {
        flex: 1,
        backgroundColor: '#fff',
    },
    colorBackLogo: {
        alignItems: 'center',
        backgroundColor: "#6F2B8F",
        paddingBottom: 10
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 35,
        color: 'white'
    },
    containerPage: {
        flexDirection: 'row',
    },
    containerRegister: {
        marginLeft: 5,
        marginRight: 5,
        alignSelf: "center",
        marginTop: 20,
        elevation: 1,
    },
    session: {
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#999999',
        paddingHorizontal: 10,
        paddingTop: 25,
        marginBottom: 18,
    },
    labelSession: {
        position: 'absolute',
        fontSize: 11,
        marginLeft: 5,
        paddingBottom: 10,
        color: '#727272'
    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 16, // distancia entre os inputs
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#999999',
    },
    backIcon: {
        backgroundColor: '#e1e1e1'
    },
    containerFooter: {
        backgroundColor: '#fff'     
    },
    spaceButtom: {
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#F5F5F5',
        borderColor: '#F5F5F5',
        borderWidth: 0.4,
        elevation: 3,
        width: 350
    }
});
