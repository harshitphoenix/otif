import Head from "next/head";
import Image from "next/image";
import Card from "../components/ContentCard";
import Layout from "../components/Layout";
import MainCard from "../components/MainCard";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { Content, Main } from "../data/page-3.json";
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <MainCard image={Main.image} title={Main.title} topText={Main.topText} content={Main.content} button={Main.button}/>
        {Content.map((obj,index) => (
          <Card key={index} title={obj.title} content={obj.content} right={obj.right} image={obj.imageSrc} />
        ))}
      </Layout>
    </div>
  );
}
