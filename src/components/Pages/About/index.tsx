import { Container, Box, Stack, Button, Typography } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import AnimationBox from "@components/Animations";

import ChatImg from "@assets/imgs/icons/Chat.png";
import AfterpayImg from "@assets/imgs/icons/Afterpay.png";
import AffirmImg from "@assets/imgs/icons/Affirm.png";
import KlarnaImg from "@assets/imgs/icons/Klarna.png";
import LaybuyImg from "@assets/imgs/icons/Laybuy.png";
import PhoneImg from "@assets/imgs/Mobile.png";

const About: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#F7F8F9" }}>
      <Container sx={{ display: "flex", flexDirection: "column", py: "80px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "32px",
          }}
        >
          <AnimationBox
            option={3}
            styles={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#185ea5",
                borderRadius: "100%",
                p: "12px",
              }}
            >
              <SearchIcon sx={{ color: "#ffffff" }} />
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#091A4B",
                mt: "24px",
              }}
            >
              Simple search
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#636363",
                textAlign: "center",
                mt: "8px",
              }}
            >
              Easily search and book flights from anywhere in the world
            </Typography>
          </AnimationBox>
          <AnimationBox
            option={3}
            styles={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#185ea5",
                borderRadius: "100%",
                p: "12px",
              }}
            >
              <AirplanemodeActiveIcon sx={{ color: "#ffffff" }} />
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#091A4B",
                mt: "24px",
              }}
            >
              Unlimited choice
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#636363",
                textAlign: "center",
                mt: "8px",
              }}
            >
              Find the flight you were looking for and pay on your terms
            </Typography>
          </AnimationBox>
          <AnimationBox
            option={3}
            styles={{
              display: "flex",
              flexDirection: "column",
              flex: "1 1",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#185ea5",
                borderRadius: "100%",
                p: "12px",
              }}
            >
              <img src={ChatImg} alt="chat" />
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#091A4B",
                mt: "24px",
              }}
            >
              Expert customer service
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#636363",
                textAlign: "center",
                mt: "8px",
              }}
            >
              Dedicated customer support team once you have bookedr
            </Typography>
          </AnimationBox>
        </Box>
        <AnimationBox option={1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              bgcolor: "#fff",
              borderRadius: "16px",
              mt: "80px",
            }}
          >
            <Stack
              sx={{
                flex: "1 1",
                p: "56px",
                pr: { xs: "56px", sm: "0px", md: "56px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Buy now, pay later
              </Typography>
              <Typography
                sx={{
                  ontSize: "16px",
                  fontWeight: 400,
                  mt: "16px",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Book your flights today and spread the cost over time with one
                of our instalment options.
              </Typography>
              <Stack
                sx={{
                  display: { xs: "none", sm: "flex" },
                  mt: "40px",
                  gap: "16px",
                }}
              >
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      minWidth: "22px",
                      height: "22px",
                      bgcolor: "#10B981",
                      borderRadius: "100%",
                    }}
                  >
                    <CheckSharpIcon
                      fontSize="small"
                      sx={{ width: "12px", height: "12px", color: "#fff" }}
                    />
                  </Box>
                  <Typography>Make payments weekly or monthly</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      minWidth: "22px",
                      height: "22px",
                      bgcolor: "#10B981",
                      borderRadius: "100%",
                    }}
                  >
                    <CheckSharpIcon
                      fontSize="small"
                      sx={{ width: "12px", height: "12px", color: "#fff" }}
                    />
                  </Box>
                  <Typography>Interest free options</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      minWidth: "22px",
                      height: "22px",
                      bgcolor: "#10B981",
                      borderRadius: "100%",
                    }}
                  >
                    <CheckSharpIcon
                      fontSize="small"
                      sx={{ width: "12px", height: "12px", color: "#fff" }}
                    />
                  </Box>
                  <Typography>Fast approval</Typography>
                </Box>
                <Button
                  sx={{
                    mt: "16px",
                    maxWidth: "235px",
                    height: "54px",
                    borderRadius: "12px",
                  }}
                >
                  Browse payment methods
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                display: "flex",
                flex: { xs: "none", md: "1 1" },
                justifyContent: "center",
                alignItems: "end",
                position: "relative",
                p: { xs: "16px", md: "56px 56px 0 56px" },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    position: "absolute",
                    right: { xs: 100, md: -50 },
                    top: { xs: -70, md: "55%" },
                  }}
                >
                  <img
                    src={AffirmImg}
                    alt="AffirmImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box
                  sx={{
                    alignSelf: "end",
                    marginBottom: "7px",
                    marginRight: "-10px",
                    width: 56,
                    height: 56,
                  }}
                >
                  <img
                    src={KlarnaImg}
                    alt="KlarnaImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>

                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "end",
                    width: { xs: 200, md: 300 },
                    height: { xs: 300, md: 400 },
                    zIndex: 2,
                  }}
                >
                  <img
                    src={PhoneImg}
                    width={"100%"}
                    height={"100%"}
                    alt="phone"
                  />
                </Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    alignSelf: "start",
                    marginTop: "100px",
                    marginLeft: "-10px",
                  }}
                >
                  <img
                    src={AfterpayImg}
                    alt="AfterpayImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    width: 48,
                    height: 48,
                    left: { xs: 70, md: -50 },
                    top: { xs: "-40px", md: "75%" },
                  }}
                >
                  <img
                    src={LaybuyImg}
                    alt="LaybuyImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  position: "relative",
                  gap: "25px",
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    marginBottom: 10,
                  }}
                >
                  <img
                    src={KlarnaImg}
                    alt="KlarnaImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    marginTop: -28,
                  }}
                >
                  <img
                    src={LaybuyImg}
                    alt="LaybuyImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    marginTop: -3,
                  }}
                >
                  <img
                    src={AffirmImg}
                    alt="AffirmImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    marginTop: 2,
                  }}
                >
                  <img
                    src={AfterpayImg}
                    alt="AfterpayImg"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                display: { xs: "flex", sm: "none" },
                alignSelf: "center",
                mb: "56px",
                maxWidth: "235px",
                height: "54px",
                borderRadius: "12px",
              }}
            >
              Browse payment methods
            </Button>
          </Box>
        </AnimationBox>
      </Container>
    </Box>
  );
};

export default About;
