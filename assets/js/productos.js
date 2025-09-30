let $prod=document.querySelectorAll('.prod');
let $prodP=document.querySelectorAll('.prod-p');

const cb=(entries)=>{
    entries.forEach(el => {
        if(el.isIntersecting){
            //$prod.classList.add('prod-unblur')
            $prod.forEach(el=>el.classList.add('prod-unblur'))
        }else{
            //$prod.classList.remove('prod-unblur')
            $prod.forEach(el=>el.classList.remove('prod-unblur'))
        }
    });
}

const cb1=(entries)=>{
    entries.forEach(el => {
        if(el.isIntersecting){
            //$prod.classList.add('prod-unblur')
            $prodP.forEach(el=>el.classList.add('prod-pmove'))
        }else{
            //$prod.classList.remove('prod-unblur')
            $prodP.forEach(el=>el.classList.remove('prod-pmove'))
        }
    });
}
let ob=new IntersectionObserver(cb,{threshold:1});
let ob1=new IntersectionObserver(cb1,{threshold:1});
//ob.observe($prod)
$prod.forEach(el=>ob.observe(el))
$prodP.forEach(el=>ob1.observe(el))
