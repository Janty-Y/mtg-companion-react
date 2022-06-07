import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
  background: #9b9898;
  align-items: center;
  text-align: center;
  margin: 0% 0%;
  font-size: 1.5rem;
}

h1 {
  color: rgb(221, 203, 176);
}

hr {
  margin: 0;
}

div.poison,
div.life-calc {
  border: 1px rgb(170, 170, 170) solid;
}

.btn:active {
  transform: scale(0.95);
  /* to show a "pressed" effect */
}

.btn {
  box-shadow: none !important  ;
  /* getting rid of those bootstrap button shadows */
} 

.form-floating label {
  font-size: 1.1rem;
}


@media (max-height: 800px), (max-width: 450px) {
  body {
    font-size: 0.95rem;
  }
  h1 {
    font-size: 1.5rem;
  }
}

@media only screen and (max-height: 670px) {
  h1 {
    font-size: 1rem;
  }
}`;
