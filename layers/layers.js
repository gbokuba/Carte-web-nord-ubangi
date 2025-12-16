var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_surface_1 = new ol.format.GeoJSON();
var features_surface_1 = format_surface_1.readFeatures(json_surface_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surface_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surface_1.addFeatures(features_surface_1);
var lyr_surface_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_surface_1, 
                style: style_surface_1,
                popuplayertitle: 'surface',
                interactive: true,
    title: 'surface<br />\
    <img src="styles/legend/surface_1_0.png" /> 1259,590387<br />\
    <img src="styles/legend/surface_1_1.png" /> 8598,752637<br />\
    <img src="styles/legend/surface_1_2.png" /> 12763,852124<br />\
    <img src="styles/legend/surface_1_3.png" /> 15512,152689<br />\
    <img src="styles/legend/surface_1_4.png" /> 16314,793844<br />\
    <img src="styles/legend/surface_1_5.png" /> <br />' });
var format_Secteurs_2 = new ol.format.GeoJSON();
var features_Secteurs_2 = format_Secteurs_2.readFeatures(json_Secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_2.addFeatures(features_Secteurs_2);
var lyr_Secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_2, 
                style: style_Secteurs_2,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_2_0.png" /> (Agricole)<br />\
    <img src="styles/legend/Secteurs_2_1.png" /> (Bois)<br />\
    <img src="styles/legend/Secteurs_2_2.png" /> (Commerce)<br />\
    <img src="styles/legend/Secteurs_2_3.png" /> (Minier)<br />\
    <img src="styles/legend/Secteurs_2_4.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_surface_1.setVisible(true);lyr_Secteurs_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_surface_1,lyr_Secteurs_2];
lyr_surface_1.set('fieldAliases', {'NOM': 'NOM', 'TYPE': 'TYPE', 'CODE_INS': 'CODE_INS', 'SCE_SEM': 'SCE_SEM', 'SCE_GEO': 'SCE_GEO', 'MODIF': 'MODIF', 'SURFACE': 'SURFACE', 'ORIGINE': 'ORIGINE', });
lyr_Secteurs_2.set('fieldAliases', {'NOM': 'NOM', 'SURFACE': 'SURFACE', 'JOEL SEC': 'Secteur d\'activités', });
lyr_surface_1.set('fieldImages', {'NOM': 'TextEdit', 'TYPE': 'TextEdit', 'CODE_INS': 'Range', 'SCE_SEM': 'TextEdit', 'SCE_GEO': 'TextEdit', 'MODIF': 'DateTime', 'SURFACE': 'TextEdit', 'ORIGINE': 'TextEdit', });
lyr_Secteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'SURFACE': 'TextEdit', 'JOEL SEC': 'ValueMap', });
lyr_surface_1.set('fieldLabels', {'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'CODE_INS': 'inline label - always visible', 'SCE_SEM': 'no label', 'SCE_GEO': 'no label', 'MODIF': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'ORIGINE': 'no label', });
lyr_Secteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'SURFACE': 'inline label - always visible', 'JOEL SEC': 'inline label - always visible', });
lyr_Secteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});