import { search as tinysearch, default as init } from "/book-ja/tinysearch_engine.js";
window.tinysearch = tinysearch;

async function run() {
    await init('/book-ja/tinysearch_engine_bg.wasm');
}

run();
