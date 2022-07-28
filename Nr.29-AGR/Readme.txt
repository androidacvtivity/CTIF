SELECT DISTINCT 
  'Rind.'||D.RIND||': COL1='||
  NVAL(SUM(D.COL1)) ||' < COL2= '||
  NVAL(SUM(D.COL2))
  AS REZULTAT

FROM
  VW_DATA_ALL_TEMP D
WHERE
  (D.PERIOADA IN (:PERIOADA)          ) AND
  (D.CUIIO=:CUIIO                ) AND
  (D.CUIIO_VERS=:CUIIO_VERS     OR :CUIIO_VERS = -1) AND
  (D.FORM = :FORM               ) AND
  (D.FORM_VERS=:FORM_VERS ) AND
  (D.CAPITOL=:CAPITOL           OR :CAPITOL = -1) AND
  (D.CAPITOL_VERS=:CAPITOL_VERS OR :CAPITOL_VERS = -1) AND
  (D.ID_MD=:ID_MD               OR :ID_MD = -1) AND
  
  D.FORM IN (45)  AND
  D.CAPITOL IN (399,401) AND
  D.RIND IN ('1103','1104','1105','1106','1107',
              '1110','1112','1113','1115','1116','1117','1119',
              '1120','1121','1123','1124','1125','1126','1127',
              '1133','1134','1135','1136',
              '1140',

              '1213','1214','1215','1216','1218','1219',

              '1221','1224','1225',


              '1230','1232','1234','1235','1236','1237','1238',


              '1240',


              '1302','1303','1305','1306','1307','1308','1309',


              '1310','1311','1313','1314','1315','1316','1317','1318','1319',


              '1320','1321','1322','1323','1324','1325','1326','1327',


              '1401','1402','1403','1404','1405','1406','1409',



              '2101','2102','2103',


              '2201',


              '2301','2302','2305',


              '2401','2402','2403','2404','2405','2406','2407','2408','2409',

              
              '2410','2411','2412'
              
              )
GROUP BY
  D.RIND
HAVING
  NVAL(SUM(D.COL1)) <
  NVAL(SUM(D.COL2))