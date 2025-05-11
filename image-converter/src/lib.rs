mod utils;
mod io;
mod convert;

use wasm_bindgen::prelude::*;
use js_sys::Uint8Array;

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

#[wasm_bindgen]
pub fn convert_image(file: Uint8Array) -> Result<Uint8Array, JsValue> {
    // Convert Image
    let image = io::input_image(file)?;
    match convert::convert_image(image) {
        Ok(image) => {
            let output = io::output_image(image)?;
            Ok(output)
        }
        Err(e) => {
            // Handle the error
            let error_message = format!("Error converting image: {}", e);
            alert(&error_message);
            Err(JsValue::from_str(&error_message))
        }
    }
}
