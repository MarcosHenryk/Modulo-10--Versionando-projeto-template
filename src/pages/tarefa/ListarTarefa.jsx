import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'tarefa', headerName: 'Tarefa', width: 200 },
  {
    field: 'concluido',
    headerName: 'Concluido',
    renderCell:(params) => (
      params.value ? 'Sim' : 'Não'
    ),
    width: 130,
  },
  

];

const rows = [
  { id: 1, nome: 'Alberto Santana', tarefa: 'Limpar estoque', concluido: true },
  { id: 2, nome: 'Maria do Carmo', tarefa: 'Fazer contagem de itens', concluido: true },
  { id: 3, nome: 'Lucas Abreu', tarefa: 'Preparar relatório', concluido: false },
  { id: 4, nome: 'João Neves', tarefa: 'Testar novos produtos', concluido: true },
 
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
