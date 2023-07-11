# word-counter 
## Um contador de palavras simples e minimalista! ✔

# v1 - http://adjoining-drum.surge.sh/

Projeto para contar o número de palavras oferecidas por um usuário. 
Para este utilizei Javascript, React, RegExp e ainda espero escrever alguns testes utilizando a biblioteca React de testes com Jest.

Todo e qualquer caracter separado por espaços será considerado uma palavra, são os casos:

- Uma palavra: istoÉumaPalavra,
- Uma palavra: isto-tb..
- Uma palavra: ,.;
- Dez palavras: Esta é uma frase "normal", que possui também algumas pontuações. 
- Espaços e quebra de linhas não são considerados.

A simple project to count a number of words in a given string with JavaScript, React, RegExp and some Jest to test it.

# v2 - http://unkempt-bears.surge.sh/

- Javascript, 
- React ( useState, useEffect ), 
- RegExp,
- Jest.

## Agora o texto é salvo em tempo real, e caso a aplicação seja reaberta o texto é recuperado.
Adições:

- É salvo no localStorage um objeto com o texto e o contador atual sempre que o usuário
digita algo.
- É recuperado este objeto e o texto reapresentado quando a aplicação é reaberta.
- Testes para toda a aplicação:

![tests](https://user-images.githubusercontent.com/65511670/90343455-dbb89280-dfe6-11ea-88c8-a60b0e5d2ce5.png)

Correções:

- Correções de estilo.
![screencapture-localhost-3000-2020-08-16-17_21_33 (1)](https://user-images.githubusercontent.com/65511670/90343422-a0b65f00-dfe6-11ea-839d-0f7067f6087a.png)
