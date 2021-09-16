function setup(){
    // 描画領域のセットアップ
    createCanvas(600, 200);
    background(0);
    noStroke();
    fill(255);

    const step = 20;

    for(let y = 0; y <= height; y += step){
        for(let x = 0; x <= width; x += step){
            const size = random(0, 15);

            const r = random(255);
            const g = random(r);
            const b = random(g);
            fill(r, g, b);

            ellipse(x, y, size, size);
        }
    }
}