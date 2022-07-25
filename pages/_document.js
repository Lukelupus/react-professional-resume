import { Html, Head, Main, NextScript } from "next/document"

    function Document() {
  
        return (
        <Html lang="en">
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                name="description"
                content="Crie Seu Site Profissional, Empresarial ou Pessoal! Veja o porquê é necessário ter uma presença online para expandir você e seu negócio!"
                />
                <meta name="keywords" content="site pessoal empresarial profissional desenvolvedor web" />
                <meta name="author" content="Lucas Moreira Botelho" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }

    export default Document;

