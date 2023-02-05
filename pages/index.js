import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Row from "@/components/row";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import {getColorsRandom, colorsPrimary} from "@/utils/utils";

export default function Home() {
 
  const [primary, setPrimary] = useState(colorsPrimary);
  const [secondari, setSecondary] = useState(getColorsRandom());
  const [colorTocado, setColorTocado] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 2) {
      setTimeout(() => {
        if (secondari[colorTocado[0]] === secondari[colorTocado[1]]) {
          setCount(0);
          setColorTocado([]);
        } else {
          setPrimary((prev) => {
            const nuevo = [...prev];
            nuevo[colorTocado[0]] = "black";
            nuevo[colorTocado[1]] = "black";
            return nuevo;
          });
          setCount(0);
          setColorTocado([]);
        }
      }, 250);
    }
  }, [count]);

  const handleClick = (e) => {
    setPrimary((prev) => {
      const nuevo = [...prev];
      nuevo[e.target.id] = secondari[e.target.id];
      return nuevo;
    });
    setColorTocado([...colorTocado, e.target.id]);
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {JSON.stringify(primary) == JSON.stringify(secondari) ? (
          <>
            <h1>Has Ganado Campeon</h1>
            <button
              onClick={() => {
                setSecondary(getColorsRandom());
                setPrimary(colorsPrimary);
              }}
            >
              Nueva Partida
            </button>
          </>
        ) : (
          <div className={styles.game}>
            <Row>
              <Card id="0" color={primary[0]} handleClick={handleClick} />
              <Card id="1" color={primary[1]} handleClick={handleClick} />
              <Card id="2" color={primary[2]} handleClick={handleClick} />
              <Card id="3" color={primary[3]} handleClick={handleClick} />
            </Row>
            <Row>
              <Card id="4" color={primary[4]} handleClick={handleClick} />
              <Card id="5" color={primary[5]} handleClick={handleClick} />
              <Card id="6" color={primary[6]} handleClick={handleClick} />
              <Card id="7" color={primary[7]} handleClick={handleClick} />
            </Row>
            <Row>
              <Card id="8" color={primary[8]} handleClick={handleClick} />
              <Card id="9" color={primary[9]} handleClick={handleClick} />
              <Card id="10" color={primary[10]} handleClick={handleClick} />
              <Card id="11" color={primary[11]} handleClick={handleClick} />
            </Row>
            <Row>
              <Card id="12" color={primary[12]} handleClick={handleClick} />
              <Card id="13" color={primary[13]} handleClick={handleClick} />
              <Card id="14" color={primary[14]} handleClick={handleClick} />
              <Card id="15" color={primary[15]} handleClick={handleClick} />
            </Row>
          </div>
        )}
      </main>
    </>
  );
}
