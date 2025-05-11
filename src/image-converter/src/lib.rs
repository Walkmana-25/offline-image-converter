mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console, js_name = log)] 
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, image-converter!");
}
