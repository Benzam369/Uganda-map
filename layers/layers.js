var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KaseseDistrict_1 = new ol.format.GeoJSON();
var features_KaseseDistrict_1 = format_KaseseDistrict_1.readFeatures(json_KaseseDistrict_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KaseseDistrict_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaseseDistrict_1.addFeatures(features_KaseseDistrict_1);
var lyr_KaseseDistrict_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaseseDistrict_1, 
                style: style_KaseseDistrict_1,
                popuplayertitle: "Kasese District",
                interactive: true,
                title: '<img src="styles/legend/KaseseDistrict_1.png" /> Kasese District'
            });
var format_Waterbodies_2 = new ol.format.GeoJSON();
var features_Waterbodies_2 = format_Waterbodies_2.readFeatures(json_Waterbodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_2.addFeatures(features_Waterbodies_2);
var lyr_Waterbodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_2, 
                style: style_Waterbodies_2,
                popuplayertitle: "Waterbodies",
                interactive: true,
                title: '<img src="styles/legend/Waterbodies_2.png" /> Waterbodies'
            });
var format_NationalPark_3 = new ol.format.GeoJSON();
var features_NationalPark_3 = format_NationalPark_3.readFeatures(json_NationalPark_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalPark_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalPark_3.addFeatures(features_NationalPark_3);
var lyr_NationalPark_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalPark_3, 
                style: style_NationalPark_3,
                popuplayertitle: "National Park",
                interactive: true,
                title: '<img src="styles/legend/NationalPark_3.png" /> National Park'
            });
var format_InternationalBoundary_4 = new ol.format.GeoJSON();
var features_InternationalBoundary_4 = format_InternationalBoundary_4.readFeatures(json_InternationalBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InternationalBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InternationalBoundary_4.addFeatures(features_InternationalBoundary_4);
var lyr_InternationalBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InternationalBoundary_4, 
                style: style_InternationalBoundary_4,
                popuplayertitle: "International Boundary",
                interactive: true,
                title: '<img src="styles/legend/InternationalBoundary_4.png" /> International Boundary'
            });
var format_DistrictBoundary_5 = new ol.format.GeoJSON();
var features_DistrictBoundary_5 = format_DistrictBoundary_5.readFeatures(json_DistrictBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_5.addFeatures(features_DistrictBoundary_5);
var lyr_DistrictBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_5, 
                style: style_DistrictBoundary_5,
                popuplayertitle: "District Boundary",
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_5.png" /> District Boundary'
            });
var format_DistrictBoundary_6 = new ol.format.GeoJSON();
var features_DistrictBoundary_6 = format_DistrictBoundary_6.readFeatures(json_DistrictBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_6.addFeatures(features_DistrictBoundary_6);
var lyr_DistrictBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_6, 
                style: style_DistrictBoundary_6,
                popuplayertitle: "District Boundary",
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_6.png" /> District Boundary'
            });
var format_CrimeScene_7 = new ol.format.GeoJSON();
var features_CrimeScene_7 = format_CrimeScene_7.readFeatures(json_CrimeScene_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CrimeScene_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CrimeScene_7.addFeatures(features_CrimeScene_7);
var lyr_CrimeScene_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CrimeScene_7, 
                style: style_CrimeScene_7,
                popuplayertitle: "Crime Scene",
                interactive: true,
                title: '<img src="styles/legend/CrimeScene_7.png" /> Crime Scene'
            });
var format_Road_8 = new ol.format.GeoJSON();
var features_Road_8 = format_Road_8.readFeatures(json_Road_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_8.addFeatures(features_Road_8);
var lyr_Road_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_8, 
                style: style_Road_8,
                popuplayertitle: "Road",
                interactive: true,
    title: 'Road<br />\
    <img src="styles/legend/Road_8_0.png" /> Main Road<br />'
        });
var format_DRCBordertoMweya_9 = new ol.format.GeoJSON();
var features_DRCBordertoMweya_9 = format_DRCBordertoMweya_9.readFeatures(json_DRCBordertoMweya_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRCBordertoMweya_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRCBordertoMweya_9.addFeatures(features_DRCBordertoMweya_9);
var lyr_DRCBordertoMweya_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRCBordertoMweya_9, 
                style: style_DRCBordertoMweya_9,
                popuplayertitle: "DRC Border to Mweya",
                interactive: true,
                title: '<img src="styles/legend/DRCBordertoMweya_9.png" /> DRC Border to Mweya'
            });
var format_RoutefromEntebbeToMweya_10 = new ol.format.GeoJSON();
var features_RoutefromEntebbeToMweya_10 = format_RoutefromEntebbeToMweya_10.readFeatures(json_RoutefromEntebbeToMweya_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoutefromEntebbeToMweya_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoutefromEntebbeToMweya_10.addFeatures(features_RoutefromEntebbeToMweya_10);
var lyr_RoutefromEntebbeToMweya_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoutefromEntebbeToMweya_10, 
                style: style_RoutefromEntebbeToMweya_10,
                popuplayertitle: "Route from Entebbe To Mweya",
                interactive: true,
                title: '<img src="styles/legend/RoutefromEntebbeToMweya_10.png" /> Route from Entebbe To Mweya'
            });
var format_Roads_2020_11 = new ol.format.GeoJSON();
var features_Roads_2020_11 = format_Roads_2020_11.readFeatures(json_Roads_2020_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2020_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2020_11.addFeatures(features_Roads_2020_11);
var lyr_Roads_2020_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2020_11, 
                style: style_Roads_2020_11,
                popuplayertitle: "Roads_2020",
                interactive: true,
    title: 'Roads_2020<br />\
    <img src="styles/legend/Roads_2020_11_0.png" /> Bituminous<br />'
        });
var format_BorderPost_12 = new ol.format.GeoJSON();
var features_BorderPost_12 = format_BorderPost_12.readFeatures(json_BorderPost_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BorderPost_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BorderPost_12.addFeatures(features_BorderPost_12);
var lyr_BorderPost_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BorderPost_12, 
                style: style_BorderPost_12,
                popuplayertitle: "Border Post",
                interactive: true,
                title: '<img src="styles/legend/BorderPost_12.png" /> Border Post'
            });
var format_Towns_13 = new ol.format.GeoJSON();
var features_Towns_13 = format_Towns_13.readFeatures(json_Towns_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Towns_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Towns_13.addFeatures(features_Towns_13);
var lyr_Towns_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Towns_13, 
                style: style_Towns_13,
                popuplayertitle: "Towns",
                interactive: true,
                title: '<img src="styles/legend/Towns_13.png" /> Towns'
            });
var format_PointsofInterest_14 = new ol.format.GeoJSON();
var features_PointsofInterest_14 = format_PointsofInterest_14.readFeatures(json_PointsofInterest_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsofInterest_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsofInterest_14.addFeatures(features_PointsofInterest_14);
var lyr_PointsofInterest_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointsofInterest_14, 
                style: style_PointsofInterest_14,
                popuplayertitle: "Points of Interest",
                interactive: true,
                title: '<img src="styles/legend/PointsofInterest_14.png" /> Points of Interest'
            });
var format_Airport_15 = new ol.format.GeoJSON();
var features_Airport_15 = format_Airport_15.readFeatures(json_Airport_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_15.addFeatures(features_Airport_15);
var lyr_Airport_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_15, 
                style: style_Airport_15,
                popuplayertitle: "Airport",
                interactive: true,
                title: '<img src="styles/legend/Airport_15.png" /> Airport'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KaseseDistrict_1.setVisible(true);lyr_Waterbodies_2.setVisible(true);lyr_NationalPark_3.setVisible(true);lyr_InternationalBoundary_4.setVisible(true);lyr_DistrictBoundary_5.setVisible(true);lyr_DistrictBoundary_6.setVisible(true);lyr_CrimeScene_7.setVisible(true);lyr_Road_8.setVisible(true);lyr_DRCBordertoMweya_9.setVisible(true);lyr_RoutefromEntebbeToMweya_10.setVisible(true);lyr_Roads_2020_11.setVisible(true);lyr_BorderPost_12.setVisible(true);lyr_Towns_13.setVisible(true);lyr_PointsofInterest_14.setVisible(true);lyr_Airport_15.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KaseseDistrict_1,lyr_Waterbodies_2,lyr_NationalPark_3,lyr_InternationalBoundary_4,lyr_DistrictBoundary_5,lyr_DistrictBoundary_6,lyr_CrimeScene_7,lyr_Road_8,lyr_DRCBordertoMweya_9,lyr_RoutefromEntebbeToMweya_10,lyr_Roads_2020_11,lyr_BorderPost_12,lyr_Towns_13,lyr_PointsofInterest_14,lyr_Airport_15];
lyr_KaseseDistrict_1.set('fieldAliases', {'F15Regions': 'F15Regions', 'CITY': 'CITY', 'dname2019': 'dname2019', 'd': 'd', '2010': '2010', '2016': '2016', '2017': '2017', '2018': '2018', '2020': '2020', 'TFR2014': 'TFR2014', 'tregions': 'tregions', 'Region': 'Region', 'GIS Staff': 'GIS Staff', 'No of EAs': 'No of EAs', });
lyr_Waterbodies_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Category': 'Category', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_NationalPark_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GAZ_': 'GAZ_', 'GAZ_ID': 'GAZ_ID', 'PSUBJ': 'PSUBJ', 'NAME': 'NAME', 'FD_CODE': 'FD_CODE', 'FD_NAME': 'FD_NAME', 'GAZTYPE': 'GAZTYPE', 'COMMENT': 'COMMENT', 'ANNONAM': 'ANNONAM', 'ANNOTYP': 'ANNOTYP', 'LOCK__ID': 'LOCK__ID', 'PHASE__ID': 'PHASE__ID', 'OBJECT__ID': 'OBJECT__ID', 'CREATE__ID': 'CREATE__ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_InternationalBoundary_4.set('fieldAliases', {'COUNTRY': 'COUNTRY', });
lyr_DistrictBoundary_5.set('fieldAliases', {'Id': 'Id', });
lyr_DistrictBoundary_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'F15Regions': 'F15Regions', 'DName2016': 'DName2016', 'DNama2017': 'DNama2017', 'dc2017': 'dc2017', 'DName2018': 'DName2018', 'dc2018': 'dc2018', 'DName2019': 'DName2019', 'Police_reg': 'Police_reg', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CrimeScene_7.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Road_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Link_Name': 'Link_Name', 'Surface_Cl': 'Surface_Cl', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_DRCBordertoMweya_9.set('fieldAliases', {'id': 'id', 'border': 'border', 'dist': 'dist', 'leg': 'leg', 'length': 'length', 'lll': 'lll', });
lyr_RoutefromEntebbeToMweya_10.set('fieldAliases', {'id': 'id', 'distnace': 'distnace', 'leng': 'leng', 'rth': 'rth', 'MAP': 'MAP', });
lyr_Roads_2020_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Link_Name': 'Link_Name', 'Surface_Cl': 'Surface_Cl', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_BorderPost_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UniqueID': 'UniqueID', 'StationName': 'StationName', 'Type': 'Type', 'District': 'District', 'County': 'County', 'Subcounty': 'Subcounty', 'JLOSCode': 'JLOSCode', 'Location': 'Location', 'ConstructionDate': 'ConstructionDate', 'Address': 'Address', 'PlotNumber': 'PlotNumber', 'Telephone': 'Telephone', 'Email': 'Email', 'No_of_Staff': 'No_of_Staff', 'No_of_Female': 'No_of_Female', 'No_of_Male': 'No_of_Male', 'OperationStatus': 'OperationStatus', 'PremiseStatus': 'PremiseStatus', 'SignPost': 'SignPost', 'Vehicles': 'Vehicles', 'MotorCycles': 'MotorCycles', 'Bicycles': 'Bicycles', 'Photocopiers': 'Photocopiers', 'Scanners': 'Scanners', 'ElectricityAccess': 'ElectricityAccess', 'InternetAccess': 'InternetAccess', 'BiometricTechnology': 'BiometricTechnology', 'PolicePresence': 'PolicePresence', 'StorageSafe': 'StorageSafe', 'TravelForms': 'TravelForms', 'PublicFacilities': 'PublicFacilities', 'Photo': 'Photo', 'Enumerator': 'Enumerator', 'Supervisor': 'Supervisor', 'LastUpdate': 'LastUpdate', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Towns_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cityname': 'cityname', 'Adm_level': 'Adm_level', 'ORIG_FID': 'ORIG_FID', });
lyr_PointsofInterest_14.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Airport_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'Latitude': 'Latitude', 'Longitudes': 'Longitudes', });
lyr_KaseseDistrict_1.set('fieldImages', {'F15Regions': 'TextEdit', 'CITY': 'TextEdit', 'dname2019': 'TextEdit', 'd': 'TextEdit', '2010': 'TextEdit', '2016': 'TextEdit', '2017': 'TextEdit', '2018': 'TextEdit', '2020': 'TextEdit', 'TFR2014': 'TextEdit', 'tregions': 'TextEdit', 'Region': 'TextEdit', 'GIS Staff': 'TextEdit', 'No of EAs': 'TextEdit', });
lyr_Waterbodies_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Category': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NationalPark_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GAZ_': 'TextEdit', 'GAZ_ID': 'TextEdit', 'PSUBJ': 'Range', 'NAME': 'TextEdit', 'FD_CODE': 'TextEdit', 'FD_NAME': 'TextEdit', 'GAZTYPE': 'TextEdit', 'COMMENT': 'TextEdit', 'ANNONAM': 'TextEdit', 'ANNOTYP': 'TextEdit', 'LOCK__ID': 'TextEdit', 'PHASE__ID': 'Range', 'OBJECT__ID': 'TextEdit', 'CREATE__ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_InternationalBoundary_4.set('fieldImages', {'COUNTRY': 'TextEdit', });
lyr_DistrictBoundary_5.set('fieldImages', {'Id': 'Range', });
lyr_DistrictBoundary_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'F15Regions': 'TextEdit', 'DName2016': 'TextEdit', 'DNama2017': 'TextEdit', 'dc2017': 'Range', 'DName2018': 'TextEdit', 'dc2018': 'Range', 'DName2019': 'TextEdit', 'Police_reg': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CrimeScene_7.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_Road_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'Link_Name': 'TextEdit', 'Surface_Cl': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_DRCBordertoMweya_9.set('fieldImages', {'id': 'TextEdit', 'border': 'TextEdit', 'dist': 'TextEdit', 'leg': 'TextEdit', 'length': '', 'lll': '', });
lyr_RoutefromEntebbeToMweya_10.set('fieldImages', {'id': 'TextEdit', 'distnace': 'TextEdit', 'leng': 'TextEdit', 'rth': 'TextEdit', 'MAP': 'TextEdit', });
lyr_Roads_2020_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Link_Name': 'TextEdit', 'Surface_Cl': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_BorderPost_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'UniqueID': 'TextEdit', 'StationName': 'TextEdit', 'Type': 'TextEdit', 'District': 'TextEdit', 'County': 'TextEdit', 'Subcounty': 'TextEdit', 'JLOSCode': 'TextEdit', 'Location': 'TextEdit', 'ConstructionDate': 'DateTime', 'Address': 'TextEdit', 'PlotNumber': 'TextEdit', 'Telephone': 'TextEdit', 'Email': 'TextEdit', 'No_of_Staff': 'Range', 'No_of_Female': 'Range', 'No_of_Male': 'Range', 'OperationStatus': 'TextEdit', 'PremiseStatus': 'TextEdit', 'SignPost': 'TextEdit', 'Vehicles': 'Range', 'MotorCycles': 'Range', 'Bicycles': 'Range', 'Photocopiers': 'Range', 'Scanners': 'Range', 'ElectricityAccess': 'TextEdit', 'InternetAccess': 'TextEdit', 'BiometricTechnology': 'TextEdit', 'PolicePresence': 'TextEdit', 'StorageSafe': 'TextEdit', 'TravelForms': 'TextEdit', 'PublicFacilities': 'TextEdit', 'Photo': 'TextEdit', 'Enumerator': 'TextEdit', 'Supervisor': 'TextEdit', 'LastUpdate': 'DateTime', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Towns_13.set('fieldImages', {'OBJECTID': 'Range', 'cityname': 'TextEdit', 'Adm_level': 'TextEdit', 'ORIG_FID': 'Range', });
lyr_PointsofInterest_14.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_Airport_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'Range', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'Range', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'Range', 'Latitude': 'TextEdit', 'Longitudes': 'TextEdit', });
lyr_KaseseDistrict_1.set('fieldLabels', {'F15Regions': 'no label', 'CITY': 'no label', 'dname2019': 'no label', 'd': 'no label', '2010': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2020': 'no label', 'TFR2014': 'no label', 'tregions': 'no label', 'Region': 'no label', 'GIS Staff': 'no label', 'No of EAs': 'no label', });
lyr_Waterbodies_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Category': 'no label', 'Shape_Le_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_NationalPark_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'GAZ_': 'no label', 'GAZ_ID': 'no label', 'PSUBJ': 'no label', 'NAME': 'no label', 'FD_CODE': 'no label', 'FD_NAME': 'no label', 'GAZTYPE': 'no label', 'COMMENT': 'no label', 'ANNONAM': 'no label', 'ANNOTYP': 'no label', 'LOCK__ID': 'no label', 'PHASE__ID': 'no label', 'OBJECT__ID': 'no label', 'CREATE__ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_InternationalBoundary_4.set('fieldLabels', {'COUNTRY': 'no label', });
lyr_DistrictBoundary_5.set('fieldLabels', {'Id': 'no label', });
lyr_DistrictBoundary_6.set('fieldLabels', {'OBJECTID': 'no label', 'F15Regions': 'no label', 'DName2016': 'no label', 'DNama2017': 'no label', 'dc2017': 'no label', 'DName2018': 'no label', 'dc2018': 'no label', 'DName2019': 'no label', 'Police_reg': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_CrimeScene_7.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Road_8.set('fieldLabels', {'OBJECTID': 'no label', 'Link_Name': 'no label', 'Surface_Cl': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_DRCBordertoMweya_9.set('fieldLabels', {'id': 'no label', 'border': 'no label', 'dist': 'no label', 'leg': 'no label', 'length': 'no label', 'lll': 'no label', });
lyr_RoutefromEntebbeToMweya_10.set('fieldLabels', {'id': 'no label', 'distnace': 'no label', 'leng': 'no label', 'rth': 'no label', 'MAP': 'no label', });
lyr_Roads_2020_11.set('fieldLabels', {'OBJECTID': 'no label', 'Link_Name': 'no label', 'Surface_Cl': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_BorderPost_12.set('fieldLabels', {'OBJECTID': 'no label', 'UniqueID': 'no label', 'StationName': 'no label', 'Type': 'no label', 'District': 'no label', 'County': 'no label', 'Subcounty': 'no label', 'JLOSCode': 'no label', 'Location': 'no label', 'ConstructionDate': 'no label', 'Address': 'no label', 'PlotNumber': 'no label', 'Telephone': 'no label', 'Email': 'no label', 'No_of_Staff': 'no label', 'No_of_Female': 'no label', 'No_of_Male': 'no label', 'OperationStatus': 'no label', 'PremiseStatus': 'no label', 'SignPost': 'no label', 'Vehicles': 'no label', 'MotorCycles': 'no label', 'Bicycles': 'no label', 'Photocopiers': 'no label', 'Scanners': 'no label', 'ElectricityAccess': 'no label', 'InternetAccess': 'no label', 'BiometricTechnology': 'no label', 'PolicePresence': 'no label', 'StorageSafe': 'no label', 'TravelForms': 'no label', 'PublicFacilities': 'no label', 'Photo': 'no label', 'Enumerator': 'no label', 'Supervisor': 'no label', 'LastUpdate': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Towns_13.set('fieldLabels', {'OBJECTID': 'no label', 'cityname': 'no label', 'Adm_level': 'no label', 'ORIG_FID': 'no label', });
lyr_PointsofInterest_14.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Airport_15.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'Latitude': 'no label', 'Longitudes': 'no label', });
lyr_Airport_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});