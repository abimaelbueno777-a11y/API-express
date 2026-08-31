import express from 'express';

const app = express();
const PORT = 3000;

const usuarios = [
    {id: 1, nome: 'Alice'},
    {id: 2, nome: 'Bob'}
]
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Express!');
});

app.get('/usuarios', (req, res) =>{
    res.json(usuarios);
})

app.post('/usuarios', () =>{
    const novoUsuario = {
        id: usuarios.length +1,
        nome: 'Lucas'
    }
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.get('/usuarios/:id', (req, res) =>{
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id === parseInt(id));
    if (!usuario) {
        return res.status(404).json({error: "Usuários não encontrado!"})
    }
    res.json(usuario)
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
