.pace {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 5px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    -webkit-pointer-events: none;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    z-index: 2000;
    position: fixed;
    margin: auto;
    right: 20px;
    bottom: 25px;
    width: 200px;
    height: 8px;
    border: 1px solid #000000;
    background-color: #fff;
}
.pace .pace-progress {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box;
    -webkit-transition: width 1s ease-in-out 1s linear;
    -moz-transition: width 1s ease-in-out 1s linear;
    -ms-transition: width 1s ease-in-out 1s linear;
    -o-transition: width 1s ease-in-out 1s linear;
    transition: width 1s ease-in-out 1s linear;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    max-width: 190px;
    position: fixed;
    z-index: 2000;
    display: block;
    position: absolute;
    left: 1px;
    top: 1px;
    height: 4px;
    font-size: 12px;
    background: #000000;
    color: #000000;
    line-height: 20px;
    font-weight: bold;
    font-family: "寰蒋闆呴粦";
}
.pace .pace-progress:after {
    content: attr(data-progress-text);
    display: inline-block;
    margin-top: 5px;
    line-height: 20px;
    text-align: center;
}
.pace.pace-inactive {
    display: none;
}