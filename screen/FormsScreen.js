import React,{useState} from 'react';
import { View } from 'react-native';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import {
  FormControl, FormControlLabel, FormControlLabelText,
  FormControlHelper, FormControlHelperText, FormControlError,
  FormControlErrorIcon, FormControlErrorText,
} from '@/components/ui/form-control';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import {
  Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel,
} from '@/components/ui/radio';
import {
  Slider, SliderTrack, SliderFilledTrack, SliderThumb,
} from '@/components/ui/slider';
import { Center } from '@/components/ui/center';
import {
  Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel,
} from '@/components/ui/checkbox';
import { HStack } from '@/components/ui/hstack';
import {
  Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal,
  SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator,
  SelectItem,
} from '@/components/ui/select';
// íconos (si no están instalados sigue los pasos más abajo)
import { ChevronDownIcon, AlertCircleIcon, CircleIcon, CheckIcon } from '@/components/ui/icon'
import { Switch } from '@/components/ui/switch';
import { Pressable } from '@/components/ui/pressable';
import { Link, LinkText } from '@/components/ui/link';
import { Icon } from '@/components/ui/icon';
import { ArrowUpRight } from 'lucide-react-native';

function Example() {
  const [selectedsal, setSelectedsal] = React.useState('Terraza');
  const [eventType, setEventType] = React.useState('XV');
  const [sliderValue, setSliderValue] = useState(1);
  const [values, setValues] = React.useState(['Eng']);

  return (
    <View  style={{ marginLeft: 15, marginTop: 10,marginRight: 25 }}>
      <FormControl  isRequired isInvalid>
        <FormControlLabel>
          <FormControlLabelText>Tipo de evento</FormControlLabelText>
        </FormControlLabel>

        <Select value={eventType} onValueChange={setEventType} defaultValue="XV">
          <SelectTrigger>
            <SelectInput placeholder="Seleccione una opcion" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="XV años" value="XV" />
              <SelectItem label="Boda" value="Boda" />
              <SelectItem label="Bautizo" value="Bautizo" />
              <SelectItem label="Baby Shower" value="Baby Shower" isDisabled={true} />
              <SelectItem label="Aniversario" value="Aniversario" />
            </SelectContent>
          </SelectPortal>
        </Select>
        <FormControlHelper >
          <FormControlHelperText >Seleccione solo una opcion</FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>Campo Obligatorio</FormControlErrorText>
        </FormControlError>
      </FormControl>

      <CheckboxGroup
        value={values}
        onChange={(keys) => {
          setValues(keys);
        }}
      >
        <FormControl>
          <VStack space="sm">
            <Heading size="sm" style={{marginTop: 10}}>Servicios</Heading>
            <Checkbox value='Banquete'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Banquete</CheckboxLabel>
            </Checkbox>
            <Checkbox value='Mobiliario'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Mobiliario</CheckboxLabel>
            </Checkbox>
            <Checkbox value='Música'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Música</CheckboxLabel>
            </Checkbox>
            <Checkbox value='Decoración'>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Decoración</CheckboxLabel>
            </Checkbox>
          </VStack>
        </FormControl>
      </CheckboxGroup>

      <VStack space="md">
        <Heading style={{marginTop: 20}}>Seleccione el tipo de salon</Heading>
        <RadioGroup value={selectedsal} onChange={setSelectedsal}>
          <VStack space="sm">
            {['Salon', 'Terraza', 'Hacienda'].map((sal) => (
              <Radio key={sal} value={sal}>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>{sal}</RadioLabel>
              </Radio>
            ))}
          </VStack>
        </RadioGroup>

        <Text style={{marginTop: 10}}className="text-sm text-light-500">
          Seleccione el número de invitados
        </Text>
      </VStack>

      <Center className="w-[300px] h-[150px]">
        <Text className="mb-2">Invitados: {sliderValue}</Text>
        <Slider
          value={sliderValue}
          onChange={(value) => {
            const newVal = Array.isArray(value) ? value[0] : value;
            setSliderValue(newVal);
          }}
          minValue={50}
          maxValue={300}
          step={1}
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
         style={{width:300}}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Center>

      <VStack space="md" />

      <FormControl className="max-w-[200px] w-full">
        <FormControlLabel>
          <FormControlLabelText style={{marginTop: 15}}>Comentarios adicionales</FormControlLabelText>
        </FormControlLabel>
        <Textarea>
          <TextareaInput placeholder="Agrega detalles sobre tu evento" />
        </Textarea>
      </FormControl>

      <HStack space="sm" style={{marginTop: 5, alignItems: 'center'}}>
        <Switch
          trackColor={{ false: '#d4d4d4', true: '#525252' }}
          thumbColor="#fafafa"
          activeThumbColor="#fafafa"
          ios_backgroundColor="rgba(236, 205, 103, 1)"
        />
        <Text style={{marginTop: 5}}>Recibir notificacion</Text>
      </HStack>
<Center>
<Pressable onPress={() => console.log('ENVIADO')}> 
  {({ pressed }) => (
    <View 
      style={{ 
        padding: 16, 
        marginLeft: 15, 
        marginTop: 10,
        marginRight: 25,
        backgroundColor: pressed ? 'orange' : 'rgba(231, 202, 108, 1)',
      }}
    >
      <Text className={pressed ? 'text-pink-400' : 'text-amber-400'}>
        ENVIAR
      </Text>
    </View>
  )}
</Pressable>
</Center>

      <Text>Para más ideas &nbsp;</Text>
      <Link href={"https://pinterest.com"}>
        <HStack>
          <LinkText style={{ color: "#006affff", fontSize: 16 }}>Ver </LinkText>
          <Icon as={ArrowUpRight} size="lg" color="#006affff" />
        </HStack>
      </Link>
    </View>
  );
}

export default Example;
