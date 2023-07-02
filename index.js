const canvasEl = document.querySelector('canvas'), canvasCtx = canvasEl.getContext('2d');
const gapX = 10;
const mouse = { x: 0, y: 0 }

//Campo do jogo
const field = {
    width: window.innerWidth,
    height: window.innerHeight,
    draw: function () {
        canvasCtx.fillStyle = '#286047';
        canvasCtx.fillRect(0, 0, this.width, this.height);
    },
}

//Linha Branca do Meio
const line = {
    width: 15,
    height: field.height,
    draw: function () {
        const x = field.width / 2 - this.width; //ponto inicial
        const y = 0; //ponto final
        const width = this.width; //largura da linha branca
        const height = this.height; //altura da linha branca.
        canvasCtx.fillStyle = '#FFFFFF'; //cor da linha
        canvasCtx.fillRect(x, y, width, height);
    },
}

//Raquete Esquerda
const leftPaddle = {
    x: gapX,
    y: 0,
    width: line.width,
    height: 200,
    draw: function () {
        canvasCtx.fillStyle = '#FFFFFF';
        canvasCtx.fillRect(this.x, this.y, this.width, this.height);

        this._moveMouse();
    },
    _moveMouse: function () {
        this.y = mouse.y - this.height / 2;
    },
}

//Raquete Direita
const rightPaddle = {
    x: field.width - line.width - gapX,
    y: 100,
    width: line.width,
    height: 200,
    speed: 2,
    draw: function () {
        canvasCtx.fillStyle = '#FFFFFF';
        canvasCtx.fillRect(this.x, this.y, this.width, this.height);
        this._move();
    },
    _move: function () {
        // this.y = ball.y
        if (this.y + this.height / 2 < ball.y + ball.circleRadius) {
            this.y += this.speed;
        } else {
            this.y -= this.speed;
        }
    },
    speedUp: function () {
        this.speed += 1;
    }
}
//Bola
const ball = {
    x: 0,
    y: 500,
    circleRadius: 20,
    ballFilling: 2 * Math.PI,
    ballSpeed: 20,
    directionX: 1,
    directionY: 1,
    draw: function () {
        canvasCtx.fillStyle = '#FFFFFF';
        canvasCtx.beginPath();
        canvasCtx.arc(this.x, this.y, this.circleRadius, 0, this.ballFilling, false);
        canvasCtx.fill();

        this._calcPosition() //limites do campo em relação a bola.
        this._move() //além de desenhas o Draw é responsável por chamar o método de mover a bolinha.
    },
    _move: function () {  //colocamos o " _ " na função por ela se tratar de uma função privada, pois além de ela ser feita ela é chamada no próprio objeto;
        this.x += this.directionX * this.ballSpeed;
        this.y += this.directionY * this.ballSpeed;
    },
    _calcPosition() {
        //Verificando se o jogador 1 marcou 1 ponto (x > que width do campo)
        if (this.x > field.width - this.circleRadius - rightPaddle.width - gapX) {
            //verificando se a raquete direita está no mesmo trajeto que a bola, se estiver ela vai rebater a bola.
            if (this.y + this.circleRadius > rightPaddle.y && this.y - this.circleRadius < rightPaddle.y + rightPaddle.x) {
                //rebate a bola na direção inversa
                this._reverseX();
            } else {
                //pontuar jogador 1 
                scoreboard.increaseHuman();
                this._pointUp();
            }
        }

        //Verificando se o jogador 2 marcou 1 ponto (x < 0)
        if (this.x < this.circleRadius + leftPaddle.width + gapX) {
            //verificando se a raquete esq está no mesmo trajeto que a bola, se estiver ela vai rebater a bola.
            if (this.y + this.circleRadius > leftPaddle.y && this.y - this.circleRadius < leftPaddle.y + leftPaddle.height) {
                //rebate a bola na direção inversa
                this._reverseX();
            } else {
                //pontuar jogador 2
                scoreboard.increaseComputer();
                this._pointUp();
            }
        }

        //Verifica laterais superior e inferior do campo
        if ((this.y - this.circleRadius > field.height - this.circleRadius && this.directionY > 0) || (this.y < 0 && this.directionY < 0)) {
            //Rebate a bola invertendo o sinal da coordenada do eixo Y
            this._reverseY()
        }
    },
    _reverseX() {
        this.directionX = this.directionX * -1; //ou  this.directionY *= -1;
    },
    _reverseY() {
        this.directionY = this.directionY * -1; //ou  this.directionY *= -1;
    },
    _pointUp() {
        //função para reiniciar a posição da bolinha.
        this.x = field.width / 2;
        this.y = field.height / 2;
        this._speedUp(); //incrementa a velocidade quando marca 1 ponto.
    },
    _speedUp() {
        this.ballSpeed += 2;
        rightPaddle.speedUp();
    }
}

//Placar
const scoreboard = {
    human: 0,
    computer: -1,
    increaseHuman: function () {
        this.human++
    },
    increaseComputer: function () {
        this.computer++
    },
    draw: function () {
        canvasCtx.font = 'bold 72px Arial';
        canvasCtx.textAlign = 'center';
        canvasCtx.textBaseline = 'top';
        canvasCtx.fillStyle = '#01341D';
        canvasCtx.fillText(this.human, field.width / 4, 50)
        canvasCtx.fillText(this.computer, field.width / 4 + field.width / 2, 50)
    }
}

function setup() {
    canvasEl.width = canvasCtx.width = field.width;
    canvasEl.height = canvasCtx.height = field.height;
}

function draw() {
    //Se preferir que a bola fique a sobreposta ao número, basta chamar a função draw do objeto scoreboard antes da função draw do objeto bola.
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    scoreboard.draw()
    ball.draw()
}

//Suavizando a bolinha removendo os engasgos da function window.setTimeout
window.animateFrame = (function () {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || //compatibilidade com x navegadores
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60)
        }
    )
})()

function main() {
    animateFrame(main)
    draw()
}

setup()
main()

canvasEl.addEventListener('mousemove', function (e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
})