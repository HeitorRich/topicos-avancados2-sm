function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() === "") {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (titulo.length < 5) {
        throw new Error("O título não pode ter menos que 5 caracters");
    }

    if (titulo.length > 100) {
        throw new Error("O título não pode ter mais que 100 caracters");
    }

    return true;
}

export default validarChamado;