import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Head from "next/head";
import { Title, Text, Image, Group } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <>
      <main className="fullflex">
        <section className={styles.container}>
          <Group position="apart">
            <div>
              <Title className={styles.intro}>Hi, my name is</Title>
              <Title className={styles.name} size="h1" color="#ffa64a">
                Pat <span className={styles.subname}>( Patato )</span>
              </Title>
            </div>
            <div className={styles.pfpimage}>
              <div className={styles.pfpcontainer}>
                <Image
                  style={{ alignItems: "center" }}
                  width={130}
                  height={130}
                  src="/pfp.jpg"
                  alt="Profile Picture"
                  radius="md"
                />
              </div>
            </div>
          </Group>

          <Text size="xl">
            I’m a full-stack developer who likes creating fun software and
            websites
          </Text>
        </section>
      </main>
    </>
  );
};

export default Home;
