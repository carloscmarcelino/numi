import { Textarea } from '@chakra-ui/react';

type CalculatorProps = {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

export const Calculator: React.FC<CalculatorProps> = ({ value, setValue }) => {
  return (
    <Textarea
      border="none"
      outline="none"
      boxSize="border-box"
      bg="#282a2d"
      color="#e3e7e9"
      fontSize="1.25rem"
      resize="none"
      _focus={{ outline: 'none' }}
      overflow="hidden"
      placeholder="5 + 5..."
      value={value}
      onChange={({ currentTarget: { value } }) => setValue(value)}
    />
  );
};
