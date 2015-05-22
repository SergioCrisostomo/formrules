function applyRules(rules) {
    // this deve ser o elemento input
    var prop = this.name;
    if (!prop) return;
    Object.keys(regras).forEach(function (regra) {
        var regrasLocais = Object.keys(regras[regra]);
        var target = document.querySelector('[name="' + regra + '"');
        var valores = regrasLocais.map(function (nome) {
            return document.querySelector('[name="' + nome + '"').value;
        });
        var valida = valores.filter(function (value, i) {
            var original = regras[regra][regrasLocais[i]];
            if (typeof original == 'string') return value == original;
            return original(value);
        });
        if (valida.length == regrasLocais.length) target.classList.remove('invalido');
        else target.classList.add('invalido');
    });
}
