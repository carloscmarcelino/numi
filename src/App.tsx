import { Flex, Grid } from '@chakra-ui/react';
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
    <Flex alignItems="center" justifyContent="center" h="100vh" w="100vw">
      <Grid gridTemplateColumns="1.5fr 0.2fr" bg="#282a2d" w="800px" h="500px">
        <Calculator value={value} setValue={setValue} />

        <Result result={result} />
      </Grid>
    </Flex>
  );
}

export default App;
