let tbody=document.querySelector("tbody");
let sort=document.getElementById("sort");
let pagination=document.getElementById("pagination");

let pagestate=1;
let data_per_page=10;
let pages=Math.ceil(productdata.length/data_per_page);


 function renderDOM(data){
    tbody.innerHTML="";

    data.forEach(function(ele){
        let tr=document.createElement("tr");
        let brand=document.createElement("td");
        brand.innerText=ele.brand;

        let price=document.createElement("td");
        price.innerText=ele.price;

        let category=document.createElement("td");
        category.innerText=ele.catagory;

       

        tr.append(brand,price,category);

        tbody.append(tr);
    })
}

function paginatedtable(data,page,perpage){
    let start=perpage*(page-1);
    let end=perpage*(page);
    let splited=data.slice(start,end);
    renderDOM(splited);
}
paginatedtable(productdata,pagestate,data_per_page);


let sorteddata;
sort.addEventListener("change",function(){
    pagestate=1;
    if(sort.value==""){
        paginatedtable(productdata,pagestate,data_per_page);
    }
     else{
        let copydata=productdata.map(function(el){
            return el;
        })
      let sorted=copydata.sort(function(a,b){
          
        if(sort.value=="high-low"){
            return b.price-a.price;
        }else if(sort.value=="low-high"){
            return a.price-b.price;
        }
      })
      sorteddata=sorted;
      paginatedtable(sorted,pagestate,data_per_page);
     }
   
})
console.log(productdata.length)

function renderpage(pages){
   
    for(let i=1;i<=pages;i++){
        let butt=document.createElement("button");
        butt.innerText=i;
        butt.addEventListener("click",function(){
            pagestate=i;
            if(sort.value==""){
            paginatedtable(productdata,pagestate,data_per_page);
            }else{
                paginatedtable(sorteddata,pagestate,data_per_page);
            }
        })
        pagination.append(butt);
    }
}
renderpage(pages);


