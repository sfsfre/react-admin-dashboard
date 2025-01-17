import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AddCircleOutline, Delete, Edit, Search } from "@mui/icons-material";
import Header from '../../components/Header';



const initialResto = [
  {
    id: 1,
    nom: "Miam's",
    email: "miamsSousse@gmail.com",
    contact: "(216)52323073",
    city: "Hammem sousse",
    address: "Route de la plage hammem sousse,4050",
    date: new Date().toLocaleDateString(),
  },
];

const Liste = () => {

  const [listeResto, setListeResto] = useState(initialResto); 
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddClick = () => {
    setDialogOpen(true);
    setSelectedItem({});
  };

  const handleEditClick = (item) => {
    setDialogOpen(true);
    setSelectedItem(item);
  };

  const handleDeleteClick = (id) => {
    setListeResto(listeResto.filter((item) => item.id !== id));  // Utiliser le nom correct
  };

  const handleSave = (newItem) => {
    if (selectedItem.id) {
      // Editing existing item
      setListeResto(listeResto.map((item) => (item.id === selectedItem.id ? newItem : item)));
    } else {
      // Adding new item
      setListeResto([...listeResto, { ...newItem, id: Date.now() }]);
    }
    setDialogOpen(false);
  };

  const handleSearch = () => {
    // Perform search logic based on the searchTerm
    // For simplicity, this example filters menu items containing the searchTerm in their name
    const filteredResto = listeResto.filter((item) =>
      item.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setListeResto(filteredResto);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Liste " subtitle="Liste des Restaurents" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box mb={{ xs: 2, sm: 0 }}>
          <TextField
            label="Rechercher un Restaurent"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={{ xs: 2, sm: 0 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutline />}
            onClick={handleAddClick}
          >
            Ajouter un Restaurent
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Matricule </TableCell>
              <TableCell>Nom Resto</TableCell>
              <TableCell>Téléphone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Région</TableCell>
              <TableCell>Addresse</TableCell>
              <TableCell>Date D'inscription</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listeResto.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nom}</TableCell>
                <TableCell>{item.contact}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(item)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(item.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{selectedItem.id ? "Modifier Restaurent" : "Ajouter Restaurent"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Nom Resto"
            variant="outlined"
            fullWidth
            margin="normal"
            value={selectedItem.nom || ""}
            onChange={(e) => setSelectedItem({ ...selectedItem, nom: e.target.value })}
          />
          <TextField
            label="Téléphone"
            variant="outlined"
            fullWidth
            margin="normal"
            value={selectedItem.contact || ""}
            onChange={(e) => setSelectedItem({ ...selectedItem, contact: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={selectedItem.email || ""}
            onChange={(e) => setSelectedItem({ ...selectedItem, email: e.target.value })}
          />
          <TextField
            label="Région"
            variant="outlined"
            fullWidth
            margin="normal"
            value={selectedItem.city || ""}
            onChange={(e) => setSelectedItem({ ...selectedItem, city: e.target.value })}
          />
          <TextField
            label="Adresse"
            variant="outlined"
            fullWidth
            margin="normal"
            value={selectedItem.address || ""}
            onChange={(e) => setSelectedItem({ ...selectedItem, address: e.target.value })}
          />
          <TextField
            label="Date d'inscription"
            variant="outlined"
            fullWidth
            margin="normal"
            value={selectedItem.date || ""}
            onChange={(e) => setSelectedItem({ ...selectedItem, date: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annuler</Button>
          <Button color="primary" onClick={() => handleSave(selectedItem)}>
            Sauvegarder
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Liste;
