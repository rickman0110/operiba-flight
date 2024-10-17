import {
  Container,
  Box,
  Stack,
  Typography,
  Button,
  Switch,
  Divider,
} from "@mui/joy";
import { styled } from "@mui/system";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AnimationBox from "@components/Animations";

import TopImg from "@assets/imgs/Background_Image.png";
import StarImg from "@assets/imgs/icons/Shape.png";

const CommonButton = styled(Button)({
  minWidth: "80px",
  height: "42px",
  fontSize: 14,
  fontWeight: 500,
});

const CommonDiv = styled(Box)({
  padding: "16px 32px",
  marginTop: "16px",
  border: "1px solid #E6E9F0",
  borderRadius: "0px 8px 8px 0px",
  height: "40px",
  flex: "1 1",
  position: "relative",
});

const Home: React.FC = () => {
  return (
    <AnimationBox
      option={1}
      styles={{
        backgroundImage: `url(${TopImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <Container>
        <Stack id="Home" sx={{ py: 5, alignItems: "center" }}>
          <Stack sx={{ gap: "16px", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 500,
                color: "#091A4B",
                textAlign: "center",
              }}
            >
              Search and book flights to Australia
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#091A4B",
              }}
            >
              Buy your flights now and pay later
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", mt: "40px", gap: "1.6px" }}>
            {[0, 1, 2, 3, 4].map((x: number) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "#00B67A",
                    padding: "2px",
                  }}
                >
                  <img src={StarImg} alt={`start${x}`} />
                </Box>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", gap: "8px", mt: "13px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#091A4B",
              }}
            >
              TrustScore 4.5
            </Typography>
            <Divider orientation="vertical" color="#091A4B" />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#091A4B",
              }}
            >
              6,500 reviews
            </Typography>
          </Box>
          <Stack
            sx={{
              width: "100%",
              bgcolor: "#fff",
              boxShadow: "0px 4px 20px #00000029",
              borderRadius: 16,
              p: "16px",
              mt: "40px",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: "8px" }}>
                <CommonButton>Return</CommonButton>
                <CommonButton variant="outlined" color="neutral">
                  One way
                </CommonButton>
                <CommonButton variant="outlined" color="neutral">
                  Multi-city
                </CommonButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography>Direct flights only</Typography>
                <Switch variant="solid" color="neutral" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "8px",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flex: "3 3",
                  gap: { xs: "8px", sm: "0px" },
                }}
              >
                <CommonDiv sx={{ borderRadius: "8px 0px 0px 8px" }}>
                  <Typography
                    sx={{ fontSize: "10px", fontWeight: 400, color: "#636363" }}
                  >
                    Where from?
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#091A4B" }}
                  >
                    London (LON)?
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      display: { xs: "none", sm: "flex" },
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#fff",
                      borderRadius: "100%",
                      border: "1px solid #E6E9F0",
                      p: "10px",
                      width: "32px",
                      height: "32px",
                      right: -25,
                      bottom: 10,
                      zIndex: 1,
                    }}
                  >
                    <SyncAltIcon fontSize="small" />
                  </Box>
                </CommonDiv>
                <CommonDiv sx={{ mt: { xs: 0, sm: "16px" } }}>
                  <Typography
                    sx={{ fontSize: "10px", fontWeight: 400, color: "#636363" }}
                  >
                    Where from?
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#091A4B" }}
                  >
                    London (LON)?
                  </Typography>
                </CommonDiv>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  flex: "3 3",
                  gap: { xs: "8px", sm: "0px" },
                }}
              >
                <CommonDiv
                  sx={{ borderRadius: "8px", mt: { xs: 0, sm: "16px" } }}
                >
                  <Typography
                    sx={{ fontSize: "10px", fontWeight: 400, color: "#636363" }}
                  >
                    Where from?
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#091A4B" }}
                  >
                    London (LON)?
                  </Typography>
                </CommonDiv>
                <CommonDiv
                  sx={{ borderRadius: "8px", mt: { xs: 0, sm: "16px" } }}
                >
                  <Typography
                    sx={{ fontSize: "10px", fontWeight: 400, color: "#636363" }}
                  >
                    Where from?
                  </Typography>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 400, color: "#091A4B" }}
                  >
                    London (LON)?
                  </Typography>
                </CommonDiv>
              </Box>
              <CommonButton
                sx={{
                  mt: "16px",
                  width: { xs: "100%", md: "170px" },
                  height: { xs: "54px", md: "auto" },
                }}
              >
                Search flights
              </CommonButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </AnimationBox>
  );
};

export default Home;
