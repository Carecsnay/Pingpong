<h1 align="center">PingPong em POO</h1>

<p align="center">
  <a href="#-Deployment">Deployment</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-Recursos">Recursos</a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## 🌐 Deployment

Você pode visualizar o deploy do projeto através desse link:
<br>🟢[GitHub Pages](https://carecsnay.github.io/pingponga/) 

<p align="center">
  <h3 align="center">Prévia do Projeto</h3>


https://github.com/Carecsnay/Pingpong-main/assets/53373326/b79fcfb6-2207-4c77-ac68-04c6dc516098


</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML5 
- CSS3
- JS POO

## 💻 Projeto

O projeto consiste em um jogo de pong simples implementado em JavaScript usando o elemento canvas do HTML. O objetivo do jogo é rebater a bola com as raquetes e marcar pontos. O campo do jogo é representado por um retângulo verde, com uma linha branca no meio. Há duas raquetes, uma do lado esquerdo e outra do lado direito, controladas pelo mouse e pela lógica do jogo, respectivamente. O jogador da raquete esquerda move a raquete de acordo com a posição do mouse. A bola começa no centro do campo e se move em direção às raquetes. Se a bola atingir a raquete direita, ela rebate na direção oposta. Se a bola passar pela raquete direita e ultrapassar a linha de gol, o jogador da raquete esquerda marca um ponto. O mesmo acontece se a bola passar pela raquete esquerda e ultrapassar a linha de gol, mas o ponto é marcado pelo jogador da raquete direita. O placar é exibido no topo do campo e mostra a pontuação de cada jogador. O jogo continua indefinidamente até que seja encerrado pelo usuário.

## 🧠 Recursos
O projeto utiliza conceitos de Programação Orientada a Objetos (POO) para organizar e estruturar o código. Ele é dividido em diferentes objetos, cada um responsável por uma parte específica do jogo.

- Objeto field: Representa o campo de jogo e possui propriedades como largura e altura. Ele desenha o campo no canvas utilizando o método draw().
- Objeto line: Representa a linha branca no meio do campo. Possui propriedades como largura e altura, e desenha a linha no canvas utilizando o método draw().
- Objeto leftPaddle: Representa a raquete esquerda. Possui propriedades como posição, largura e altura. Desenha a raquete no canvas e atualiza sua posição com base na posição do mouse utilizando o método draw().
- Objeto rightPaddle: Representa a raquete direita. Possui propriedades como posição, largura, altura e velocidade. Desenha a raquete no canvas e atualiza sua posição de acordo com a posição da bola utilizando o método draw().
- Também possui um método speedUp() que aumenta a velocidade da raquete.
- Objeto ball: Representa a bola do jogo. Possui propriedades como posição, raio, velocidade e direção. Desenha a bola no canvas e atualiza sua posição com base na velocidade e direção utilizando o método draw().
- Também possui métodos para calcular a posição da bola em relação ao campo, rebater a bola e incrementar a velocidade.
- Objeto scoreboard: Representa o placar do jogo. Possui propriedades para armazenar a pontuação dos jogadores e métodos para aumentar a pontuação de cada jogador. Desenha o placar no canvas utilizando o método draw().

Além disso, o projeto utiliza o elemento <canvas> do HTML para desenhar os elementos do jogo na tela. O objeto canvasCtx representa o contexto 2D do canvas e é usado para desenhar formas e preencher cores. A utilização do elemento canvas permite criar animações fluidas, desenhando e atualizando os elementos do jogo em cada quadro. O jogo é atualizado e redesenhado continuamente utilizando a função requestAnimationFrame para obter uma animação suave e sem engasgos.

---

Todos os direitos reservados.
