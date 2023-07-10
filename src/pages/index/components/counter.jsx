import { Button } from "../../components/button";
import { Text } from "../../components/text";

export function Counter({ count = 0, double = 0, reset = () => {}}) {
  return (
    <>
        <Text tag="h2" marginTop="32px">Counter Island:</Text>
        <Text fontSize="24px">{count} x 2 = {double}</Text>
        <Button onClick={() => count.value++} marginTop="16px">Increment</Button>
        <Button onClick={reset} marginLeft="16px" marginTop="16px">Reset</Button>
    </>
  );
}