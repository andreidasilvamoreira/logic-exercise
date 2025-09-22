<?php 

$alunos = ["miguel", "pedro", 'luiza'];
$nota = 0;

function PassouOuNao($nota) {
    if ($nota <= 3) {
        echo "A nota está ruim" . PHP_EOL;
    } elseif ($nota <= 6) {
        echo "A nota tem que melhorar" . PHP_EOL;
    } else if ($nota <= 8) {
        echo "Bom" . PHP_EOL;
    } elseif ($nota > 8) {
        echo "Excelente" . PHP_EOL;
    }
}


foreach ($alunos as $aluno) {
    echo "Qual a nota?" . PHP_EOL;
    $nota = (float) fgets(STDIN);
    $Mensagem = PassouOuNao($nota);
    echo "$aluno $Mensagem  " . PHP_EOL; 
}

