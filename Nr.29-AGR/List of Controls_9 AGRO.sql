SELECT 
      L.CONTROL,
      L.FORMULA,
      L.SQL_TEXT,
      L.PRIORITATEA,
      L.STATUT
      
      
        
        FROM

( 

SELECT 
      L.CONTROL,
      L.FORMULA,
      L.SQL_TEXT,
      L.PRIORITATEA,
      L.STATUT
      
      
        
        FROM

( 
SELECT 
      B.CONTROL,
      B.FORMULA,
      B.SQL_TEXT,
      B.PRIORITATEA,
      B.STATUT
      
      
        
        FROM CIS2.MD_CONTROL B  INNER JOIN (
        SELECT 
        A.CONTROL, 
        MAX(A.CONTROL_VERS) CONTROL_VERS
        
        FROM CIS2.MD_CONTROL A
        
        
         WHERE
         1=1
         AND A.FORM  = 39
         
         AND A.CONTROL_VERS <=:pPERIOADA 
               
         GROUP BY 
          A.CONTROL
         
         ORDER BY 
          A.CONTROL
        
        )  A  ON A.CONTROL = B.CONTROL AND A.CONTROL_VERS = B.CONTROL_VERS   
        
        
         WHERE
         1=1
         AND B.FORM  = 39
         AND B.STATUT <> '3'
         
        
        
               
         
         
         ORDER BY 
          B.CONTROL ) L
          
--          WHERE 
--          1=1
--          AND L.FORMULA LIKE '%=%'
          ) L
          
--            WHERE 
--         1=1  
--          
--         AND  L.FORMULA  NOT LIKE '%>=%'
--          AND 
--          L.FORMULA  NOT LIKE '%=>%'