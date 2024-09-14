const form = document.getElementById("count")
const triangle_template = document.getElementById("triangle-template")
const tooltip_element = document.getElementById("tooltip")
const input_count = form.querySelector("input[name=n]")

function factorial(n){ 
  if(n == 0){ 
    return 1
  }
  return n *factorial(n - 1)
}


function pascal_triangle(n){ 
  triangle_template.innerHTML = "";
  for(let x = 0; x <= n; x ++){
    const row = document.createElement("section")
    row.setAttribute("class" , "row")
    for(let k = 0; k <= x; k++){ 

      let num = document.createElement("span")
      num.style.fontWeight = "bold";

      num.addEventListener("mouseover" , function(e){ 
        tooltip(x, k)
      })

      num.innerText = String(factorial(x) / (factorial(k) * factorial(x-k)))
      if(k !== 0 && x / k == 2){
        num.style.color = "red";
      }if( (k + 1) == (x - k) || (k - 1) == (x - k)){
        num.style.color = "blue";
      }

      row.append(num)
    }
    triangle_template.append(row)
  }
  
}

form.addEventListener("submit" , function(e){
  e.preventDefault()

  pascal_triangle(input_count.value)
})

function tooltip(x, k){ 
  const element = `
      <span>( </span>
        <div>
          <span>${x}</span>
          <span>${k}</span>
        </div>
      <span> )</span>
  `

  tooltip_element.innerHTML  = element;
}


pascal_triangle(input_count.value)