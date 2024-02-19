// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { Link } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "./theme";
// import PlaylistAddCheckSharpIcon from '@mui/icons-material/PlaylistAddCheckSharp';
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
// import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const SidebarRes = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("DashboardResto");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: `${colors.primary[400]} !important`,
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#868dfb !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               margin: "10px 0 20px 0",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography variant="h4" color={colors.grey[100]}>
//                   Restaurent
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">
//                 <img
//                   alt="profile-user"
//                   width="100px"
//                   height="100px"
//                   src={`../../assets/téléchargement.jpeg`}
//                   style={{ cursor: "pointer", borderRadius: "50%" }}
//                 />
//               </Box>
//               <Box textAlign="center">
//                 <Typography
//                   variant="h2"
//                   color={colors.grey[100]}
//                   fontWeight="bold"
//                   sx={{ m: "10px 0 0 0" }}
//                 >
                  
//                 </Typography>
//                 <Typography variant="h5" color={colors.greenAccent[500]}>
//                   Miam's
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Gérer Menu"
//               to="/"
//               icon={<RestaurantMenuOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
              
//             </Typography>
//               <Item
//               title="Suivre les Commandes "
//               to="/Commande"
//               icon={<PlaylistAddCheckSharpIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
              
//             </Typography>
//             <Item
//             title="Gérer Livreurs "
//             to="/ListeLivreurs"
//             icon={<DeliveryDiningIcon />}
//             selected={selected}
//             setSelected={setSelected}
//           />
//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
              
        
//             </Typography>
//             <Item
//               title="Paramétre"
//               to="/"
//               icon={<SettingsOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

            
//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default SidebarRes;
