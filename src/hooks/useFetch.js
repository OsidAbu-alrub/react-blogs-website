import { useState, useEffect } from "react";

export default function useFetch(defaultVal = [], fetchURL) {
	const [state, setState] = useState(() => defaultVal);

	useEffect(() => {
		const abortFetch = new AbortController();

		(() => {
			setTimeout(async () => {
				try {
					const res = await fetch(fetchURL, {
						signal: abortFetch.signal,
					});
					if (res.ok) {
						const data = await res.json();
						setState(data);
					} else {
						throw new Error(res.status);
					}
				} catch (err) {
					console.log(err.message);
				}
			}, 1500);
		})();

		return () => {
			try {
				abortFetch.abort();
			} catch (err) {
				console.log("fetch aborted");
			}
		};
	}, [fetchURL]);

	return [state, setState];
}
