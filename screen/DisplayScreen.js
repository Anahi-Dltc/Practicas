import React from "react";
import { ScrollView, Image } from "react-native";

import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Divider } from "@/components/ui/divider";
import { Badge, BadgeText } from "@/components/ui/badge";

import { Toast, useToast } from "@/components/ui/toast";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

function Display() {
    const toast = useToast();

    const showSuccessToast = () => {
        toast.show({
            placement: "top",
            render: ({ id }) => (
                <Toast
                    nativeID={`toast-${id}`}
                    action="success"
                    variant="solid"
                    mt={20}
                    p={15}
                    borderRadius={12}
                    bg="#d8f5e0"
                >
                    <HStack space="md" alignItems="center">
                        <Ionicons name="checkmark-circle" size={26} color="green" />
                        <Text color="green"> ¡Gracias por comprar! </Text>
                    </HStack>
                </Toast>
            ),
        });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
            <HStack
                px={20}
                py={15}
                alignItems="center"
                space="md"
                style={{ backgroundColor: "white" }}
            >
                <MaterialIcons name="menu" size={28} />
                <Text size="xl" bold>Display</Text>
            </HStack>

            <Box p={20}>
                <Card size="md" variant="outline" p={15}>
                    <VStack space="sm">
                        <Image
                            source={{
                                uri:
                                    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
                            }}
                            style={{
                                width: "100%",
                                height: 230,
                                borderRadius: 12,
                            }}
                        />

                        <Text size="sm" color="#555">Fashion Clothing</Text>

                        <Heading size="lg">Cotton Kurta</Heading>

                        <Text size="sm" color="#555">
                            Floral embroidered notch neck thread work cotton kurta in white
                            and black.
                        </Text>

                        <VStack mt={10} space="md">
                            <Button action="primary" onPress={showSuccessToast}>
                                <ButtonText>Add to cart</ButtonText>
                            </Button>

                            <Button variant="outline">
                                <ButtonText>Wishlist</ButtonText>
                            </Button>
                        </VStack>
                    </VStack>
                </Card>
            </Box>

            <Box px={20} mb={40}>
                <Card size="md" variant="outline" p={20}>
                    <HStack justifyContent="space-between" mb={10}>
                        <Text bold>Pro</Text>
                        <Text bold>Size</Text>
                        <Text bold>Ava</Text>
                        <Text bold>ST</Text>
                    </HStack>

                    <Divider />

                    <HStack justifyContent="space-between" py={15} alignItems="center">
                        <Text>Vestido</Text>
                        <Text>M</Text>
                        <Text>300</Text>

                        <HStack space="sm" alignItems="center">
                            <Badge variant="solid" bg="#aa3b3bff" borderRadius={20}>
                                <BadgeText color="red">Sold Out</BadgeText>
                            </Badge>

                            <Ionicons name="cart-outline" size={22} color="black" />
                        </HStack>
                    </HStack>

                    <Divider />

                    <HStack justifyContent="space-between" py={15} alignItems="center">
                        <Text>Blusa</Text>
                        <Text>G</Text>
                        <Text>90</Text>

                        <HStack space="sm" alignItems="center">
                            <Badge variant="solid" bg="#ffeeee" borderRadius={20}>
                                <BadgeText color="red">Sold Out</BadgeText>
                            </Badge>

                            <Ionicons name="cart-outline" size={22} color="black" />
                        </HStack>
                    </HStack>

                    <Box mt={15} p={10} borderRadius={10} bg="#f4f4f4" alignItems="center">
                        <Text size="sm" color="#444">
                            Inventario terminado            </Text>
                    </Box>
                </Card>
            </Box>
        </ScrollView>
    );
}

export default Display;
