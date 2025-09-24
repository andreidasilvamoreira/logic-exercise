<?php

class ItensBiblioteca
{
    protected $titulo;
    private $disponivel;

    public function __construct($titulo)
    {
        $this->disponivel = true;
        $this->titulo = $titulo;
    }
    public function emprestar()
    {
        if ($this->disponivel === true) {
            $this->disponivel = false;
            echo "O livro foi emprestado";
        } else {
            echo "o livro ja foi emprestado";
        }
    }

    public function devolver()
    {
        if ($this->disponivel === false) {
            $this->disponivel = true;
            echo "O livro foi devolvido!\n";
        } else {
            echo "O livro já está disponível na biblioteca!\n";
        }
    }

    public function getDisponivel() {
        return $this->disponivel;
    }
}

class Livro extends ItensBiblioteca
{
    protected $autor;
    protected int $ano;
    public function __construct($titulo, $autor, $ano)
    {
        parent::__construct($titulo);
        $this->autor = $autor;
        $this->ano = $ano;
    }
    public function exibirInfo()
    {
        $status = $this->getDisponivel() ? "Disponível" : "Emprestado";
        return "Título: {$this->titulo} | Autor: {$this->autor} | Ano: {$this->ano} | Status: {$status}\n";
    }

}

class Revista extends ItensBiblioteca
{
    protected $autor;
    protected $ano;

    public function emprestar()
    {
        echo "A revista foi emprestada!";
    }

    public function devolver()
    {
        echo "A revista foi devolvida!";
    }
}

$objeto = new Livro("Harry Potter", "João", 2014);
echo $objeto->exibirInfo();

$objeto->emprestar();

$objeto->devolver();
