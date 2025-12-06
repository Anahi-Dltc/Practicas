import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { Pressable } from "@/components/ui/pressable";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { db } from "@/firebaseConfig";
import { ref, onValue, update, remove } from "firebase/database";

export default function Aye() {
    const [usuarios, setUsuarios] = useState([]);
    const [selectedId, setSelectedId] = useState("");

    const [nombre, setNombre] = useState("");
    const [primer, setPrimer] = useState("");
    const [segundo, setSegundo] = useState("");
    const [evento, setEvento] = useState("");
    const [tipo, setTipo] = useState("");
    const [lugar, setLugar] = useState("");

    const [editable, setEditable] = useState(false);

    useEffect(() => {
        const usersRef = ref(db, "eventos");
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val() || {};
            const lista = Object.keys(data).map((id) => ({
                id,
                ...data[id],
            }));
            setUsuarios(lista);
        });
    }, []);

    function cargarUsuario(id) {
        setSelectedId(id);
        setEditable(false);

        const u = usuarios.find((x) => x.id === id);
        if (!u) return;

        setNombre(u.nombre || "");
        setPrimer(u.primerapellido || "");
        setSegundo(u.segundoapellido || "");
        setEvento(u.NameEvento || "");
        setTipo(u.tipoevento || "");
        setLugar(u.lugar || "");
    }

    function guardarCambios() {
        if (!selectedId) return alert("Seleccione un cliente");

        update(ref(db, "eventos/" + selectedId), {
            nombre,
            primerApellido: primer,
            segundoApellido: segundo,
            NameEvento: evento,
            tipoevento: tipo,
            lugar
        })
            .then(() => alert("Datos actualizados"))
            .catch((err) => alert(err));
    }

    function eliminar() {
        if (!selectedId) return alert("Seleccione un cliente");

        remove(ref(db, "eventos/" + selectedId))
            .then(() => {
                alert("Eliminado");
                setSelectedId("");
                setNombre("");
                setPrimer("");
                setSegundo("");
                setEvento("");
                setTipo("");
                setLugar("");
            })
            .catch((err) => alert(err));
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ padding: 20 }}>

                <Text style={styles.title}>Evento</Text>

                <Text style={styles.label}>Seleccionar Cliente</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedId}
                        onValueChange={(val) => cargarUsuario(val)}
                    >
                        <Picker.Item label="Seleccione un cliente" value="" />
                        {usuarios.map((u) => (
                            <Picker.Item key={u.id} label={u.nombre} value={u.id} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.fieldBox}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        value={nombre}
                        editable={editable}
                        onChangeText={setNombre}
                        style={[styles.input, !editable && styles.disabled]}
                    />
                </View>

                <View style={styles.fieldBox}>
                    <Text style={styles.label}>Primer apellido</Text>
                    <TextInput
                        value={primer}
                        editable={editable}
                        onChangeText={setPrimer}
                        style={[styles.input, !editable && styles.disabled]}
                    />
                </View>

                <View style={styles.fieldBox}>
                    <Text style={styles.label}>Segundo apellido</Text>
                    <TextInput
                        value={segundo}
                        editable={editable}
                        onChangeText={setSegundo}
                        style={[styles.input, !editable && styles.disabled]}
                    />
                </View>

                <View style={styles.fieldBox}>
                    <Text style={styles.label}>Nombre del evento</Text>
                    <TextInput
                        value={evento}
                        editable={editable}
                        onChangeText={setEvento}
                        style={[styles.input, !editable && styles.disabled]}
                    />
                </View>

                <View style={styles.fieldBox}>
                    <Text style={styles.label}>Tipo de evento</Text>
                    <TextInput
                        value={tipo}
                        editable={editable}
                        onChangeText={setTipo}
                        style={[styles.input, !editable && styles.disabled]}
                    />
                </View>

                <View style={styles.fieldBox}>
                    <Text style={styles.label}>Lugar</Text>
                    <TextInput
                        value={lugar}
                        editable={editable}
                        onChangeText={setLugar}
                        style={[styles.input, !editable && styles.disabled]}
                    />
                </View>

                <View style={styles.buttonsRow}>

                    <Pressable style={styles.btn} onPress={() => setEditable(true)}>
                        <AntDesign name="edit" size={20} color="white" />
                        <Text style={styles.btnText}>Editar</Text>
                    </Pressable>

                    <Pressable style={styles.btn} onPress={guardarCambios}>
                        <AntDesign name="save" size={20} color="white" />
                        <Text style={styles.btnText}>Guardar</Text>
                    </Pressable>

                    <Pressable style={[styles.btn, { backgroundColor: "#8b0000" }]} onPress={eliminar}>
                        <Feather name="x-circle" size={20} color="white" />
                        <Text style={styles.btnText}>Eliminar</Text>
                    </Pressable>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24, fontWeight: "bold", marginBottom: 20
    },
    label: {
        fontSize: 16, marginBottom: 5
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#f1f1f1",
        marginBottom: 20
    },
    fieldBox: {
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
        backgroundColor: "white"
    },
    disabled: {
        backgroundColor: "#dcdcdc"
    },
    buttonsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25
    },
    btn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2a4ba0",
        padding: 12,
        borderRadius: 10
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        marginLeft: 8
    }
});
