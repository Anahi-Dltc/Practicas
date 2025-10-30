import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { CheckIcon } from '@/components/ui/icon';

function Example() {
  const [values, setValues] = React.useState(['Design']);
  return (
    <CheckboxGroup
      value={values}
      onChange={(keys) => {
        setValues(keys);
      }}
    >
      <VStack space="2xl">
        <Box>
          <Checkbox value="Design">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Design</CheckboxLabel>
          </Checkbox>
          <Text size="sm" className="ml-7">
            Subscribe to updates from the Design Feed
          </Text>
        </Box>
        <Box>
          <Checkbox value="Marketing">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Marketing</CheckboxLabel>
          </Checkbox>
          <Text size="sm" className="ml-7">
            Subscribe to updates from the Marketing Feed
          </Text>
        </Box>
      </VStack>
    </CheckboxGroup>
  );
}