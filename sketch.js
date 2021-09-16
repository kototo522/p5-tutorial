function setup(){
    // 描画領域のセットアップ
    createCanvas(600, 200);
    noStroke();
    fill(255);
    colorMode(HSB, 360, 100, 100, 255);
}

function draw(){
    background(0, 20);
    const step = 20;
    const size = 5;
    for (let y = 0; y <= height; y += step) {
      for (let x = 0; x <= width; x += step) {
        ellipse(x, y, size, size);
      }
    }
    ellipse(mouseX, mouseY, 20, 20);
}