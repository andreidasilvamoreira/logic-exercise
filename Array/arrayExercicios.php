<?php 

$matriz = [
    [ 
        [10, 20, 30],     
        [40, 50, 60]     
    ],
    [ 
        [70, 80, 90],     
        [100, 110, 120]  
    ],
    [ 
        [130, 140, 150],  
        [160, 170, 180]  
    ]
];

echo $matriz[1][0][2];
echo $matriz[2][1][1];
$resultado = $matriz[0][1][2] + $matriz[2][0][1];

foreach($matriz as $linha){
    foreach($linha as $itens){
        foreach($itens as $item) {
            print_r($item);
        }
    }
};

