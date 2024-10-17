import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Dropdown,
  Menu,
  MenuItem,
  MenuButton,
} from "@mui/joy";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AnimationBox from "@components/Animations";

import logoImg from "@assets/imgs/Logo.png";

const HeaderText = styled(Typography)({
  fontWeight: "400",
  fontSize: "1.2rem",
  lineHeight: "1.5rem",
  color: "#636363",
});

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: scrollY >= 300 ? "fixed" : "unset",
        width: "100%",
        top: 0,
        bgcolor: "#fff",
        zIndex: 10,
        boxShadow: "1px 2px 10px 1px #00000054",
      }}
    >
      <Container>
        <AnimationBox option={1}>
          <Box
            sx={{
              top: 0,
              left: 0,
              width: "100%",
              boxSizing: "border-box",
              zIndex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: { xs: "32px 22px", md: "24px 0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={logoImg} alt="logo" width={132} height={40} />

              <Box
                sx={{ display: { xs: "none", md: "flex" }, ml: "40px", gap: 1 }}
              >
                <Dropdown>
                  <MenuButton variant="plain">
                    <HeaderText>Book flights</HeaderText>
                    <KeyboardArrowDownIcon />
                  </MenuButton>
                  <Menu variant="plain">
                    <MenuItem>Add item</MenuItem>
                  </Menu>
                </Dropdown>
                <Dropdown>
                  <MenuButton variant="plain">
                    <HeaderText>Information</HeaderText>
                    <KeyboardArrowDownIcon />
                  </MenuButton>
                  <Menu variant="plain">
                    <MenuItem>Add item</MenuItem>
                  </Menu>
                </Dropdown>
                <Dropdown>
                  <MenuButton variant="plain">
                    <HeaderText>Help</HeaderText>
                    <KeyboardArrowDownIcon />
                  </MenuButton>
                  <Menu variant="plain">
                    <MenuItem>Add item</MenuItem>
                  </Menu>
                </Dropdown>
                <Dropdown>
                  <MenuButton variant="plain">
                    <HeaderText>Travel Agents</HeaderText>
                  </MenuButton>
                </Dropdown>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Dropdown>
                <MenuSharpIcon sx={{}} />
              </Dropdown>
            </Box>
            <HeaderText sx={{ display: { xs: "none", md: "flex" } }}>
              Manage Booking
            </HeaderText>
          </Box>
        </AnimationBox>
      </Container>
    </Box>
  );
};

export default Header;
