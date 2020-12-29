import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* we cannot add  title tag here,title tags are to be added component by component
          or page by page basis  */}
          {/* You can also add some some useful meta tags particularly useful for SEO */}
          <meta name="description" content="Our Website" />
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* <meta name="robots" content="noindex,nofollow" /> */}
          <link rel="shortcut icon" href="/favicon.png" />

          {/* <link
            href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
            rel="stylesheet"
          /> */}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
            rel="stylesheet"
          />

          {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          /> */}

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=[Tracking ID]"
          />

          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
              <!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175324348-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-175324348-1');
              </script>

              
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.17.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLgsRnF8Qudt-EIsDDNBvQbN1Trtj0sRA",
    authDomain: "rtdbrulespoc.firebaseapp.com",
    databaseURL: "https://rtdbrulespoc.firebaseio.com",
    projectId: "rtdbrulespoc",
    storageBucket: "rtdbrulespoc.appspot.com",
    messagingSenderId: "159604440760",
    appId: "1:159604440760:web:c68ce67f5d02fb7be8be4d",
    measurementId: "G-0XL990PKZF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
              `,
            }}
          /> */}
        </Head>

        <body>
          {/* include the main component for all the main content */}
          <Main />
          {/* include all the scripts */}
          <NextScript />
          {/* here is a great place to apply some global styles */}
          <style global jsx>{`
            body {
              // font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

// So the document is a really great place to put in the head for SEO that's not  specific example title

// would need to go to the head component of an  individual like layout.

// If you want to persist among all your pages to modify a simple document that so is the custom underscore

// documents page.
