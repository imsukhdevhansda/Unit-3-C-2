// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffeeArr = JSON.parse(localStorage.getItem('coffee'))
console.log(coffeeArr)



let container = document.getElementById('bucket');
let sum=0;


function appendData(data){

    data.forEach( ( elem,index) =>{
        // console.log(elem)
       
        let box = document.createElement('div');
        box.setAttribute('id','cBox')

        let t = document.createElement('p');
        t.setAttribute('id','cTitle')
        t.innerText = elem.title;

        let p = document.createElement('p');
        p.setAttribute('id','cPrice')
         p.innerText = elem.price;
        
         sum+= +(elem.price)


        let img = document.createElement('img');
        img.setAttribute('id','coffeeImg')
        img.src = elem.image;
        let remove = document.createElement('button');
        remove.setAttribute('id','remove_coffee')
        remove.innerText = 'Remove'
        remove.addEventListener('click',function(){
            removeCoffee(index)
        })
        

        box.append(img, t, p, remove)

        container.append(box)


    } )

 }

 appendData(coffeeArr)

 document.getElementById('total_amount').innerText = sum;

 function removeCoffee(index){
    coffeeArr.splice(index,1)

    localStorage.setItem('coffee', JSON.stringify(coffeeArr))
    window.location.reload();


 }
