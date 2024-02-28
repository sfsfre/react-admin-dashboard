import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PlaylistAddCheckSharpIcon from '@mui/icons-material/PlaylistAddCheckSharp';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ role = "resto" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(role === 'admin' ? "Dashboard" : "PageResto");
  const navigate = useNavigate();

  const handleImageClick = () => {
    role === 'admin' ? navigate('/Profile') : navigate ('/ProfilResto');
  };

  const adminItems = [
    { title: "Tableau de bord", to: "/", icon: <HomeOutlinedIcon /> },
    { title: "Gérer Consommateurs", to: "/contacts", icon: <SupervisorAccountIcon /> },
    { title: "Gérer Restaurants", to: "/listeResto", icon: <RestaurantIcon /> },
    { title: "Gérer Livreur", to: "/listeLivreur", icon: <DeliveryDiningIcon /> },

  ];

  const restoItems = [
    { title: "Tableau de bord", to: "/", icon: <HomeOutlinedIcon /> },
    { title: "Gérer Menu", to: "/MenuPage", icon: <RestaurantMenuOutlinedIcon /> },
    { title: "Suivre les Commandes", to: "/SuivreCde", icon: <PlaylistAddCheckSharpIcon /> },
    { title: "Gérer Livreur", to: "/listeLivreur", icon: <DeliveryDiningIcon /> },

  ];

  const items = role === 'admin' ? adminItems : restoItems;

  return (
    <div>
      <Box
       sx={{
        height: "145vh", // Set the height to 100% of the viewport height
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "0px 20px 40px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "30px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >                                                                  
                  <Typography variant="h3" color={colors.grey[100]}>
                    {role === 'admin' ? "ADMINISTRATEUR" : "RESTAURANT"}
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  {role === 'admin' ? (
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={`../../assets/USER.PNG`}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                      onClick={handleImageClick}
                    />
                  ) : (
                    <>
                      <img
                        alt="restaurant"
                        width="100px"
                        height="100px"
                        src={`../../assets/resto.png`}
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                        onClick={handleImageClick}
                      />
                      <Box textAlign="center">
                        <Typography
                          variant="h2"
                          color={colors.grey[100]}
                          fontWeight="bold"
                          sx={{ m: "50px 0 0 0" }}
                        >
                          
                        </Typography>
                        {/* Add additional restaurant-specific details here */}
                        {/* Example: <Typography variant="h5" color={colors.greenAccent[500]}>
                                        Restaurant Details
                                     </Typography> */}
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            )}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              {items.map((item, index) => (
                <Item
                  key={index}
                  title={item.title}
                  to={item.to}
                  icon={item.icon}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </div>
  );
};

export default Sidebar;
