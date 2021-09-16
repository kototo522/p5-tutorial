function setup(){
    // 描画領域のセットアップ
    createCanvas(200, 200);
    background(0);
    noStroke();
    fill(255);

    const size = 5;
    ellipse(50, 50, size, size);
    ellipse(100, 50, size, size);
    ellipse(150, 50, size, size);

    ellipse(50, 100, size, size);
    ellipse(100, 100, size, size);
    ellipse(150, 100, size, size);

    ellipse(50, 150, size, size);
    ellipse(100, 150, size, size);
    ellipse(150, 150, size, size);
}