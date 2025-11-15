import React from 'react';
import { View } from 'react-native';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from '@/components/ui/avatar';
import { Grid, GridItem } from '@/components/ui/grid';
import { Text } from '@/components/ui/text';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from '@/components/ui/image';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Icon, TrashIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';


function ProfileScreen() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <View style={{ marginTop: 50, alignItems: 'center' }}>
      <Avatar size="2xl">
        <AvatarFallbackText>Jane Doe</AvatarFallbackText>
        <AvatarImage
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
        <AvatarBadge />
      </Avatar>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 20 }}>Anahí De la Torre</Text>
      </View>
      <Grid style={{ marginTop: 20, alignItems: 'center', width: '80%' }}
        className="gap-4"
        _extra={{
          className: 'grid-cols-9',
        }}
      >
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-3',
          }}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <FontAwesome6 name="person" size={24} color="black" />
          <Text>Seguidos</Text>
        </GridItem>
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-3',
          }}
          style={{ justifyContent: 'center', alignItems: 'center' }}

        >
          <Fontisto name="persons" size={24} color="black" />
          <Text>Seguidores</Text>
        </GridItem>
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-3',
          }}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <MaterialCommunityIcons name="cards-heart" size={24} color="black" />
          <Text>Me gusta</Text>
        </GridItem>
      </Grid>

      <Grid
        className="gap-3"
        _extra={{
          className: 'grid-cols-8',
        }}
      >
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-4',
          }}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            size="xl"
            source={require("../Images/girasol.jpg")}
            alt="image"
          />
        </GridItem>
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-4',
          }}
        >
          <Image
            size="xl"
            source={require("../Images/paisaje.jpg")}
            alt="image"
          />
        </GridItem>
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-4',
          }}
        >
          <Grid
            className="gap-5"
            _extra={{
              className: 'grid-cols-2',
            }}
            style={{ justifyContent: 'center', alignItems: 'center' }}

          >
            <Image
              size="xl"
              source={require("../Images/paisaje2.jpg")}
              alt="image"
            />
          </Grid>
        </GridItem>
        <GridItem
          className="bg-background-50 p-3 rounded-md text-center"
          _extra={{
            className: 'col-span-4',
          }}
        >
          <Grid
            className="gap-5"
            _extra={{
              className: 'grid-cols-2',
            }}
          >
            <Image
              size="xl"
              source={require("../Images/paisaje3.jpg")}
              alt="image"
            />
          </Grid>
        </GridItem>
      </Grid>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Eliminar Blog</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}>
        <ModalBackdrop />
        <ModalContent className="max-w-[305px] items-center">
          <ModalHeader>
            <Box className="w-[56px] h-[56px] rounded-full bg-background-error items-center justify-center">
              <Icon as={TrashIcon} className="stroke-error-600" size="xl" />
            </Box>
          </ModalHeader>
          <ModalBody className="mt-0 mb-4">
            <Heading size="md" className="text-typography-950 mb-2 text-center">
              Eliminar el blog
            </Heading>
            <Text size="sm" className="text-typography-500 text-center">
              ¿Esta seguro de eliminar el blog?
            </Text>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button
              variant="outline"
              action="secondary"
              size="sm"
              onPress={() => {
                setShowModal(false);
              }}
              className="flex-grow"
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              size="sm"
              className="flex-grow"
            >
              <ButtonText>Eliminar</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View >
  );
}
export default ProfileScreen;