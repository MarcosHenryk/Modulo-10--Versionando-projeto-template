import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    return (
        <><Grid item xs={12}>
            <FormControl fullWidth>
                <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value); } } />
                <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
            </FormControl>
        </Grid><Grid item xs={12}>
                <FormControl fullWidth>
                    <Input id="tarefa_descricao" aria-describedby="tarefa_descricao_helper_text" value={descricaoTarefa} onChange={e => { setDescricaoTarefa(e.target.value); } } />
                    <FormHelperText id="tarefa_descricao_helper_text">Descrição da Tarefa.</FormHelperText>
                </FormControl>
            </Grid></>
    );
}
    export default Login; 