import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        background: #f5f4f4;
        color: #333;
        font-family: 'Lato', sans-serif;
    }
    ul {
        list-style-type:none;
    }
    a {
        text-decoration: none;
        display:block;

        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export default GlobalStyle
