import { Suspense, lazy } from "react";
import { Skeleton, Stack } from "@mui/joy";

const Header = lazy(() => import("@components/Pages/Header"));
const Home = lazy(() => import("@components/Pages/Home"));
const About = lazy(() => import("@components/Pages/About"));
const Exploring = lazy(() => import("@components/Pages/Exploring"));
const Blog = lazy(() => import("@components/Pages/Blog"));

const Main = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Stack>
        <Header />
        <Home />
        <About />
        <Exploring />
        <Blog />
      </Stack>
    </Suspense>
  );
};

export default Main;
