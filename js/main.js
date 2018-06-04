//把code写到#code和style标签里

function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML =
            Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)

        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}

var result = `
/*
 * 面试官你好，我是一只叉叉兵
 * 选择用动画的形式来介绍自己纯粹是为了好玩
 
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
    background: rgb(30,30,30);
    padding: 16px;
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
#code{
    color: #727298;
}

/* 加点 3D 效果*/
#code{
    transform: rotate(360deg);
}

/* 算了不玩了，我来介绍一下自己*/
/* 我需要一张白纸*/

#code{
    position: fixed;
    left: 0px;
    width: 50%;
}
#paper{
    position: fixed;
    right: 0px;
    width: 50%;
    height: 100%;
    background: rgb(30,30,30);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
}
#paper > .content{
    background: white;
    height: 100%;
    width: 100%;
}
`
var result2 = `
/*
* 接下来把 markdown 变成 HTML - marked.js
*/
`
var result3 = `
/*
* 给 HTML 加点样式吧
*/
#code{
    position: fixed;
    left: 40px;
    top: 50px;
    height: 90%;
    width: 40%;
    border-radius:10px;
    transition: all 0.5s;
}
#paper{
    position: fixed;
    right: 40px;
    top: 50px;
    height: 90%;
    width: 53%;
    border-radius: 10px;
    padding: 5px;
    transition: all 0.5s;
}
#paper > .content{
    border-radius: 5px;
}
#code:hover,
#paper:hover{
    box-shadow: 0px 0px 10px 0.5px rgb(0, 0, 0);
}
/*
* 这就是我的会动的简历了
* 谢谢观看
*/
`



var md = `
# 自我介绍
我叫 张博涵
1994 年 2 月出生
大连民族大学毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉JavaScript CSS

# 项目介绍
无缝轮播
原生JS简历
canvas画板

# 联系方式
QQ： 574549756
Email: 574549756@gmail.com
手机: 18640961725
`

writeCode('', result, () => {
    console.log('第一段done')
    createPaper(() => {
        console.log('第二段')
        writeMarkdown(md, () => {
            writeCode(result, result2, () => {
                document.querySelector('#paper>.content').innerHTML = marked(md)
                writeCode(result + result2, result3, () => {

                })
            })
        })
    })
})


function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

