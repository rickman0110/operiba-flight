import { Box, Button, Stack, Typography } from "@mui/joy";
import Slider from "react-slick";
import { styled } from "@mui/system";
import AnimationBox from "@components/Animations";

import BlogImg1 from "@assets/imgs/adventure_slide/Blog1.png";
import BlogImg2 from "@assets/imgs/adventure_slide/Blog2.png";
import BlogImg3 from "@assets/imgs/adventure_slide/Blog3.png";

const ItemDiv = styled(Box)({
  borderRadius: "16px",
  backgroundColor: "#fff",
  marginRight: "10px",
  width: "380px !important",
});

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

const Blog: React.FC = () => {
  const SliderSetting = {
    speed: 500,
    slidesToShow: 1,
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
        breakpoint: 870,
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
    <Stack sx={{ bgcolor: "#F7F8F9", py: "80px", overflowX: "hidden" }}>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#005AA9",
          textAlign: "center",
        }}
      >
        Blog
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          color: "#091A4B",
          textAlign: "center",
        }}
      >
        Alternative adventures
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" }, mt: "40px" }}>
        <Slider {...SliderSetting}>
          <Stack
            sx={{
              display: "flex !important",
              justifyContent: "space-between",
              backgroundImage: `url(${BlogImg1})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: { xs: "600px !important", md: "875px !important" },
              height: { xs: "400px !important", md: "475px !important" },
              padding: "56px",
              borderRadius: "16px",
              marginInline: "30px",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 500, color: "#FFFFFF" }}
              >
                Destinations
              </Typography>
              <Typography
                sx={{
                  mt: "16px",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                The most beautiful locations around the world that you don’t
                want to miss
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                mt: "16px",
                width: "235px",
                height: "54px",
                borderRadius: "12px",
                color: "#fff",
                "&:hover": { color: "#000" },
              }}
            >
              React Blog Article
            </Button>
          </Stack>
          <Stack
            sx={{
              display: "flex !important",
              justifyContent: "space-between",
              backgroundImage: `url(${BlogImg2})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: { xs: "600px !important", md: "875px !important" },
              height: { xs: "400px !important", md: "475px !important" },
              padding: "56px",
              borderRadius: "16px",
              marginInline: "30px",
            }}
          >
            <Box sx={{ p: "32px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 500, color: "#FFFFFF" }}
              >
                Destinations
              </Typography>
              <Typography
                sx={{
                  mt: "16px",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                The most beautiful locations around the world that you don’t
                want to miss
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                mt: "16px",
                width: "235px",
                height: "54px",
                borderRadius: "12px",
                color: "#fff",
                "&:hover": { color: "#000" },
              }}
            >
              React Blog Article
            </Button>
          </Stack>
          <Stack
            sx={{
              display: "flex !important",
              justifyContent: "space-between",
              backgroundImage: `url(${BlogImg3})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: { xs: "600px !important", md: "875px !important" },
              height: { xs: "400px !important", md: "475px !important" },
              padding: "56px",
              borderRadius: "16px",
              marginInline: "30px",
            }}
          >
            <Box sx={{ p: "32px" }}>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 500, color: "#FFFFFF" }}
              >
                Travel tips
              </Typography>
              <Typography
                sx={{
                  mt: "16px",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                What to take with you for the ultimate European adventure
              </Typography>
            </Box>
            <Button
              variant="outlined"
              sx={{
                mt: "16px",
                width: "235px",
                height: "54px",
                borderRadius: "12px",
                color: "#fff",
                "&:hover": { color: "#000" },
              }}
            >
              React Blog Article
            </Button>
          </Stack>
        </Slider>
      </Box>
      <Box
        sx={{ width: "140%", display: { xs: "block", sm: "none", mt: "40px" } }}
      >
        <Slider {...SliderSetting}>
          <AnimationBox option={2}>
            <ItemDiv>
              <img
                src={BlogImg1}
                alt="BlogImg1"
                width={"100%"}
                height={276}
                style={{
                  borderRadius: "16px 16px 0 0",
                }}
              />
              <Box sx={{ p: "32px" }}>
                <ItemText>Destinations</ItemText>
                <ItemContentText>
                  The most beautiful locations around the world that you don’t
                  want to miss
                </ItemContentText>
              </Box>
            </ItemDiv>
          </AnimationBox>
          <AnimationBox option={2}>
            <ItemDiv>
              <img
                src={BlogImg2}
                alt="BlogImg2"
                width={"100%"}
                height={276}
                style={{
                  borderRadius: "16px 16px 0 0",
                }}
              />
              <Box sx={{ p: "32px" }}>
                <ItemText>Destinations</ItemText>
                <ItemContentText>
                  The most beautiful locations around the world that you don’t
                  want to miss
                </ItemContentText>
              </Box>
            </ItemDiv>
          </AnimationBox>
          <AnimationBox option={2}>
            <ItemDiv>
              <img
                src={BlogImg3}
                alt="BlogImg3"
                width={"100%"}
                height={276}
                style={{
                  borderRadius: "16px 16px 0 0",
                }}
              />
              <Box sx={{ p: "32px" }}>
                <ItemText>Travel tips</ItemText>
                <ItemContentText>
                  What to take with you for the ultimate European adventure
                </ItemContentText>
              </Box>
            </ItemDiv>
          </AnimationBox>
        </Slider>
      </Box>
    </Stack>
  );
};

export default Blog;
