import {
  Header,
  Group,
  Image,
  Text,
  Select,
  Button,
  Autocomplete,
  SimpleGrid,
  Grid,
  BackgroundImage,
  Center,
  Container,
  Stack,
  Menu,
} from "@mantine/core";
import React from "react";
import styles from "../styles/Layout.module.css";
function HomePage() {
  return (
    <>
      <Header height="10vh" className={styles.mainHeader} sx={{border:"none"}}>
        <Group>
          <span>HireHub</span>

          <Menu trigger="hover">
            <Menu.Target>
              <Text>Menu</Text>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Courses</Menu.Item>
              <Menu.Item>Articles</Menu.Item>
              <Menu.Item>Workshops</Menu.Item>
              <Menu.Item>Technology</Menu.Item>
            </Menu.Dropdown>
          </Menu>
            <Menu trigger="hover">
              <Menu.Target>
                <Text>Jobs</Text>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Part Time</Menu.Item>
                <Menu.Item>Full Time</Menu.Item>
                <Menu.Item>Seasonal</Menu.Item>
                <Menu.Item>Internship</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          <span>Notifications</span>
        </Group>
        <Group>
          <span>SignIn</span>
          <span>Register</span>
        </Group>
      </Header>
      <div className={styles.imageBanner}>
        <Image
          alt=""
          src="/images/bg.jpg"
          className={styles.mainBg}
          height="100vh"
        />
        <div className={styles.imageText}>
          <h1>
            <strong>
            <Text span sx={{color:"white"}}>
                Well help you find your{" "}
              </Text>
              
              <Text span color="red">
                desired job
              </Text>
            </strong>
          </h1>
          <Text fz="lg" sx={{color:"white"}}>
            Find Jobs, Employment & Career Opportunities
          </Text>
          <Group>
            <Autocomplete
              label={
                <>
                  <Text span>What</Text>
                  <Text span color="red">
                    eg. Job Company
                  </Text>
                </>
              }
              placeholder="Job title, or company"
              data={["react", "angular", "vue", "svelte"]}
              // rightSection={<Button color='red'>Find Jobs</Button>}
            ></Autocomplete>
          </Group>
        </div>
      </div>
      See How it works
      <SimpleGrid cols={3}>
        <Grid>
          <Grid.Col span={3}>
            <Image
              alt=""
              src="https://hirehubportal.herokuapp.com/images/icon_register_user.webp"
            />
          </Grid.Col>
          <Grid.Col span={7}>
            <Text fz="md" color="red">
              Register An Account
            </Text>
            Contact your admin/PC to get a hirehub account and start applying
            for jobs.
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3}>
            <Image
              alt=""
              src="https://hirehubportal.herokuapp.com/images/icon_search_job.png"
            />
          </Grid.Col>
          <Grid.Col span={7}>
            <Text fz="md" color="red">
              Search Your Job
            </Text>
            Browse profiles, job postings, and proposals based on the technical
            specifications and requirements.
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={3}>
            <Image
              alt=""
              src="https://hirehubportal.herokuapp.com/images//icon_apply.png"
            />
          </Grid.Col>
          <Grid.Col span={7}>
            <Text fz="md" color="red">
              Apply For Job
            </Text>
            Use the hirehub platform to apply, manage your resume, and give
            interviews directly from this platform.
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      {/* <div className={styles.imageBanner}>
      <Image
          alt=""
          src="/cv.svg"
          width="40vh"
        />
        <div className={styles.imageText}>Hi</div>
      </div> */}
      <div className={styles.latestContainer}>
        <Text fz="xl" sx={{ margin: "3% 0" }}>
          <strong>Latest Jobs</strong>
        </Text>

        <Stack>
          <Grid align="center">
            <Grid.Col span={3} className={styles.border}>
              <Image
                alt=""
                src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:8a794ead-879b-460e-b6be-1189ee66ab66/atlassian_logo-1200x630.png"
                width="75%"
              />
            </Grid.Col>
            <Grid.Col span={6} className={styles.border}>
              <Text fz="xl">
                <strong>Altassain</strong>
              </Text>
              <Text fz="md" c="dimmed">
                {" "}
                Bengaluru, Karnataka Full-Time 200000 Thu Jun 16 2022
              </Text>
            </Grid.Col>
            <Grid.Col span={3} className={styles.border}>
              <Center>
                <Button color="red" variant="outline">
                  Apply Now
                </Button>
              </Center>
            </Grid.Col>
          </Grid>
          <Grid align="center">
            <Grid.Col span={3} className={styles.border}>
              <Image
                alt=""
                src="https://wac-cdn-2.atlassian.com/image/upload/f_auto,q_auto/dam/jcr:8a794ead-879b-460e-b6be-1189ee66ab66/atlassian_logo-1200x630.png"
                width="75%"
              />
            </Grid.Col>
            <Grid.Col span={6} className={styles.border}>
              <Text fz="xl">
                <strong>Altassain</strong>
              </Text>
              <Text fz="md" c="dimmed">
                {" "}
                Bengaluru, Karnataka Full-Time 200000 Thu Jun 16 2022
              </Text>
            </Grid.Col>
            <Grid.Col span={3} className={styles.border}>
              <Center>
                <Button color="red" variant="outline">
                  Apply Now
                </Button>
              </Center>
            </Grid.Col>
          </Grid>
        </Stack>
      </div>
    </>
  );
}

export default HomePage;
