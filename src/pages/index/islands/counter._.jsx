import "../../preact-shim";

import { render } from "preact";
import { effect, useSignal, useComputed } from "@preact/signals";

import { Counter } from "../components/counter";

const jsonCountData = document.getElementById("json-counter-data");
const jsonCountDataText = jsonCountData?.text;
const initCount = jsonCountDataText
    ? JSON.parse(jsonCountDataText)
    : { count: 0 };

const token = "__YOUR_PUBLIC_TOKEN_GOES_HERE__";

function CounterIsland() {
    const count = useSignal(initCount.count);
    const double = useComputed(() => count.value * 2);

    effect(() => {
        if (count.value !== initCount.count && count.value !== 0) {
            fetch("/api/counter", {
                method: "PUT",
                credentials: "include",
                headers: {
                    Accept: "text/plain",
                    Authorization: `Bearer ${token}`,
                },
            });
        }
    });

    return <Counter count={count} double={double} />;
}

render(<CounterIsland />, document.getElementById("js-counter"));
