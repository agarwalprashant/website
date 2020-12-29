import Head from "next/head";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  return (
    <div className="website-container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavigationBar />

      <style jsx>{`
        .website-container {
          min-height: 100vh;
          // padding: 0 5rem;
          min-width: 100%;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          //   Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          //   sans-serif;
          font-family: "Montserrat", sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
