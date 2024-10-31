var size = 0;
var placement = 'point';

var style_DRCBordertoMweya_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#f20a6b";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.1;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("border") !== null && resolution > 0 && resolution < 0) {
        labelText = String(feature.get("border"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(235,16,31,1.0)', lineDash: [13.072,6.536], lineCap: 'square', lineJoin: 'bevel', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
