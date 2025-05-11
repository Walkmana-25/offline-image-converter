// @deno-types="./image-converter/pkg/image_converter.d.ts"
import init, {convert_image} from "../image-converter/pkg"
// worker.js
onmessage = async function(ev: MessageEvent) {
    await init();
    console.time('worker');
    console.log('Convert start');
    
    const file_name = ev.data.name;

    const uint8Array = new Uint8Array(await ev.data.arrayBuffer());
    const result = await convert_image(uint8Array);
    const output_file = new File([result], file_name, { type: 'image/png' });

    console.log('Convert End')
    postMessage(output_file);
    console.timeEnd('worker');

}