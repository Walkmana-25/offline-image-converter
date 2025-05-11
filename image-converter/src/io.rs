use js_sys::Uint8Array;
use anyhow::Result;



pub fn input_image(file: Uint8Array) -> Result<Vec<u8>, String> {
    // Convert Image
    let data = file.to_vec();
    let uint8array_data = Uint8Array::from(&data[..]);
    let vec_data = uint8array_data.to_vec();
    Ok(vec_data)

}

pub fn output_image(data: Vec<u8>) -> Result<Uint8Array, String> {
    // Convert Image
    let uint8array_data = Uint8Array::from(&data[..]);
    Ok(uint8array_data)
}
