import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
 import { tokens } from '../../theme';
import { mockDataListe } from '../../data/mockData';
import Header from '../../components/Header';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDialog from '../../components/EditDialog'; // Assurez-vous que le chemin est correct
import DeleteDialog from '../../components/DeleteDialog'; // Assurez-vous que le chemin est correct
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";


const Liste = () => {
  const theme = useTheme();
  const colors= tokens(theme.palette.mode);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const openEditDialog = (id) => {
    // Logique de récupération des données et ouverture du dialogue de modification
    setEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    // Logique de fermeture du dialogue de modification
    setEditDialogOpen(true);
  };

  const openDeleteDialog = (id) => {
    // Logique de récupération des données et ouverture du dialogue de suppression
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    // Logique de fermeture du dialogue de suppression
    setDeleteDialogOpen(false);
  };

  
  const handleEdit = (id) => {
    openEditDialog(id);
  };

  const handleDelete = (id) => {
    openDeleteDialog(id);
  };

  const columns = [
    { field: "id", headerName: "id" },
    {
      field: "nom",
      headerName: "Nom Resto",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contact",
      headerName: "Téléphone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Région",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date D'inscription ",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <IconButton
            color="scondary"
            aria-label="modifier"
            onClick={() => handleEdit(params.id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            aria-label="supprimer"
            onClick={() => handleDelete(params.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ),
    }, 
  ];

  return (
    <Box m="20px">
      <Header title="Liste " subtitle="Liste des Restaurents" />
      <Box display="flex" justifyContent="end" mt="30px">
              <Link
               to={"/form"}
               
                 // Désactive le bouton pendant la soumission
              >
               <Button variant="contained" color="success"> Ajouter un Resto </Button>
              </Link>
            </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
        
      >
        <DataGrid checkboxSelection rows={mockDataListe} columns={columns} />
        
      </Box>
      <EditDialog open={editDialogOpen} onClose={closeEditDialog} />
      <DeleteDialog open={deleteDialogOpen} onClose={closeDeleteDialog} />
    </Box>
  );
};

export default Liste;
