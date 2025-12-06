import { View, Text, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Pressable } from "@/components/ui/pressable";
import React, { useState } from "react";
import { ref, push, set } from "firebase/database";
import { db } from "@/firebaseConfig";

function Crud() {
    const [nombre, setNombre] = useState("");
    const [primerapellido, setPrimer] = useState("");
    const [segundoapellido, setSegundo] = useState("");
    const [NameEvento, setEvento] = useState("");
    const [tipoevento, setTipo] = useState("");
    const [lugar, setLugar] = useState("");

    function create() {
        const eventoRef = push(ref(db, "eventos"));

        set(eventoRef, {
            nombre,
            primerapellido,
            segundoapellido,
            NameEvento,
            tipoevento,
            lugar
        })
            .then(() => alert("Evento guardado exitosamente"))
            .catch((error) => alert(error));
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
                    Crear Evento
                </Text>

                <VStack space="lg">

                    <View>
                        <Text>Nombre</Text>
                        <TextInput
                            value={nombre}
                            onChangeText={(txt) => setNombre(txt)}
                            placeholder="Nombre del cliente"
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 8,
                                marginTop: 5,
                            }}
                        />
                    </View>

                    <View>
                        <Text>Primer apellido</Text>
                        <TextInput
                            value={primerapellido}
                            onChangeText={(txt) => setPrimer(txt)}
                            placeholder="Primer apellido del cliente"
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 8,
                                marginTop: 5,
                            }}
                        />
                    </View>

                    <View>
                        <Text>Segundo apellido</Text>
                        <TextInput
                            value={segundoapellido}
                            onChangeText={(txt) => setSegundo(txt)}
                            placeholder="Segundo apellido del cliente"
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 8,
                                marginTop: 5,
                            }}
                        />
                    </View>

                    <View>
                        <Text>Nombre del evento</Text>
                        <TextInput
                            value={NameEvento}
                            onChangeText={(txt) => setEvento(txt)}
                            placeholder="Nombre del evento"
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 8,
                                marginTop: 5,
                            }}
                        />
                    </View>

                    <View>
                        <Text>Tipo de evento</Text>
                        <TextInput
                            value={tipoevento}
                            onChangeText={(txt) => setTipo(txt)}
                            placeholder="Tipo de evento"
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 8,
                                marginTop: 5,
                            }}
                        />
                    </View>

                    <View>
                        <Text>Lugar</Text>
                        <TextInput
                            value={lugar}
                            onChangeText={(txt) => setLugar(txt)}
                            placeholder="Lugar"
                            style={{
                                borderWidth: 1,
                                borderColor: "#ccc",
                                padding: 10,
                                borderRadius: 8,
                                marginTop: 5,
                            }}
                        />
                    </View>

                    <Pressable
                        style={{
                            backgroundColor: "#9ea3acff",
                            padding: 12,
                            borderRadius: 10,
                            alignItems: "center",
                            marginTop: 15,
                        }}
                        onPress={create}
                    >
                        <Text style={{ color: "white", fontWeight: "bold" }}>Guardar</Text>
                    </Pressable>

                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Crud;
