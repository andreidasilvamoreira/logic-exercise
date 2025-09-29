<?php

class ItensBiblioteca
{
    protected string $titulo;
    private bool $disponivel;
    protected DateTime $dataEmprestimo;
    protected int $contadorEmprestimo;

    public function __construct($titulo)
    {
        $this->disponivel = true;
        $this->titulo = $titulo;
    }
    public function emprestar() : void
    {
        if ($this->disponivel === true) {
            $this->disponivel = false;
            $this->contadorEmprestimo++;
            $this->dataEmprestimo = new DateTime();
            echo "O livro foi emprestado";
        } else {
            echo "o livro ja foi emprestado";
        }

    }

    public function getTitulo() : string {
        return $this->titulo;
    }
    public function devolver() : void
    {
        if ($this->disponivel === false) {
            $this->disponivel = true;
            echo "O livro foi devolvido!\n";
        } else {
            echo "O livro já está disponível na biblioteca!\n";
        }
    }

    public function getDisponivel()  : bool {
        return $this->disponivel;
    }

    public function getContadorEmprestimo() : int {
        return $this->contadorEmprestimo;
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

    public function emprestar() : void
    {
        echo "A revista foi emprestada!";
    }

    public function devolver() : void
    {
        echo "A revista foi devolvida!";
    }
}

class Usuario {
    protected string $usuario;
    protected string $senha;
    private int $id;
    protected array $historico = [];

    public function __construct($usuario, $senha){
        $this->usuario = $usuario;
        $this->id = rand(1, 1000);
        $this->senha = $senha;
    }

    public function autenticar(string $senha) {
        if($this->senha === $senha) {
            return "acesso permitido";
        } else {
            return "senha errada";
        }
    }

    public function registrarEmprestimo(ItensBiblioteca $item) {
          $this->historico[] = $item->getTitulo();
    }
    public function getHistorico() : array {
        return $this->historico;
    }

}
class Biblioteca {

}

$usuario = new Usuario("dedei", "123abc");

