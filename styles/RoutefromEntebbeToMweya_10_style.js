var size = 0;
var placement = 'point';

var style_RoutefromEntebbeToMweya_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "19.5px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#f20a6b";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("distnace") !== null) {
        labelText = String(feature.get("distnace"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(250,243,14,1.0)', lineDash: [16.112,8.056], lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
