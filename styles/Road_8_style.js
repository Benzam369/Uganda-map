var size = 0;
var placement = 'point';
function categories_Road_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Bituminous':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(245,33,196,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(245,33,196,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.1928009999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Road_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Surface_Cl");
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#030302";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Link_Name") !== null) {
        labelText = String(feature.get("Link_Name"));
    }
    
var style = categories_Road_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
