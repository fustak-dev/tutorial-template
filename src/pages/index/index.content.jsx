import { Box } from "../components/box";
import { Title } from "../components/title";
import { Text } from "../components/text";
import { Counter } from "./components/counter";

export function IndexContent() {
    const times = sqlite.query("SELECT count(id) FROM counter");
    const count = times?.[0] ? times[0]["count(id)"] : 0;

    return (
        <Box tag="main" minHeight="100vh" padding="32px">
            <Title>Index Title!!!</Title>
            <Text>This is the index page.</Text>
            <Box id="js-counter">
                {/* <Counter count={count} double={count * 2} /> */}
            </Box>
            <script id="json-counter-data" type="application/json">
                {JSON.stringify({ count })}
            </script>
        </Box>
    );
}
