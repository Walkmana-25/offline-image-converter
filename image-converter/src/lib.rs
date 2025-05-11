mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn main() {
    // This function is called when the wasm module is loaded.
    // You can use it to initialize your module or perform any setup.
    // For example, you could set up logging or initialize a library.
    utils::set_panic_hook();
    
    alert("Image Converter WASM module loaded!");
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console, js_name = log)] 
    fn alert(s: &str);
}

