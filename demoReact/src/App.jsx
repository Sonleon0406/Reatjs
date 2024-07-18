import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, Divider, Paper, IconButton, Grid } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription('');
      setAmount('');
    }
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Paper elevation={3} style={{ padding: '2rem', borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Quản Lý Chi Tiêu
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              label="Mô tả"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Số tiền"
              fullWidth
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAddExpense}
              startIcon={<Add />}
            >
              Thêm Chi Tiêu
            </Button>
          </Grid>
        </Grid>
        <List style={{ marginTop: '1rem' }}>
          {expenses.map((expense, index) => (
            <div key={index}>
              <ListItem>
                <ListItemText primary={expense.description} secondary={`$${expense.amount.toFixed(2)}`} />
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteExpense(index)}>
                  <Delete />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
        <Typography variant="h6" align="right" style={{ marginTop: '1rem' }}>
          Tổng cộng: ${expenses.reduce((acc, expense) => acc + expense.amount, 0).toFixed(2)}
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;
