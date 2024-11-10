var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25Kcopy_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25Kcopy_0 = format_ADMINISTRASIDESA_AR_25Kcopy_0.readFeatures(json_ADMINISTRASIDESA_AR_25Kcopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25Kcopy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25Kcopy_0.addFeatures(features_ADMINISTRASIDESA_AR_25Kcopy_0);
var lyr_ADMINISTRASIDESA_AR_25Kcopy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25Kcopy_0, 
                style: style_ADMINISTRASIDESA_AR_25Kcopy_0,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K copy",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25Kcopy_0.png" /> ADMINISTRASIDESA_AR_25K copy'
            });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_ANEWANGGOT_point_2 = new ol.format.GeoJSON();
var features_ANEWANGGOT_point_2 = format_ANEWANGGOT_point_2.readFeatures(json_ANEWANGGOT_point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANEWANGGOT_point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEWANGGOT_point_2.addFeatures(features_ANEWANGGOT_point_2);
var lyr_ANEWANGGOT_point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEWANGGOT_point_2, 
                style: style_ANEWANGGOT_point_2,
                popuplayertitle: "ANEWANGGOT_point",
                interactive: true,
                title: '<img src="styles/legend/ANEWANGGOT_point_2.png" /> ANEWANGGOT_point'
            });
var format_JEMBATAN_PT_25K_3 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_25K_3 = format_JEMBATAN_PT_25K_3.readFeatures(json_JEMBATAN_PT_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_25K_3.addFeatures(features_JEMBATAN_PT_25K_3);
var lyr_JEMBATAN_PT_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_25K_3, 
                style: style_JEMBATAN_PT_25K_3,
                popuplayertitle: "JEMBATAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_25K_3.png" /> JEMBATAN_PT_25K'
            });
var format_PEMUKIMAN_AR_25K_4 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_4 = format_PEMUKIMAN_AR_25K_4.readFeatures(json_PEMUKIMAN_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_4.addFeatures(features_PEMUKIMAN_AR_25K_4);
var lyr_PEMUKIMAN_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_4, 
                style: style_PEMUKIMAN_AR_25K_4,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_4.png" /> PEMUKIMAN_AR_25K'
            });
var format_AGRISAWAH_AR_25K_5 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_5 = format_AGRISAWAH_AR_25K_5.readFeatures(json_AGRISAWAH_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_5.addFeatures(features_AGRISAWAH_AR_25K_5);
var lyr_AGRISAWAH_AR_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_5, 
                style: style_AGRISAWAH_AR_25K_5,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_5.png" /> AGRISAWAH_AR_25K'
            });
var format_NONAGRIHUTANKERING_AR_25K_6 = new ol.format.GeoJSON();
var features_NONAGRIHUTANKERING_AR_25K_6 = format_NONAGRIHUTANKERING_AR_25K_6.readFeatures(json_NONAGRIHUTANKERING_AR_25K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRIHUTANKERING_AR_25K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRIHUTANKERING_AR_25K_6.addFeatures(features_NONAGRIHUTANKERING_AR_25K_6);
var lyr_NONAGRIHUTANKERING_AR_25K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRIHUTANKERING_AR_25K_6, 
                style: style_NONAGRIHUTANKERING_AR_25K_6,
                popuplayertitle: "NONAGRIHUTANKERING_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/NONAGRIHUTANKERING_AR_25K_6.png" /> NONAGRIHUTANKERING_AR_25K'
            });
var format_AGRIKEBUN_AR_25K_7 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_25K_7 = format_AGRIKEBUN_AR_25K_7.readFeatures(json_AGRIKEBUN_AR_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_25K_7.addFeatures(features_AGRIKEBUN_AR_25K_7);
var lyr_AGRIKEBUN_AR_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_25K_7, 
                style: style_AGRIKEBUN_AR_25K_7,
                popuplayertitle: "AGRIKEBUN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_25K_7.png" /> AGRIKEBUN_AR_25K'
            });
var format_ANEWANGGOT_poly_8 = new ol.format.GeoJSON();
var features_ANEWANGGOT_poly_8 = format_ANEWANGGOT_poly_8.readFeatures(json_ANEWANGGOT_poly_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANEWANGGOT_poly_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANEWANGGOT_poly_8.addFeatures(features_ANEWANGGOT_poly_8);
var lyr_ANEWANGGOT_poly_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANEWANGGOT_poly_8, 
                style: style_ANEWANGGOT_poly_8,
                popuplayertitle: "ANEWANGGOT_poly",
                interactive: true,
                title: '<img src="styles/legend/ANEWANGGOT_poly_8.png" /> ANEWANGGOT_poly'
            });
var format_PENDIDIKAN_PT_25K_9 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_9 = format_PENDIDIKAN_PT_25K_9.readFeatures(json_PENDIDIKAN_PT_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_9.addFeatures(features_PENDIDIKAN_PT_25K_9);
var lyr_PENDIDIKAN_PT_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_9, 
                style: style_PENDIDIKAN_PT_25K_9,
                popuplayertitle: "PENDIDIKAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_9.png" /> PENDIDIKAN_PT_25K'
            });
var format_BANGUNAN_PT_25K_10 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_25K_10 = format_BANGUNAN_PT_25K_10.readFeatures(json_BANGUNAN_PT_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_25K_10.addFeatures(features_BANGUNAN_PT_25K_10);
var lyr_BANGUNAN_PT_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_25K_10, 
                style: style_BANGUNAN_PT_25K_10,
                popuplayertitle: "BANGUNAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_25K_10.png" /> BANGUNAN_PT_25K'
            });
var format_SARANAIBADAH_PT_25K_11 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_11 = format_SARANAIBADAH_PT_25K_11.readFeatures(json_SARANAIBADAH_PT_25K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_11.addFeatures(features_SARANAIBADAH_PT_25K_11);
var lyr_SARANAIBADAH_PT_25K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_11, 
                style: style_SARANAIBADAH_PT_25K_11,
                popuplayertitle: "SARANAIBADAH_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_11.png" /> SARANAIBADAH_PT_25K'
            });
var format_RUMAH11_12 = new ol.format.GeoJSON();
var features_RUMAH11_12 = format_RUMAH11_12.readFeatures(json_RUMAH11_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAH11_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAH11_12.addFeatures(features_RUMAH11_12);
var lyr_RUMAH11_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAH11_12, 
                style: style_RUMAH11_12,
                popuplayertitle: "RUMAH11",
                interactive: true,
                title: '<img src="styles/legend/RUMAH11_12.png" /> RUMAH11'
            });
var format_PEMERINTAHAN_PT_25K_13 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_13 = format_PEMERINTAHAN_PT_25K_13.readFeatures(json_PEMERINTAHAN_PT_25K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_13.addFeatures(features_PEMERINTAHAN_PT_25K_13);
var lyr_PEMERINTAHAN_PT_25K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_13, 
                style: style_PEMERINTAHAN_PT_25K_13,
                popuplayertitle: "PEMERINTAHAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_13.png" /> PEMERINTAHAN_PT_25K'
            });
var format_SUNGAI_AR_25K_14 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_14 = format_SUNGAI_AR_25K_14.readFeatures(json_SUNGAI_AR_25K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_14.addFeatures(features_SUNGAI_AR_25K_14);
var lyr_SUNGAI_AR_25K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_14, 
                style: style_SUNGAI_AR_25K_14,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_14.png" /> SUNGAI_AR_25K'
            });
var format_SUNGAI_LN_25K_15 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_15 = format_SUNGAI_LN_25K_15.readFeatures(json_SUNGAI_LN_25K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_15.addFeatures(features_SUNGAI_LN_25K_15);
var lyr_SUNGAI_LN_25K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_15, 
                style: style_SUNGAI_LN_25K_15,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_15.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_16 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_16 = format_JALAN_LN_25K_16.readFeatures(json_JALAN_LN_25K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_16.addFeatures(features_JALAN_LN_25K_16);
var lyr_JALAN_LN_25K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_16, 
                style: style_JALAN_LN_25K_16,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_16.png" /> JALAN_LN_25K'
            });

lyr_ADMINISTRASIDESA_AR_25Kcopy_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_ANEWANGGOT_point_2.setVisible(true);lyr_JEMBATAN_PT_25K_3.setVisible(true);lyr_PEMUKIMAN_AR_25K_4.setVisible(true);lyr_AGRISAWAH_AR_25K_5.setVisible(true);lyr_NONAGRIHUTANKERING_AR_25K_6.setVisible(true);lyr_AGRIKEBUN_AR_25K_7.setVisible(true);lyr_ANEWANGGOT_poly_8.setVisible(true);lyr_PENDIDIKAN_PT_25K_9.setVisible(true);lyr_BANGUNAN_PT_25K_10.setVisible(true);lyr_SARANAIBADAH_PT_25K_11.setVisible(true);lyr_RUMAH11_12.setVisible(true);lyr_PEMERINTAHAN_PT_25K_13.setVisible(true);lyr_SUNGAI_AR_25K_14.setVisible(true);lyr_SUNGAI_LN_25K_15.setVisible(true);lyr_JALAN_LN_25K_16.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25Kcopy_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_ANEWANGGOT_point_2,lyr_JEMBATAN_PT_25K_3,lyr_PEMUKIMAN_AR_25K_4,lyr_AGRISAWAH_AR_25K_5,lyr_NONAGRIHUTANKERING_AR_25K_6,lyr_AGRIKEBUN_AR_25K_7,lyr_ANEWANGGOT_poly_8,lyr_PENDIDIKAN_PT_25K_9,lyr_BANGUNAN_PT_25K_10,lyr_SARANAIBADAH_PT_25K_11,lyr_RUMAH11_12,lyr_PEMERINTAHAN_PT_25K_13,lyr_SUNGAI_AR_25K_14,lyr_SUNGAI_LN_25K_15,lyr_JALAN_LN_25K_16];
lyr_ADMINISTRASIDESA_AR_25Kcopy_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'RT': 'RT', 'rw': 'rw', 'RW_1': 'RW_1', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'RT': 'RT', 'rw': 'rw', 'RW_1': 'RW_1', });
lyr_ANEWANGGOT_point_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'status': 'status', 'toilets_ha': 'toilets_ha', 'access': 'access', 'health_fac': 'health_fac', 'amenity': 'amenity', 'access_roo': 'access_roo', 'healthcare': 'healthcare', 'roof_mater': 'roof_mater', 'health_f_1': 'health_f_1', 'name': 'name', 'isced_leve': 'isced_leve', 'addr_house': 'addr_house', 'health_f_2': 'health_f_2', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'opening_ho': 'opening_ho', 'toilets_di': 'toilets_di', 'natural': 'natural', 'staff_coun': 'staff_coun', 'operator_t': 'operator_t', 'shop': 'shop', 'medical_sy': 'medical_sy', 'staff_co_1': 'staff_co_1', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'government': 'government', 'waterway': 'waterway', });
lyr_JEMBATAN_PT_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMUKIMAN_AR_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRIHUTANKERING_AR_25K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNSPHN': 'JNSPHN', 'JNSHTN': 'JNSHTN', 'KRPPHN': 'KRPPHN', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'KLSLCO': 'KLSLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TKTHTN': 'TKTHTN', 'TIPHTN': 'TIPHTN', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRIKEBUN_AR_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ANEWANGGOT_poly_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'status': 'status', 'toilets_ha': 'toilets_ha', 'access': 'access', 'health_fac': 'health_fac', 'amenity': 'amenity', 'access_roo': 'access_roo', 'healthcare': 'healthcare', 'roof_mater': 'roof_mater', 'health_f_1': 'health_f_1', 'name': 'name', 'isced_leve': 'isced_leve', 'addr_house': 'addr_house', 'health_f_2': 'health_f_2', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'opening_ho': 'opening_ho', 'toilets_di': 'toilets_di', 'natural': 'natural', 'staff_coun': 'staff_coun', 'operator_t': 'operator_t', 'shop': 'shop', 'medical_sy': 'medical_sy', 'staff_co_1': 'staff_co_1', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'water': 'water', 'government': 'government', 'waterway': 'waterway', });
lyr_PENDIDIKAN_PT_25K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_BANGUNAN_PT_25K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SARANAIBADAH_PT_25K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RUMAH11_12.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_PEMERINTAHAN_PT_25K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_AR_25K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_LN_25K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_16.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'RT': '', 'rw': '', 'RW_1': '', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'RT': 'TextEdit', 'rw': 'TextEdit', 'RW_1': 'TextEdit', });
lyr_ANEWANGGOT_point_2.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'status': 'TextEdit', 'toilets_ha': 'TextEdit', 'access': 'TextEdit', 'health_fac': 'TextEdit', 'amenity': 'TextEdit', 'access_roo': 'TextEdit', 'healthcare': 'TextEdit', 'roof_mater': 'TextEdit', 'health_f_1': 'TextEdit', 'name': 'TextEdit', 'isced_leve': 'TextEdit', 'addr_house': 'TextEdit', 'health_f_2': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'opening_ho': 'TextEdit', 'toilets_di': 'TextEdit', 'natural': 'TextEdit', 'staff_coun': 'TextEdit', 'operator_t': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'staff_co_1': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'government': 'TextEdit', 'waterway': 'TextEdit', });
lyr_JEMBATAN_PT_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'TextEdit', 'TGGJMB': 'TextEdit', 'LBRJMB': 'TextEdit', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'TextEdit', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'JBTJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_NONAGRIHUTANKERING_AR_25K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'JNSPHN': 'TextEdit', 'JNSHTN': 'TextEdit', 'KRPPHN': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'KLSLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TKTHTN': 'TextEdit', 'TIPHTN': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRIKEBUN_AR_25K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ANEWANGGOT_poly_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'status': 'TextEdit', 'toilets_ha': 'TextEdit', 'access': 'TextEdit', 'health_fac': 'TextEdit', 'amenity': 'TextEdit', 'access_roo': 'TextEdit', 'healthcare': 'TextEdit', 'roof_mater': 'TextEdit', 'health_f_1': 'TextEdit', 'name': 'TextEdit', 'isced_leve': 'TextEdit', 'addr_house': 'TextEdit', 'health_f_2': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'opening_ho': 'TextEdit', 'toilets_di': 'TextEdit', 'natural': 'TextEdit', 'staff_coun': 'TextEdit', 'operator_t': 'TextEdit', 'shop': 'TextEdit', 'medical_sy': 'TextEdit', 'staff_co_1': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'water': 'TextEdit', 'government': 'TextEdit', 'waterway': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_BANGUNAN_PT_25K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_SARANAIBADAH_PT_25K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_RUMAH11_12.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_SUNGAI_AR_25K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_LN_25K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_16.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25Kcopy_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'RT': 'no label', 'rw': 'no label', 'RW_1': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'RT': 'no label', 'rw': 'no label', 'RW_1': 'no label', });
lyr_ANEWANGGOT_point_2.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'status': 'no label', 'toilets_ha': 'no label', 'access': 'no label', 'health_fac': 'no label', 'amenity': 'no label', 'access_roo': 'no label', 'healthcare': 'no label', 'roof_mater': 'no label', 'health_f_1': 'no label', 'name': 'no label', 'isced_leve': 'no label', 'addr_house': 'no label', 'health_f_2': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'opening_ho': 'no label', 'toilets_di': 'no label', 'natural': 'no label', 'staff_coun': 'no label', 'operator_t': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'staff_co_1': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'government': 'no label', 'waterway': 'no label', });
lyr_JEMBATAN_PT_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMUKIMAN_AR_25K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRIHUTANKERING_AR_25K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNSPHN': 'no label', 'JNSHTN': 'no label', 'KRPPHN': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'KLSLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TKTHTN': 'no label', 'TIPHTN': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRIKEBUN_AR_25K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ANEWANGGOT_poly_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'status': 'no label', 'toilets_ha': 'no label', 'access': 'no label', 'health_fac': 'no label', 'amenity': 'no label', 'access_roo': 'no label', 'healthcare': 'no label', 'roof_mater': 'no label', 'health_f_1': 'no label', 'name': 'no label', 'isced_leve': 'no label', 'addr_house': 'no label', 'health_f_2': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'opening_ho': 'no label', 'toilets_di': 'no label', 'natural': 'no label', 'staff_coun': 'no label', 'operator_t': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'staff_co_1': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'water': 'no label', 'government': 'no label', 'waterway': 'no label', });
lyr_PENDIDIKAN_PT_25K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_BANGUNAN_PT_25K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SARANAIBADAH_PT_25K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RUMAH11_12.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_PEMERINTAHAN_PT_25K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUNGAI_AR_25K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_LN_25K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_16.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});