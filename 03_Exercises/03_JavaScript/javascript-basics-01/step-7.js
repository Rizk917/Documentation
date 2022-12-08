function myFunction() {
    const x = document.getElementById("shoe_size").value;
    const y = document.getElementById("year").value;
    const z=((((Number(x)*2)+5)*50)-Number(y)+1766);

    alert(z);
  
  }