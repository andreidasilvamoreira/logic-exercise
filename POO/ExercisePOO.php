<?php

class Item
{
    public string $nome;
    public int $id;
    public bool $ativo;

    public function __construct(int $id, string $nome, bool $ativo)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->ativo = $ativo;
    }
}

$itens = [
    new Item(1, "Caneta", true),
    new Item(2, "Caderno", true),
    new Item(3, "Lápis", false),
];
//cria uma lista só de nomes
$nomes = array_map(fn($item) => $item->nome, $itens);

$ativos = array_filter($itens, fn($item) => $item->ativo);


foreach ($itens as $item) {
    echo "ID: {$item->id}, Nome: {$item->nome}, Ativo: " . ($item->ativo ? "Sim" : "Não") . "\n";
}
//seleciona quem ta ativo
foreach ($ativos as $itemAtivo) {
    echo "{$itemAtivo->nome} está  " . ($itemAtivo->ativo ? "ativo" : "false")  . "\n";
}


print_r($itemAtivo);
