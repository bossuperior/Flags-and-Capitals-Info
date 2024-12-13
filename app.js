const container = document.getElementById("container") //เรียก container div class มาใช้งาน
const getCountries = async()=>{
    const url = 'https://restcountries.com/v2/all'
    const res = await fetch(url) //await = ต้องรอให้ดึงข้อมูลจาก api ครบก่อนค่อยไปทำอย่างอื่น
    const items = await res.json() //แปลงข้อมูลใน res เป็น๋ json แล้วเก็บใน Array
    items.forEach(element =>{ //ดึง element แต่ละตัวใน array มาใช้
        createCard(element) //โยน element เข้าไปเก็บใน data parameter
    });
}
const createCard=(data)=>{ //สร้างการแสดงข้อมูลในรูปแบบ Card
    const cardEl = document.createElement("div") //สร้าง card
    cardEl.classList.add("country") //เพิ่ม class ใน div
    const contentHTML = `
        <div class = "img-container"> <!--แสดงธงชาติ-->
            <img src = "${data.flag}"/>
        </div>
        <div class = "info"> <!--แสดงรายละเอียด-->
            <h3 class = "name">${data.name}</h3> <!--ชื่อประเทศ-->
            <small>Capital : <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML = contentHTML //ยัดเนื้อหาเข้าไปใน cardEl
    container.appendChild(cardEl) //ยัด cardEl เข้าไปใน container
}
getCountries();