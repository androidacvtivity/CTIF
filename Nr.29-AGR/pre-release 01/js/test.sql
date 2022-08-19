SELECT
DECODE(CC.NR_COLUMN, '1', 'COL1 ', '2', 'COL2 ', '3', 'COL3 ', '4', 'COL4 ', '5', 'COL5 ')||': '|| 
  NVAL(SUM(CASE WHEN D.RIND IN ('1140') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END)) ||' < '||
  NVAL(SUM(CASE WHEN D.RIND IN ('1104','1105','1106','1107','1110','1112','1113','1115','1117','1120','1121',
             '1123','1124','1125','1126','1127','1133','1135') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END))
  AS REZULTAT

FROM
  VW_DATA_ALL_TEMP D,             
       (                                                                        
       SELECT '1' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '2' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '3' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '4' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '5' AS NR_COLUMN FROM DUAL                                 
       ) CC  
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
  D.CAPITOL IN (399) AND
  D.RIND IN ('1140','1104','1105','1106','1107','1110','1112','1113','1115','1117','1120','1121',
             '1123','1124','1125','1126','1127','1133','1135')
GROUP BY
  CC.NR_COLUMN
HAVING
  NVAL(SUM(CASE WHEN D.RIND IN ('1140') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END)) <> 
  NVAL(SUM(CASE WHEN D.RIND IN ('SELECT
DECODE(CC.NR_COLUMN, '1', 'COL1 ', '2', 'COL2 ', '3', 'COL3 ', '4', 'COL4 ', '5', 'COL5 ')||': '|| 
  NVAL(SUM(CASE WHEN D.RIND IN ('1140') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END)) ||' < '||
  NVAL(SUM(CASE WHEN D.RIND IN ('1104','1105','1106','1107','1110','1112','1113','1115','1117','1120','1121',
             '1123','1124','1125','1126','1127','1133','1135') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END))
  AS REZULTAT

FROM
  VW_DATA_ALL_TEMP D,             
       (                                                                        
       SELECT '1' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '2' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '3' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '4' AS NR_COLUMN FROM DUAL UNION                                  
       SELECT '5' AS NR_COLUMN FROM DUAL                                 
       ) CC  
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
  D.CAPITOL IN (399) AND
  D.RIND IN ('1140','1104','1105','1106','1107','1110','1112','1113','1115','1117','1120','1121',
             '1123','1124','1125','1126','1127','1133','1135')
GROUP BY
  CC.NR_COLUMN
HAVING
  NVAL(SUM(CASE WHEN D.RIND IN ('1140') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END)) <> 
  NVAL(SUM(CASE WHEN D.RIND IN ('1104','1105','1106','1107','1110','1112','1113','1115','1117','1120','1121',
             '1123','1124','1125','1126','1127','1133','1135') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END))','1105','1106','1107','1110','1112','1113','1115','1117','1120','1121',
             '1123','1124','1125','1126','1127','1133','1135') THEN DECODE(CC.NR_COLUMN, '1', D.COL1, '2', D.COL2, '3', D.COL3, '4', D.COL4, '5', D.COL5) END))