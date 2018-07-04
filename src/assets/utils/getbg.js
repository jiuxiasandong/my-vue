import RGBaster from "../js/rgbaster";
export default (src,callback) => {
    RGBaster.colors(src, {
        exclude: ["rgb(0,0,0)"],
        success: function (payload) {
            let bg = payload.dominant;
            if (payload.dominant == "rgb(255,255,255)") {
                bg = "rgb(10,9,30)";
            }
            callback(bg);
        }
    })
}