import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        color:var(--secondary);
    }
    html,body, #root{
        max-height: 100vh;
        max-width:100vw;
        width:100%;
        height:100%;
    }
    *, button, input{
        border:0;
        background:none;
        font-family: -apple-system, system-ui ,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    html{
        background: var(--primary);
    }
    :root {
    --primary: #EDEDED;
    --secondary: #15181C;
    --menu: #FFF159;
    --white: #ffff;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --like-hover: #c21448;
    --button: #33A1F2;
    --button-hover: #0c73be;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }
`;
