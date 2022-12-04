import { Box, Flex } from '@chakra-ui/react';

type ResultProps = {
  result?: (number | null)[];
};

export const Result: React.FC<ResultProps> = ({ result }) => {
  const isNumber = (value: unknown): value is number => {
    if (typeof value === 'number') {
      return !isNaN(value) && isFinite(value);
    } else {
      return false;
    }
  };

  const round = (value: number): number => {
    return Math.round(value * 100) / 100;
  };

  const total = (value: (number | null)[]): number => {
    return round(value.filter(isNumber).reduce((acc, cur) => acc + cur, 0));
  };

  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column">
        {result?.map((result) => {
          return (
            <Box color="#2e1" fontSize="1.25rem" m="0 2rem">
              {isNumber(result) ? round(Number(result)) : '---'}
            </Box>
          );
        })}
      </Flex>

      {result && (
        <Box color="#2e1" fontSize="1.25rem" m="0 2rem">
          {total(result)}
        </Box>
      )}
    </Flex>
  );
};
