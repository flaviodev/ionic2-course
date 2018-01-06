docker run -it  -p 8100:8100 -p 35729:35729 -p 53703:53703 -v "$(pwd)/aluraCar:/var/www" -w "/var/www" beevelop/ionic:v2.2.1  bash
