ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3414").setExtent([11563.193000, 35407.932894, 20704.406800, 41665.110606]);
var wms_layers = [];

var lyr_Tengah_20250203_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Tengah_20250203<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Tengah_20250203_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11544529.816449, 149857.985119, 11549223.764192, 153516.511914]
        })
    });
var format_GeopackageLand_Use_1 = new ol.format.GeoJSON();
var features_GeopackageLand_Use_1 = format_GeopackageLand_Use_1.readFeatures(json_GeopackageLand_Use_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_GeopackageLand_Use_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeopackageLand_Use_1.addFeatures(features_GeopackageLand_Use_1);
var lyr_GeopackageLand_Use_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeopackageLand_Use_1, 
                style: style_GeopackageLand_Use_1,
                popuplayertitle: 'Geopackage — Land_Use',
                interactive: true,
    title: 'Geopackage — Land_Use<br />\
    <img src="styles/legend/GeopackageLand_Use_1_0.png" /> BUSINESS 2<br />\
    <img src="styles/legend/GeopackageLand_Use_1_1.png" /> CIVIC & COMMUNITY INSTITUTION<br />\
    <img src="styles/legend/GeopackageLand_Use_1_2.png" /> COMMERCIAL<br />\
    <img src="styles/legend/GeopackageLand_Use_1_3.png" /> COMMERCIAL & RESIDENTIAL<br />\
    <img src="styles/legend/GeopackageLand_Use_1_4.png" /> EDUCATIONAL INSTITUTION<br />\
    <img src="styles/legend/GeopackageLand_Use_1_5.png" /> HEALTH & MEDICAL CARE<br />\
    <img src="styles/legend/GeopackageLand_Use_1_6.png" /> MASS RAPID TRANSIT<br />\
    <img src="styles/legend/GeopackageLand_Use_1_7.png" /> PARK<br />\
    <img src="styles/legend/GeopackageLand_Use_1_8.png" /> PLACE OF WORSHIP<br />\
    <img src="styles/legend/GeopackageLand_Use_1_9.png" /> RESERVE SITE<br />\
    <img src="styles/legend/GeopackageLand_Use_1_10.png" /> RESIDENTIAL<br />\
    <img src="styles/legend/GeopackageLand_Use_1_11.png" /> ROAD<br />\
    <img src="styles/legend/GeopackageLand_Use_1_12.png" /> SPORTS & RECREATION<br />\
    <img src="styles/legend/GeopackageLand_Use_1_13.png" /> TRANSPORT FACILITIES<br />\
    <img src="styles/legend/GeopackageLand_Use_1_14.png" /> UTILITY<br />\
    <img src="styles/legend/GeopackageLand_Use_1_15.png" /> WATERBODY<br />\
    <img src="styles/legend/GeopackageLand_Use_1_16.png" /> <br />' });
var format_GeopackageTengah_2 = new ol.format.GeoJSON();
var features_GeopackageTengah_2 = format_GeopackageTengah_2.readFeatures(json_GeopackageTengah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_GeopackageTengah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeopackageTengah_2.addFeatures(features_GeopackageTengah_2);
var lyr_GeopackageTengah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeopackageTengah_2, 
                style: style_GeopackageTengah_2,
                popuplayertitle: 'Geopackage — Tengah',
                interactive: true,
                title: '<img src="styles/legend/GeopackageTengah_2.png" /> Geopackage — Tengah'
            });

lyr_Tengah_20250203_0.setVisible(true);lyr_GeopackageLand_Use_1.setVisible(true);lyr_GeopackageTengah_2.setVisible(true);
var layersList = [lyr_Tengah_20250203_0,lyr_GeopackageLand_Use_1,lyr_GeopackageTengah_2];
lyr_GeopackageLand_Use_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LU_DESC': 'LU_DESC', 'LU_TEXT': 'LU_TEXT', 'GPR': 'GPR', 'WHI_Q_MX': 'WHI_Q_MX', 'GPR_B_MN': 'GPR_B_MN', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_GeopackageTengah_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_GeopackageLand_Use_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'LU_DESC': 'TextEdit', 'LU_TEXT': 'TextEdit', 'GPR': 'TextEdit', 'WHI_Q_MX': 'TextEdit', 'GPR_B_MN': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'snippet': 'TextEdit', });
lyr_GeopackageTengah_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'snippet': 'TextEdit', });
lyr_GeopackageLand_Use_1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LU_DESC': 'no label', 'LU_TEXT': 'no label', 'GPR': 'no label', 'WHI_Q_MX': 'no label', 'GPR_B_MN': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_GeopackageTengah_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_GeopackageTengah_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});