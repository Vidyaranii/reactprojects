var obj={
    'c-drive':[{name:index.html,exe:html}],
    'd-drive':[{name:first.css,exe:css}],
    'e-drive':[{name:sec.js,exe:js}],
   
}
emp=[]
for(i in obj){
    for(j of obj[i] ){
        j['drive']=i

emp.push(j)
    }
}
console.log(emp);


for(k of emp){
 div=document.createElement('div')
 name=document.createElement("h1")
h1.innerText="k.name"


 exe=document.createElement('h3')
 h3.innerText='k.exe'

drive =document.createElement('h4')
h4.innerText='k.drive'

div.appendChild(h1)
div.appendChild(h3)
div.appendChild(h4)
 ReportBody.appendChild(div)

}

