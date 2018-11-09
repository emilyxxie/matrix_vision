# Matrix Vision
Hello from inside the Matrix.

This project livestreams from your webcam to put you inside the Matrix, mapping each raining katakana character to a corresponding pixel brightness / color value.

  ![alt tag](matrix_preview_2.gif)

## Instructions
Clone this repository and run an HTTP server serving the contents of the folder. Then open up your browser and point it to `localhost`.

### Using Docker

```
git clone https://github.com/emilyxxie/matrix_vision.git
docker run -v $(pwd)/matrix_vision:/srv -p 2015:2015 abiosoft/caddy
```
Then open your browser on `localhost:2015`.

## Tips

* Avoid being backlit for best results

## Additional

This builds on top of a previous project I'd done, which was a reproduction of a 2D digital rain animation: https://github.com/emilyxxie/green_rain
