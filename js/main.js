// The code snippet you want to highlight, as a string
var text = "body{color: red;}";

// Returns a highlighted HTML string
var css = Prism.highlight(text, Prism.languages.css);


var result = `
/*
 * 面试官你好，我是一只叉叉兵
 * 选择用动画的形式来介绍自己纯粹是为了好玩
 *
 * 但是只用文字显得太单调了
 * 我们来用代码介绍吧

 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
  border: 1px solid red;
  padding: 16;
}
/*我需要一点代码高亮*/
.token.selector{
    color: #690;
}
.token.property{
    color: #906;
}
.token.function{
    color: #DD4A68;
}

/* 加点 3D 效果*/
#code{
    transform: rotate(360deg);
}

/* 算了不玩了，我来介绍一下自己*/
/* 我需要一张白纸*/
`

var result2 = `
    
`

var n = 0

var id = setInterval(()=>{
	n += 1
    code.innerHTML = result.substring(0,n)
    code.innerHTML = 
        Prism.highlight(code.innerHTML, Prism.languages.css)
	
	styleTag.innerHTML = result.substring(0,n)
	console.log('row')
	if(n >= result.length){
        window.clearInterval(id)
        fn2()
        console.log(result)
        fn3(result)
	}
},50)

function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}

function fn3(preResult){
    var result = `
#paper{
    width: 100px; height: 100px;
    background: red;
}    
    `
    var n = 0
    var id = setInterval(()=>{
        n += 1
        code.innerHTML = preResult + result.substring(0,n)
        code.innerHTML = 
        Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0,n)
        if(n>= result.length){
            window.clearInterval(id)
        }
    },50)
}