# target_challenge

## Requisitos para rodar o script no terminal (Windows, Mac ou Linux)

### 1. Node.js
O código depende de bibliotecas do Node.js, como `readline`, e módulos personalizados. Por isso, você precisará do Node.js instalado.

#### Instalação do Node.js:
- **Windows**: 
  - Baixe e instale o Node.js a partir do [site oficial](https://nodejs.org/).
  - Após a instalação, verifique a instalação no terminal/cmd com:
    ```bash
    node -v
    npm -v
    ```

- **Mac/Linux**: 
  - Instale o Node.js via Homebrew (Mac) ou via gerenciadores de pacotes (Linux).
    ```bash
    # Mac
    brew install node

    # Linux (Ubuntu/Debian)
    sudo apt update
    sudo apt install nodejs npm
    ```
  - Verifique a instalação:
    ```bash
    node -v
    npm -v
    ```

### 2. Executar o script

Após instalar o Node.js e criar os arquivos, siga os passos abaixo:

1. Navegue até o diretório do projeto no terminal.
2. Execute o seguinte comando para rodar o script:

    ```bash
    node terminalScreen.js
    ```

    Ao executar o terminal terá um menu interativo com as opções desejadas.

## Questões

1. Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    **IMPORTANTE**: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código.

2. Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

    **IMPORTANTE**: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código.

3. Observe o trecho de código abaixo:
    ```text
    int INDICE = 12, SOMA = 0, K = 1; 
    enquanto K < INDICE faça { 
        K = K + 1; 
        SOMA = SOMA + K; 
    } 
    imprimir(SOMA);
    ```
    Ao final do processamento, qual será o valor da variável SOMA?

    **Resposta**:
    ```text
    77
    ```

4. Descubra a lógica e complete o próximo elemento:
    - a) 1, 3, 5, 7, ___
    - b) 2, 4, 8, 16, 32, 64, ____
    - c) 0, 1, 4, 9, 16, 25, 36, ____
    - d) 4, 16, 36, 64, ____
    - e) 1, 1, 2, 3, 5, 8, ____
    - f) 2, 10, 12, 16, 17, 18, 19, ____

    **Resposta**:
    ```text
    a) 9
    b) 128
    c) 49
    d) 100
    e) 13
    f) 200
    ```

5. Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

    **Resposta**:
    ```text
    Ligar o Interruptor A e deixar ligado por alguns minutos. Isso permitirá que a lâmpada conectada ao Interruptor A aqueça.
    Após alguns minutos, desligue o Interruptor A e ligue o Interruptor B. Deixe o Interruptor B ligado.

    Indo até a sala das lâmpadas pela primeira vez e observe o seguinte:
    - Lâmpada acesa: A lâmpada que está acesa está conectada ao Interruptor B, pois você o deixou ligado antes de ir até a sala.
    - Lâmpada apagada e quente: A lâmpada que está apagada mas quente foi a que estava ligada ao Interruptor A. O calor indica que esteve ligada por algum tempo.
    - Lâmpada apagada e fria: A lâmpada que está apagada e fria está conectada ao Interruptor C, pois essa lâmpada nunca foi ligada.
    ```
