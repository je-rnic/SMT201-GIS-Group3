var wms_layers = [];

var format_MHA_Protected_Area_0 = new ol.format.GeoJSON();
var features_MHA_Protected_Area_0 = format_MHA_Protected_Area_0.readFeatures(json_MHA_Protected_Area_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MHA_Protected_Area_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MHA_Protected_Area_0.addFeatures(features_MHA_Protected_Area_0);
var lyr_MHA_Protected_Area_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MHA_Protected_Area_0, 
                style: style_MHA_Protected_Area_0,
                popuplayertitle: 'MHA_Protected_Area',
                interactive: true,
                title: '<img src="styles/legend/MHA_Protected_Area_0.png" /> MHA_Protected_Area'
            });
var format_NPARKS_nature_reserve_1 = new ol.format.GeoJSON();
var features_NPARKS_nature_reserve_1 = format_NPARKS_nature_reserve_1.readFeatures(json_NPARKS_nature_reserve_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPARKS_nature_reserve_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPARKS_nature_reserve_1.addFeatures(features_NPARKS_nature_reserve_1);
var lyr_NPARKS_nature_reserve_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NPARKS_nature_reserve_1, 
                style: style_NPARKS_nature_reserve_1,
                popuplayertitle: 'NPARKS_nature_reserve',
                interactive: true,
                title: '<img src="styles/legend/NPARKS_nature_reserve_1.png" /> NPARKS_nature_reserve'
            });
var format_NPARKS_tree_conservation_area_2 = new ol.format.GeoJSON();
var features_NPARKS_tree_conservation_area_2 = format_NPARKS_tree_conservation_area_2.readFeatures(json_NPARKS_tree_conservation_area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NPARKS_tree_conservation_area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NPARKS_tree_conservation_area_2.addFeatures(features_NPARKS_tree_conservation_area_2);
var lyr_NPARKS_tree_conservation_area_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NPARKS_tree_conservation_area_2, 
                style: style_NPARKS_tree_conservation_area_2,
                popuplayertitle: 'NPARKS_tree_conservation_area',
                interactive: true,
                title: '<img src="styles/legend/NPARKS_tree_conservation_area_2.png" /> NPARKS_tree_conservation_area'
            });
var format_Viable_AreasTemperature_3 = new ol.format.GeoJSON();
var features_Viable_AreasTemperature_3 = format_Viable_AreasTemperature_3.readFeatures(json_Viable_AreasTemperature_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viable_AreasTemperature_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viable_AreasTemperature_3.addFeatures(features_Viable_AreasTemperature_3);
var lyr_Viable_AreasTemperature_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viable_AreasTemperature_3, 
                style: style_Viable_AreasTemperature_3,
                popuplayertitle: 'Viable_Areas (Temperature)',
                interactive: true,
    title: 'Viable_Areas (Temperature)<br />\
    <img src="styles/legend/Viable_AreasTemperature_3_0.png" /> 26.5 - 27<br />\
    <img src="styles/legend/Viable_AreasTemperature_3_1.png" /> 27 - 27.5<br />\
    <img src="styles/legend/Viable_AreasTemperature_3_2.png" /> 27.5 - 27.6<br />\
    <img src="styles/legend/Viable_AreasTemperature_3_3.png" /> 27.6 - 28.1<br />\
    <img src="styles/legend/Viable_AreasTemperature_3_4.png" /> 28.1 - 28.2<br />' });
var format_Substation_Locations_4 = new ol.format.GeoJSON();
var features_Substation_Locations_4 = format_Substation_Locations_4.readFeatures(json_Substation_Locations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Substation_Locations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Substation_Locations_4.addFeatures(features_Substation_Locations_4);
var lyr_Substation_Locations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Substation_Locations_4, 
                style: style_Substation_Locations_4,
                popuplayertitle: 'Substation_Locations',
                interactive: true,
                title: '<img src="styles/legend/Substation_Locations_4.png" /> Substation_Locations'
            });
var format_Mainland_Singapore_5 = new ol.format.GeoJSON();
var features_Mainland_Singapore_5 = format_Mainland_Singapore_5.readFeatures(json_Mainland_Singapore_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mainland_Singapore_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mainland_Singapore_5.addFeatures(features_Mainland_Singapore_5);
var lyr_Mainland_Singapore_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mainland_Singapore_5, 
                style: style_Mainland_Singapore_5,
                popuplayertitle: 'Mainland_Singapore',
                interactive: true,
                title: '<img src="styles/legend/Mainland_Singapore_5.png" /> Mainland_Singapore'
            });

        var lyr_OpenStreetMap_6 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Unclassified_MCDA_Singapore_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Unclassified_MCDA_Singapore<br />\
    <img src="styles/legend/Unclassified_MCDA_Singapore_7_0.png" /> 1.795<br />\
    <img src="styles/legend/Unclassified_MCDA_Singapore_7_1.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Unclassified_MCDA_Singapore_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11533332.559185, 139840.796085, 11582083.877380, 163620.531958]
        })
    });
var lyr_MCDA_Singapore_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MCDA_Singapore<br />\
    <img src="styles/legend/MCDA_Singapore_8_0.png" /> Unsuitable Area (<0.75)<br />\
    <img src="styles/legend/MCDA_Singapore_8_1.png" /> Suitable Area (>0.75)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MCDA_Singapore_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11533332.559185, 139840.796085, 11582083.877380, 163620.531958]
        })
    });

lyr_MHA_Protected_Area_0.setVisible(false);lyr_NPARKS_nature_reserve_1.setVisible(false);lyr_NPARKS_tree_conservation_area_2.setVisible(false);lyr_Viable_AreasTemperature_3.setVisible(false);lyr_Substation_Locations_4.setVisible(false);lyr_Mainland_Singapore_5.setVisible(true);lyr_OpenStreetMap_6.setVisible(false);lyr_Unclassified_MCDA_Singapore_7.setVisible(false);lyr_MCDA_Singapore_8.setVisible(true);
var layersList = [lyr_MHA_Protected_Area_0,lyr_NPARKS_nature_reserve_1,lyr_NPARKS_tree_conservation_area_2,lyr_Viable_AreasTemperature_3,lyr_Substation_Locations_4,lyr_Mainland_Singapore_5,lyr_OpenStreetMap_6,lyr_Unclassified_MCDA_Singapore_7,lyr_MCDA_Singapore_8];
lyr_MHA_Protected_Area_0.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'LOCALES': 'LOCALES', 'DESCRIPT_1': 'DESCRIPT_1', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_NPARKS_nature_reserve_1.set('fieldAliases', {'fid': 'fid', 'N_RESERVE': 'N_RESERVE', 'L_CODE': 'L_CODE', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NPARKS_tree_conservation_area_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'REGION': 'REGION', 'MORE_INFO': 'MORE_INFO', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'SHAPE.STAr': 'SHAPE.STAr', 'SHAPE.STLe': 'SHAPE.STLe', });
lyr_Viable_AreasTemperature_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'LU_DESC': 'LU_DESC', 'overall_av': 'overall_av', });
lyr_Substation_Locations_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'addr_postcode': 'addr_postcode', 'addr_street': 'addr_street', 'POI_CODE': 'POI_CODE', });
lyr_Mainland_Singapore_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'snippet': 'snippet', });
lyr_MHA_Protected_Area_0.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'LOCALES': '', 'DESCRIPT_1': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'snippet': '', });
lyr_NPARKS_nature_reserve_1.set('fieldImages', {'fid': '', 'N_RESERVE': '', 'L_CODE': '', 'NAME': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_NPARKS_tree_conservation_area_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAME': '', 'REGION': '', 'MORE_INFO': '', 'INC_CRC': '', 'FMEL_UPD_D': '', 'SHAPE.STAr': '', 'SHAPE.STLe': '', });
lyr_Viable_AreasTemperature_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'LU_DESC': 'TextEdit', 'overall_av': 'TextEdit', });
lyr_Substation_Locations_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'addr_postcode': 'TextEdit', 'addr_street': 'TextEdit', 'POI_CODE': 'Range', });
lyr_Mainland_Singapore_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'snippet': 'TextEdit', });
lyr_MHA_Protected_Area_0.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'LOCALES': 'no label', 'DESCRIPT_1': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_NPARKS_nature_reserve_1.set('fieldLabels', {'fid': 'no label', 'N_RESERVE': 'no label', 'L_CODE': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_NPARKS_tree_conservation_area_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'REGION': 'no label', 'MORE_INFO': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'SHAPE.STAr': 'no label', 'SHAPE.STLe': 'no label', });
lyr_Viable_AreasTemperature_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'LU_DESC': 'no label', 'overall_av': 'no label', });
lyr_Substation_Locations_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'addr_postcode': 'no label', 'addr_street': 'no label', 'POI_CODE': 'no label', });
lyr_Mainland_Singapore_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'no label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'snippet': 'no label', });
lyr_Mainland_Singapore_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});