function setup(){
    // 描画領域のセットアップ
    createCanvas(600, 200);
    background(0);
    noStroke();
    fill(255);

    const step = 20;

    for(let y = 0; y <= height; y += step){
        for(let x = 0; x <= width; x += step){
            // const size = random(0, 15);
            let size;
            if(random() < 0.95){
                size = random(0, 10);
            }else{
                size = step;
            }
            ellipse(x, y, size, size);
        }
    }
}