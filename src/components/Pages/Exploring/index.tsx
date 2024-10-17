import { Container, Box, Stack, Typography } from "@mui/joy";
import Slider from "react-slick";
import { styled } from "@mui/system";
import AnimationBox from "@components/Animations";

import PhoneImg from "@assets/imgs/Mobile_1.png";
import SliderImg1 from "@assets/imgs/explor_slide/Sydney.jpg";
import SliderImg2 from "@assets/imgs/explor_slide/GoldCoast.jpg";
import SliderImg3 from "@assets/imgs/explor_slide/Melbourne.jpg";
import SliderImg4 from "@assets/imgs/explor_slide/Brisbane.jpg";

import HeartImg from "@assets/imgs/icons/heart.png";
import WindImg from "@assets/imgs/icons/wind.png";
import PlusImg from "@assets/imgs/icons/plus.png";
import PlaneImg from "@assets/imgs/icons/plane.png";
import ShutImg from "@assets/imgs/icons/shut.png";
import LocationImg from "@assets/imgs/icons/location.png";

const ItemText = styled(Typography)({
  fontSize: "20px",
  fontWeight: "400",
  color: "#091A4B",
});

const ItemContentText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#091A4B",
});

const ItemDiv = styled(Box)({
  borderRadius: "16px",
  backgroundColor: "#fff",
  marginRight: "10px",
  width: "380px !important",
});

const CancelDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  gap: "10px",
  borderRadius: "16px",
  backgroundColor: "#F7F8F9",
  height: "90px",
});

const Exploring: React.FC = () => {
  const SliderSetting = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ bgcolor: "#F7F8F9", overflowX: "hidden" }}>
      <Container>
        <Stack>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#091A4B",
              mb: "40px",
            }}
          >
            Exploring Australia
          </Typography>
          <Box width={"140%"}>
            <Slider {...SliderSetting}>
              <AnimationBox option={2}>
                <ItemDiv>
                  <img
                    src={SliderImg1}
                    alt="SliderImg1"
                    width={"100%"}
                    height={276}
                    style={{
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <Box sx={{ p: "32px" }}>
                    <ItemText>Sydney</ItemText>
                    <ItemContentText>Australia</ItemContentText>
                  </Box>
                </ItemDiv>
              </AnimationBox>
              <AnimationBox option={2}>
                <ItemDiv>
                  <img
                    src={SliderImg3}
                    alt="SliderImg3"
                    width={"100%"}
                    height={276}
                    style={{
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <Box sx={{ p: "32px" }}>
                    <ItemText>Melbourne</ItemText>
                    <ItemContentText>Australia</ItemContentText>
                  </Box>
                </ItemDiv>
              </AnimationBox>
              <AnimationBox option={2}>
                <ItemDiv>
                  <img
                    src={SliderImg2}
                    alt="SliderImg2"
                    width={"100%"}
                    height={276}
                    style={{
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <Box sx={{ p: "32px" }}>
                    <ItemText>Brisbane</ItemText>
                    <ItemContentText>Australia</ItemContentText>
                  </Box>
                </ItemDiv>
              </AnimationBox>
              <AnimationBox option={2}>
                <ItemDiv>
                  <img
                    src={SliderImg4}
                    alt="SliderImg4"
                    width={"100%"}
                    height={276}
                    style={{
                      borderRadius: "16px 16px 0 0",
                    }}
                  />
                  <Box sx={{ p: "32px" }}>
                    <ItemText>Gold Coast</ItemText>
                    <ItemContentText>Australia</ItemContentText>
                  </Box>
                </ItemDiv>
              </AnimationBox>
            </Slider>
          </Box>
        </Stack>
        <AnimationBox option={3}>
          <Box
            sx={{
              display: "flex",
              bgcolor: "#fff",
              borderRadius: "16px",
              mt: "80px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                marginLeft: { xs: 0, md: "15%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "170px",
                  height: "48px",
                  borderRadius: "0px 0px 8px 8px ",
                  bgcolor: "#10B981",
                }}
              >
                <Typography sx={{ fontSize: "16px", color: "#ffffff" }}>
                  Recommended
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "end",
                flex: "1 1",
              }}
            >
              <img src={PhoneImg} alt="PhoneImg" width={300} height={350} />
            </Box>
            <Stack sx={{ flex: "1 1", p: "57px" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#091A4B",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Cancellation protection
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#636363",
                  mt: "16px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                During these uncertain times we recommend adding Cancellation
                protection to your booking
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  mt: "40px",
                  justifyContent: { xs: "center", sm: "space-between" },
                }}
              >
                <CancelDiv sx={{ width: { xs: 170, sm: 200, md: 140 } }}>
                  <img src={HeartImg} alt="HeartImg" width={26} height={26} />
                  <Typography sx={{ textAlign: "center" }}>Illness</Typography>
                </CancelDiv>
                <CancelDiv sx={{ width: { xs: 170, sm: 200, md: 140 } }}>
                  <img src={WindImg} alt="WindImg" width={26} height={26} />
                  <Typography sx={{ textAlign: "center" }}>Weather</Typography>
                </CancelDiv>
                <CancelDiv sx={{ width: { xs: 170, sm: 200, md: 140 } }}>
                  <img src={PlusImg} alt="PlusImg" width={26} height={26} />
                  <Typography sx={{ textAlign: "center" }}>
                    Emergency
                  </Typography>
                </CancelDiv>
                <CancelDiv sx={{ width: { xs: 170, sm: 200, md: 140 } }}>
                  <img src={PlaneImg} alt="PlaneImg" width={26} height={26} />
                  <Typography sx={{ textAlign: "center" }}>
                    Refundable Booking
                  </Typography>
                </CancelDiv>
                <CancelDiv sx={{ width: { xs: 170, sm: 200, md: 140 } }}>
                  <img src={ShutImg} alt="ShutImg" width={26} height={26} />
                  <Typography sx={{ textAlign: "center" }}>
                    Mechanical Breakdown
                  </Typography>
                </CancelDiv>
                <CancelDiv sx={{ width: { xs: 170, sm: 200, md: 140 } }}>
                  <img
                    src={LocationImg}
                    alt="LocationImg"
                    width={26}
                    height={26}
                  />
                  <Typography sx={{ textAlign: "center" }}>
                    Plus much much more
                  </Typography>
                </CancelDiv>
              </Box>
            </Stack>
          </Box>
        </AnimationBox>
      </Container>
    </Box>
  );
};

export default Exploring;
