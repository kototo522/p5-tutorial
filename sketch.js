function setup(){
    // 描画領域のセットアップ
    createCanvas(200, 200);
    background(0);
    noStroke();
    fill(255);

    const size = 5;

    for(let y = 50; y <= 150; y += 50){
        for(let x = 50; x <= 150; x += 50){
            ellipse(x, y, size, size);
        }
    }
}