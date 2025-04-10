import { useState } from "react";
import { msg_title_sign, msg_phone_sign, msg_name_sign, msg_button_sign, msg_list_name, msg_list_phone } from "../utils/messages";
import { Alert, TextInput, Text, View, Button, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Dimensions } from 'react-native';

export default function App(){
    const [nome, setNome] = useState(""); //setNome é a função que altera o valor nome
    const [telefone, setTelefone] = useState("");
    const [Lista, setLista] = useState([]); //valor inicial é lista em branco

    function ReceberTextoNome(texto){ //recebe o texto que o usario esta digitando e coloca na caixinha
        setNome(texto);
    }
    
    function ReceberTextoTelefone(texto){
        setTelefone(texto);
    }

    function ArmazenarTextoDigitado(){ //armazena o valor sendo digitado pelo usuario na Lista
        if(nome.trim() === "" || telefone.trim() === ""){
            Alert.alert("Erro", "Campo vazio! Tente novamente.");
        } else {
            const cadastroExiste = Lista.some((item) => item.nome === nome && item.telefone === telefone);
            
            if(cadastroExiste) Alert.alert("Contato já existe!");
            
            else{
                const itemNovo = {nome, telefone};
                setLista([...Lista, itemNovo]);
                setNome("");
                setTelefone("");
            }
            
        }
    }


    return(
        <View style={styles.mainContainer}> {/*container do main*/}
            <View style={styles.cadastroContainer}> {/* container do cadastro */}
                    <Text style={styles.titulo}>{msg_title_sign}</Text> {/* mostrar titulo "cadastrar usuario"*/}

                    <View style={styles.linhaInput}>{/*container do nome*/}

                        <Text style={styles.label}>{msg_name_sign}</Text>  {/*mostrar "nome" antes da caixa*/}
                        <TextInput value={nome} onChangeText={ ReceberTextoNome } style={styles.caixaTextoContainer}/> {/*caixa de texto do nome*/}

                    </View>

                    <View style={styles.linhaInput}> {/* container do telefone*/}
                        <Text style={styles.label}>{msg_phone_sign}</Text>
                        <TextInput value={telefone} onChangeText={ReceberTextoTelefone} style={styles.caixaTextoContainer}/>
                    </View>

                <View style={styles.linhaInput}> {/*container do botao*/}
                        <Text style={styles.label}></Text> {/* vazio só pra alinhar com os outros */}
                        <TouchableOpacity style={styles.botaoContainer} onPress={ArmazenarTextoDigitado}>
                            <Text style={styles.textoBotao}>{msg_button_sign}</Text>
                         </TouchableOpacity>
                </View>

            <View style={styles.divisor}> {/*container da linha divisoria */}

            </View> {/*view do cadastro*/}

        {/*////////////////////////////////////////////////////*/}


                <View style={styles.listaContainer}> {/*container da lista*/}
                    <View style={styles.cabecalhoLista}> {/*container do titulo "nome" e "telefone" */}
                        <Text style={styles.tituloColuna}>{msg_list_name}</Text>
                        <Text style={styles.tituloColuna}>{msg_list_phone}</Text>
                    </View>

                    <ScrollView>
                        {Lista.map((item, index) => (
                            <View key={index} style={styles.itemLista}>
                                <Text style={styles.valorColuna}>{item.nome}</Text>
                                <Text style={styles.valorColuna}>{item.telefone}</Text>
                            </View>
                        ))}
                    </ScrollView>

                </View>

            </View>

        </View>

    );
}


    const styles = StyleSheet.create({
        mainContainer:{
            flex: 1,
            alignItems: "center",
            padding: '10%',
            backgroundColor: 'white'
        },

        cadastroContainer:{
            flex: 1,
            width: '100%',
            //paddingHorizontal: 10
        },

        titulo: {
            fontSize: 17,
            marginBottom: 5,
            fontWeight:'bold',
        },
        
        linhaInput: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 7,
        },

        label: {
            width: '30%',
            fontWeight: "500",
        },

   
        caixaTextoContainer:{
            flex: 1,
            borderWidth: 1,
            padding: 6,
            borderColor: 'black',
            marginTop: 5,
        },

        botaoContainer: {
            flex: 1,
            borderWidth: 1,
            borderColor: '#b0c4de',
            backgroundColor: '#e6e6fa',
            padding: 6,
        },

        textoBotao: {
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
          },


        divisor: {
            width: "100%",
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginVertical: 10,
            marginTop: 25
        },

        listaContainer: {
            maxHeight: '100%', // ou um valor fixo como 300
            flex: 1
        },
        

        cabecalhoLista:{
            flexDirection: "row",
            paddingVertical: 5,
        },

        tituloColuna:{
            flex: 1,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 15,
        },

        itemLista: {
            flexDirection: "row",
            paddingVertical: 5,
        },

        valorColuna:{
            flex: 1,
            textAlign: 'center',
        },


});
