import '@testing-library/jest-dom';

// simple localStorage polyfill for test environment
// ensure a DOM is available
if (typeof globalThis.document === 'undefined') {
	const { JSDOM } = await import('jsdom');
	const dom = new JSDOM('<!doctype html><html><body></body></html>');
	globalThis.window = dom.window;
	globalThis.document = dom.window.document;
	globalThis.navigator = dom.window.navigator;
	globalThis.HTMLElement = dom.window.HTMLElement;
	globalThis.Node = dom.window.Node;
}

// localStorage polyfill (use jsdom if available)
if (typeof globalThis.localStorage === 'undefined') {
	if (globalThis.window && globalThis.window.localStorage) {
		globalThis.localStorage = globalThis.window.localStorage;
	} else {
		const storage = {};
		globalThis.localStorage = {
			getItem: (key) => (key in storage ? storage[key] : null),
			setItem: (key, value) => { storage[key] = String(value); },
			removeItem: (key) => { delete storage[key]; },
			clear: () => { for (const k in storage) delete storage[k]; }
		};
	}
}
