import { Box, Flex, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Calculator, Result } from './components';

function App() {
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<(number | null)[]>();

  const evaluate = (value: string): number | null => {
    try {
      if (value.match(/[a-zA-Z&#$<>{}]/g)) throw new Error();

      return new Function(`return (${value})`)();
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    const lines = value.split(/\r?\n/).map(evaluate);

    setResult(lines);
  }, [value]);

  return (
    <Grid
      gridTemplateColumns="1.5fr 0.2fr"
      bg="#282a2d"
      maxW="800px"
      h="400px"
      m="auto"
    >
      <Calculator value={value} setValue={setValue} />

      <Result result={result} />
    </Grid>
  );
}

export default App;
