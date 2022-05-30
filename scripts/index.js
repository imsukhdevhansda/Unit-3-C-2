// Add the coffee to local storage with key "coffee"




let coffeeArr = JSON.parse(localStorage.getItem('coffee')) || [];


const url = `https://masai-mock-api.herokuapp.com/coffee/menu` 
async function coffeeData(){

    try{

        let res = await fetch(url);
        let data = await res.json()
        console.log(data.menu.data)
        appendData(data.menu.data)
    }
    catch(err){
        console.log("err :",err);
    }
}

coffeeData()


let container = document.getElementById('menu');

 function appendData(data){

    data.forEach( ( elem) =>{
        // console.log(elem)
       
        let box = document.createElement('div');
        box.setAttribute('id','cBox')

        let t = document.createElement('p');
        t.setAttribute('id','cTitle')
        t.innerText = elem.title;

        let p = document.createElement('p');
        p.setAttribute('id','cPrice')
         p.innerText = elem.price;
        let img = document.createElement('img');
        img.setAttribute('id','coffeeImg')
        img.src = elem.image;
        let add = document.createElement('button');
        add.setAttribute('id','add_to_bucket')
        add.innerText = 'Add to Bucket'
        add.addEventListener('click',function(){
            addCoffee(elem)
        })
        

        box.append(img, t, p, add)

        container.append(box)


    } )



 }

 let count = 0;
 document.getElementById('coffee_count').innerText = count;

 function addCoffee(elem){

    count++
    document.getElementById('coffee_count').innerText = count;
    // console.log(elem)
    coffeeArr.push(elem);

    localStorage.setItem('coffee', JSON.stringify(coffeeArr))
 }