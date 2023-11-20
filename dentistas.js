var dataRef = new Firebase('https://clinica-odontologica-5ef6e-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'dentistas') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#tbdentistas tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.atuação}</td> +
    
                        <td>${value2.horario}</td> +

                        <td>${value2.mestre_em}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});

